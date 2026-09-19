<div align="center">

# Devanand M — Official Portfolio

[![Live Site](https://img.shields.io/badge/Live_Site-www.devanandworks.in-2563EB?style=for-the-badge&logo=googlechrome&logoColor=white)](https://www.devanandworks.in/)
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)](https://www.framer.com/motion/)

<p align="center">
  The official personal portfolio website of <strong>Devanand M</strong>, built with <strong>React 19</strong>, <strong>TypeScript</strong>, <strong>Tailwind CSS</strong>, and <strong>Framer Motion</strong>, inspired by Apple's minimalist design philosophy.
</p>

[**Visit www.devanandworks.in »**](https://www.devanandworks.in/)

</div>

---

## ✦ Overview

This is the official personal website of **Devanand M** ([@devanxcode](https://github.com/devanxcode)), an aspiring software developer based in India.

The site is built with a **developer-first** ethos — highlighting real progress, core foundations in HTML, CSS, JavaScript, and Bootstrap, and the ongoing journey of mastering the **MERN stack** (MongoDB, Express, React, Node.js) and Python. It intentionally avoids buzzword filler, fake testimonials, or vanity metrics.

---

## ✦ Key Features

- **Apple-Inspired Design Ethos**: Lots of whitespace, tight confident headings, subtle hairline borders (`0.08` opacity), and a restrained monochrome color scheme with calm accent highlights.
- **Floating Island Navigation**: A centered dynamic dock with smooth spring-physics sliding pill hover animations on desktop and an elegant frosted backdrop sheet on mobile.
- **Light & Dark Mode**: Respects system preferences (`prefers-color-scheme`) with smooth theme transitions and `localStorage` persistence.
- **Dedicated Projects Page (`#/projects`)**: A separate route ready to showcase web applications as they reach release quality, with an honest in-progress development state.
- **Prop Firm Trading Section**: A small, tasteful section featuring **Funded Hive** (`https://funded.tradinghive.com/`), focusing strictly on risk management, patience, and execution discipline.
- **Single Source of Truth**: All personal details, skill categories, roadmap milestones, and project cards are centralized in one typed file (`src/data/portfolioData.ts`).
- **Automated CI/CD**: Fully configured GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds and deploys the site to GitHub Pages on every commit.

---

## ✦ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[Vite](https://vitejs.dev/)** | Fast Next-Gen frontend build tooling |
| **[React 19](https://react.dev/)** | Component-driven UI architecture |
| **[TypeScript](https://www.typescriptlang.org/)** | Static typing and strict runtime safety |
| **[Tailwind CSS](https://tailwindcss.com/)** | Utility-first styling with custom palette and dark mode |
| **[Framer Motion](https://www.framer.com/motion/)** | Fluid micro-interactions, scroll reveals, and sliding docks |
| **[React Router](https://reactrouter.com/)** | Client-side routing with `HashRouter` for zero-config GitHub Pages |
| **[Lucide React](https://lucide.dev/)** | Precision icons for clean interfaces |
| **[GitHub Actions](https://github.com/features/actions)** | Automated build & deployment pipeline |

---

## ✦ Project Structure

```text
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment to GitHub Pages
├── public/
│   ├── _redirects              # Netlify SPA redirect fallback
│   └── favicon.svg             # Custom monogram favicon
├── src/
│   ├── components/
│   │   ├── icons/
│   │   │   └── BrandIcons.tsx  # Precision SVG icons for GitHub & Instagram
│   │   ├── Footer.tsx          # Minimal footer with copyright & back-to-top
│   │   ├── Navbar.tsx          # Floating island dock with sliding hover pill
│   │   ├── ScrollProgress.tsx  # Hairline scroll progress bar
│   │   ├── SectionHeading.tsx  # Section header with badge kicker
│   │   └── ThemeToggle.tsx     # Animated Sun/Moon toggle
│   ├── data/
│   │   └── portfolioData.ts    # Single source of truth for all data & links
│   ├── hooks/
│   │   ├── useReducedMotion.ts # Accessibility hook for reduced motion
│   │   └── useTheme.ts         # Dark/Light theme manager with system sync
│   ├── pages/
│   │   ├── HomePage.tsx        # Main portfolio page
│   │   └── ProjectsPage.tsx    # Dedicated Projects showcase page
│   ├── sections/
│   │   ├── Hero.tsx            # Confident typography & CTAs
│   │   ├── About.tsx           # Honest bio & core values
│   │   ├── Skills.tsx          # Categorized chips with "Learning" badges
│   │   ├── Roadmap.tsx         # MERN progression timeline
│   │   ├── Trading.tsx         # Funded Hive prop firm card & principles
│   │   └── Contact.tsx         # Direct channels (Email, GitHub, Instagram)
│   ├── types/
│   │   └── portfolio.ts        # Strict TypeScript schemas
│   ├── utils/
│   │   └── animation.ts        # Shared Apple cubic-bezier easing curves
│   ├── App.tsx                 # Root application with HashRouter
│   ├── index.css               # Tailwind directives & glassmorphism utilities
│   └── main.tsx                # React root mount
├── tailwind.config.js          # Palette, radii, and cubic-bezier easing
└── vite.config.ts              # Vite configuration with relative base path
```

---

## ✦ Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or newer)
- npm, pnpm, or yarn

### 1. Clone the repository
```bash
git clone https://github.com/devanxcode/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the site.

### 4. Build for production
```bash
npm run build
npm run preview
```

---

## ✦ How to Update Your Information

All content is managed in **`src/data/portfolioData.ts`**:

- **Update Bio or Socials**: Edit `portfolioData.personal`, `portfolioData.about`, or `portfolioData.socials`.
- **Add Real Projects**: In `portfolioData.projects`, add a new project object:
  ```typescript
  projects: [
    {
      id: 'my-project',
      title: 'Project Title',
      description: 'A brief description of what you built.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      githubUrl: 'https://github.com/devanxcode/repo-name',
      liveUrl: 'https://demo-url.vercel.app',
      status: 'completed', // or 'in-progress'
      date: '2026'
    }
  ]
  ```
  The Projects page automatically switches from the empty state to the project card grid!

---

## ✦ Connect

- **GitHub**: [@devanxcode](https://github.com/devanxcode)
- **Email**: [dexanxcode@gmail.com](mailto:dexanxcode@gmail.com)
- **Instagram**: [@devanxnd.fx](https://instagram.com/devanxnd.fx)

---

<div align="center">
  <sub>Designed & Developed with precision by <strong>Devanand M</strong>.</sub>
</div>