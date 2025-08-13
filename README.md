# Investment Philosophy Website

A professional Next.js 15 + TypeScript + Tailwind CSS website showcasing investment philosophy with a clean, modern design inspired by leading venture capital firms.

## Features

- **Investment Philosophy Page**: Complete page with hero section, investment thesis, dual investment tracks, value creation capabilities, competitive edge, and investment style
- **Responsive Design**: Mobile-first approach with responsive tables and layouts
- **Professional Styling**: Clean, investor-focused design with consistent branding
- **TypeScript**: Full type safety with strict mode
- **Tailwind CSS**: Modern utility-first styling
- **SEO Optimized**: Proper metadata and semantic HTML

## Pages

### Investment Philosophy (`/investment-philosophy`)
- Hero section with core mission
- Global Strategic Triangle (Talent – Capital – Opportunity)
- Dual Investment Tracks (Venture Creation & AI Transformation)
- End-to-End Value Creation Capabilities table
- Competitive Edge analysis
- Investment Style characteristics

## Components

- `InvestmentPhilosophyHero.tsx`: Animated hero section with fade-in effects
- `InvestmentSection.tsx`: Reusable section component for consistent layout
- `page.tsx`: Main investment philosophy page with all content sections

## Design System

### Colors
- Primary: Deep blue (#1E3A8A) for emphasis elements
- Secondary: Neutral gray (#4B5563) for secondary text
- Background: Light gray (#F9FAFB) for clean reading experience
- Text: Dark gray (#111827) for primary text

### Typography
- Responsive font sizes (text-4xl sm:text-5xl for headings)
- Professional font stack with system fonts
- Clear hierarchy with proper spacing

### Components
- Cards with rounded corners and subtle shadows
- Responsive tables with hover effects
- Animated buttons with hover states
- Clean section layouts with proper spacing

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000/investment-philosophy](http://localhost:3000/investment-philosophy) in your browser.

## Build

```bash
npm run build
```

## Technologies Used

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- React 18
- PostCSS
- ESLint

## Project Structure

```
├── app/
│   ├── investment-philosophy/
│   │   └── page.tsx
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── InvestmentPhilosophyHero.tsx
│   └── InvestmentSection.tsx
├── tailwind.config.js
├── next.config.js
└── package.json
```
