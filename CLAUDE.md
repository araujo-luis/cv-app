# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal CV/portfolio single-page application. React 18, TypeScript, Tailwind CSS, Framer Motion. Dark premium theme with zinc-950 background and emerald accent (#10b981). Deployed via Docker (nginx) or AWS S3.

## Commands

- `npm start` — dev server on localhost:3000 (uses craco)
- `npm run build` — production build to `build/`
- `npm test` — run tests (Jest, interactive watch mode)
- `npm run deploy` — deploy build to S3 (`cv-luis-araujo` bucket, us-east-2)

## Architecture

- **Routing**: React Router v5 (`BrowserRouter` + `Switch`) in `src/App.tsx`. Two routes: `/` (Home) and `*` (NotFound).
- **Home page sections** composed sequentially in the `Home` component inside `App.tsx`: NavigationBar → IntroduceYourself → Experience → Skills → VideoDivider → Portfolio → Contact → Footer.
- **Data layer**: Static TypeScript files in `src/data/` (experiences, skills, portfolio, education, certifications) — no API calls. Descriptions use HTML strings rendered via `dangerouslySetInnerHTML`.
- **Styling**: Tailwind CSS 3 via PostCSS (configured in `postcss.config.js`). No separate CSS files per component — all styling is utility classes. `craco.config.js` exists but is empty; PostCSS handles Tailwind compilation. Custom `.grid-pattern` class in `index.css` for subtle grid backgrounds.
- **Fonts**: Outfit (sans) and JetBrains Mono (mono) loaded via Google Fonts CDN in `public/index.html`. Configured in `tailwind.config.js`.
- **Animations**: Framer Motion variants centralized in `src/lib/animations.ts` (staggerContainer, fadeUp, fadeIn, scaleIn, springTransition). All sections use `whileInView` triggers with these shared variants.
- **Icons**: Phosphor Icons (`@phosphor-icons/react`) throughout — not FontAwesome.
- **Analytics**: Google Analytics 4 via `ga-4-react`, initialized in `App.tsx` using `REACT_APP_TRACKING_ID` env var.
- **TypeScript**: strict mode enabled, `noImplicitAny` disabled. Pinned to 4.x (5.x crashes with CRA's fork-ts-checker-webpack-plugin). Framer Motion pinned to 10.x (11.x has JSX type issues with React 18).

## Key Patterns

- All components are functional (`React.FC`), no class components.
- Hero section (`IntroduceYourself`) uses dual `<img>` tags for responsive photo handling: desktop is flipped (`-scale-x-100`) with left-fading gradients, mobile is unflipped with right-fading gradients.
- Portfolio cards use `useMotionValue`/`useTransform` for parallax tilt on hover.
- `TextScramble` component in `src/components/ui/` provides character-by-character animation cycling through an array of texts.
- `SectionHeading` component provides consistent left-aligned headings with emerald accent bar.
