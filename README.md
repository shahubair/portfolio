# 🚀 Shah Ubair — Interactive Portfolio

A next-level, game-like interactive portfolio built with **Next.js 14**, **Tailwind CSS**, **Framer Motion**, and a canvas-based neural network background.

## 🎮 Features

- **Boot Sequence** — Cinematic system initialization animation before the site loads
- **Neural Network Background** — Interactive canvas with particles that react to mouse movement
- **Custom Cursor** — Glowing cursor with ring that morphs on hover (desktop)
- **Command Palette** — Press `⌘K` / `Ctrl+K` to open a VS Code-style command palette
- **Animated Sections** — Each section fades/slides in as you scroll
- **Expanding Experience Cards** — Click any experience card to expand the full detail panel
- **Project Modals** — Click any project card to open a full technical breakdown overlay
- **Skill Radar Chart** — Animated radar visualization drawn on canvas
- **Floating Skill Nodes** — Ambient skill tags floating in the skills section background
- **Glassmorphism UI** — Consistent dark cyber aesthetic with neon blue/purple/cyan accents
- **Fully Responsive** — Mobile-optimized with touch cursor hidden on mobile

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with fonts + metadata
│   └── page.tsx            # Main page — orchestrates boot + all sections
├── components/
│   ├── sections/
│   │   ├── BootSequence.tsx   # Cinematic boot animation
│   │   ├── Hero.tsx           # Landing section with neural bg + typewriter
│   │   ├── About.tsx          # Timeline + stats cards
│   │   ├── Experience.tsx     # Expandable experience cards
│   │   ├── Projects.tsx       # Project cards + full modals
│   │   ├── Skills.tsx         # Skill bars + radar chart + floating nodes
│   │   └── Contact.tsx        # Contact links + CTA
│   ├── three/
│   │   └── NeuralBackground.tsx  # Canvas-based interactive neural network
│   └── ui/
│       ├── CustomCursor.tsx      # Glowing cursor with ring
│       ├── Navigation.tsx        # Fixed nav with command palette trigger
│       ├── CommandPalette.tsx    # ⌘K command palette (cmdk)
│       └── SectionTransition.tsx # SVG dividers between sections
├── styles/
│   └── globals.css           # Custom CSS: glassmorphism, neon, cursor, animations
├── tailwind.config.ts
├── next.config.mjs
├── tsconfig.json
├── vercel.json
└── package.json
```

---

## ⚡ Getting Started Locally

### 1. Clone / Download the project

```bash
cd portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚀 Deploy on Vercel

### Option 1 — Vercel CLI (fastest)

```bash
npm i -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Next.js.

### Option 2 — Vercel Dashboard

1. Push your code to a **GitHub / GitLab / Bitbucket** repo
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your repository
4. Vercel auto-detects Next.js — click **Deploy**

No environment variables needed for the base portfolio.

---

## ✏️ Where to Replace Content

| What | File | What to change |
|------|------|---------------|
| Your name, location, bio | `components/sections/Hero.tsx` | `SHAH UBAIR`, location, tagline |
| About stats & timeline | `components/sections/About.tsx` | `stats`, `timeline` arrays |
| Internship details | `components/sections/Experience.tsx` | `experiences` array |
| Projects | `components/sections/Projects.tsx` | `projects` array |
| Skills & levels | `components/sections/Skills.tsx` | `skillCategories` + `floatingSkills` arrays |
| Contact links | `components/sections/Contact.tsx` | Email, GitHub, LinkedIn hrefs |
| Command palette links | `components/ui/CommandPalette.tsx` | `commands` object |
| Social links in nav | `components/ui/Navigation.tsx` | hrefs |
| Meta title + description | `app/layout.tsx` | `metadata` object |

---

## 🎨 Customizing the Theme

All colors are defined as CSS variables in `styles/globals.css`:

```css
:root {
  --cyber-blue: #00d4ff;    /* primary accent */
  --cyber-cyan: #00fff5;    /* secondary accent */
  --cyber-purple: #7c3aed;  /* purple accent */
  --cyber-violet: #a855f7;  /* violet accent */
  --cyber-green: #00ff9f;   /* online/success indicator */
  --cyber-pink: #ec4899;    /* projects/ai accent */
}
```

And in `tailwind.config.ts` under `theme.extend.colors.cyber`.

---

## 📦 Tech Stack

| Package | Purpose |
|---------|---------|
| `next` 14 | App Router framework |
| `framer-motion` 11 | Section animations, modals, micro-interactions |
| `tailwindcss` | Utility-first styling |
| `cmdk` | Command palette |
| `react-type-animation` | Typewriter role text in hero |
| `lucide-react` | Iconography |
| `three` + `@react-three/fiber` | Available for 3D extensions |
| Canvas 2D API | Neural network background, radar chart |

---

## 🛠️ Performance Notes

- Neural background uses `requestAnimationFrame` and self-cleans on unmount
- `NeuralBackground` is loaded with `dynamic(..., { ssr: false })` to avoid SSR issues
- All section animations use `useInView` with `once: true` — they only trigger once
- Fonts are loaded via Google Fonts with `preconnect` hints
- Build output is ~165 kB first load JS (gzipped ~55 kB)

---

## 📄 License

MIT — free to use and modify for personal portfolios.
