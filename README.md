# Glance Security Guard Services (GSS) Website

A premium, modern, responsive marketing website for **Glance Security Guard Services**, built with React, Vite and Tailwind CSS.

## About

This single-page site presents GSS as a professional Zimbabwe-based security company, featuring:

- Premium navy + red + white brand identity
- Hero section with GSS security photography
- About, Services, Why GSS, Industries and Contact sections
- Responsive design and smooth micro-interactions
- SEO metadata, Open Graph tags and accessible components

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 8**
- **Tailwind CSS 4**
- **Lucide React** icons

## Scripts

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

- `src/sections/` – page sections (Hero, About, Services, etc.)
- `src/components/` – reusable UI components
- `src/data.ts` – content and navigation data
- `public/images/` – photography and brand assets

## Deployment

The site is configured as a static Vite build. Run `npm run build` to produce the `dist/` folder, then deploy the `dist/` folder to any static host such as Vercel, Netlify or Cloudflare Pages.

For Vercel, use:

```bash
vercel --prod dist
```

Or connect the GitHub repository to Vercel and set the **Build command** to `npm run build` and the **Output directory** to `dist`.

## Contact

- **Glance Security Guard Services**
- **Phone:** 0712008941

© 2026 Glance Security Guard Services. All rights reserved.
