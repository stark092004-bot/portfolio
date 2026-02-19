# Yash Jain — Portfolio v3

A modern, responsive full-stack developer portfolio built with **React + Vite**, served by a production-hardened **Express** server, and deployed to **Azure App Service**.

## Tech Stack

| Layer     | Tech                                       |
|-----------|--------------------------------------------|
| Frontend  | React 19, Vite 7, Framer Motion, React Router |
| Styling   | CSS Variables (dark/light theme)            |
| Icons     | React Icons                                |
| Server    | Node.js 22 + Express 4                     |
| Deploy    | Azure App Service (Central India)          |

## Project Structure

```
src/
  components/   # Reusable UI components
  pages/        # Route-level page components
  context/      # React context (ThemeContext)
  data/         # Static portfolio data
  assets/       # Source assets (imported by Vite)
public/
  assets/       # Static assets served at runtime (badges, PDFs, resume)
server.js       # Production Express server
vite.config.js  # Vite build config
```

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build   # outputs to dist/
npm start       # serves dist/ on port 8080
```

## Deployment (Azure App Service)

```bash
npm run build
zip -r deploy.zip dist/ server.js package.json package-lock.json web.config
az webapp deploy --resource-group Yash-RG --name yash-jain --src-path deploy.zip --type zip
```

Live: **https://yash-jain.azurewebsites.net**
