# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal CV/portfolio single-page application built with Create React App (React 16, TypeScript). Deployed via Docker (nginx) or AWS S3.

## Commands

- `npm start` — dev server on localhost:3000
- `npm run build` — production build to `build/`
- `npm test` — run tests (Jest, interactive watch mode)
- `npm run storybook` — launch Storybook
- `npm run deploy` — deploy build to S3 (`cv-luis-araujo` bucket)

## Architecture

- **Routing**: React Router v5 (`BrowserRouter` + `Switch`) in `src/App.tsx`. Two routes: `/` (Home) and `*` (NotFound).
- **Home page sections** are composed sequentially in `App.tsx`: NavigationBar → IntroduceYourself → Experience → Skills → Portfolio → Contact → Footer, separated by `Subheader` components.
- **Data layer**: Static TypeScript data files in `src/data/` (experiences, skills, portfolio, education, certifications) — no API calls. Components read directly from these exports.
- **Styling**: Bootstrap 4 via react-bootstrap, plus per-section CSS files in `src/styles/`.
- **Analytics**: Google Analytics 4 via `ga-4-react`, initialized in `App.tsx` using `REACT_APP_TRACKING_ID` env var.
- **TypeScript config**: strict mode enabled, `noImplicitAny` disabled.
