# Luis Araujo — Personal Portfolio

Personal CV/portfolio website built with React 18, TypeScript, Tailwind CSS, and Framer Motion. Dark premium theme with spring-physics animations and editorial layout.

## Tech Stack

- **React 18** + TypeScript
- **Tailwind CSS 3** — utility-first styling, custom zinc/emerald theme
- **Framer Motion 10** — scroll-triggered animations, parallax tilt cards
- **Phosphor Icons** — consistent icon system
- **CRACO** — CRA configuration override

## Getting Started

```bash
npm install
npm start
```

Dev server runs on [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Dev server |
| `npm run build` | Production build to `build/` |
| `npm test` | Jest test runner |
| `npm run deploy` | Deploy to S3 (`cv-luis-araujo` bucket) |

## Deployment

### AWS S3

```bash
aws configure   # region: us-east-2
npm run build
npm run deploy
```

### Docker

```bash
docker build -t cv-app .
docker run -d -p 80:80 -p 443:443 cv-app
```

### SSL Certificate (Let's Encrypt)

```bash
docker run -it -v ./certificates:/etc/letsencrypt certbot/certbot certonly \
  --manual --preferred-challenges dns \
  --email araujoluis358@gmail.com \
  --server https://acme-v02.api.letsencrypt.org/directory \
  --agree-tos -d '*.luisaraujo.io'
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `REACT_APP_TRACKING_ID` | Google Analytics 4 measurement ID (optional) |
