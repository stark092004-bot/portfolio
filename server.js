import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;
const NODE_ENV = process.env.NODE_ENV || 'production';

// ── Security headers ─────────────────────────────────────────────────────────
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  if (NODE_ENV === 'production') {
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  }
  next();
});

// ── Static files with cache headers ─────────────────────────────────────────
// Hashed assets (JS/CSS bundles) → long-term cache
app.use('/assets', express.static(path.join(__dirname, 'dist', 'assets'), {
  maxAge: '1y',
  immutable: true,
}));

// Everything else in dist (index.html, PDFs, images, etc.) → short-term cache
app.use(express.static(path.join(__dirname, 'dist'), {
  maxAge: '1h',
}));

// ── SPA fallback ─────────────────────────────────────────────────────────────
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// ── Error handler ────────────────────────────────────────────────────────────
app.use((err, req, res, _next) => {
  process.stderr.write(`[ERROR] ${err.message}\n`);
  res.status(500).send('Internal Server Error');
});

// ── Start ────────────────────────────────────────────────────────────────────
const server = app.listen(PORT, () => {
  process.stdout.write(`[INFO] Server running on port ${PORT} (${NODE_ENV})\n`);
});

// ── Graceful shutdown ────────────────────────────────────────────────────────
const shutdown = (signal) => {
  process.stdout.write(`[INFO] ${signal} received — shutting down gracefully\n`);
  server.close(() => process.exit(0));
  setTimeout(() => process.exit(1), 10000);
};
process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));
