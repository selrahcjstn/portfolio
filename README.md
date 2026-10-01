# Charles Justine Mantes — Portfolio

An Astro and TypeScript portfolio using Tailwind CSS, Lucide interface icons,
and Devicon technology logos.

## Project structure

```text
src/
├── components/
│   ├── interactive/
│   │   └── PageMenu.astro           # Header menu and its open/close behavior
│   ├── layout/
│   │   ├── Navbar.astro            # Brand and header actions
│   │   ├── ProfileSidebar.astro    # Profile, section navigation, social links
│   │   └── SectionNavigation.astro # Navigation from shared section data
│   └── ui/
│       └── TechnologyTags.astro    # Shared technology badges
├── data/
│   └── portfolio.ts               # Profile, email, navigation, education, projects
├── layout/
│   └── PortfolioLayout.astro      # Document metadata and two-column page shell
├── lib/
│   ├── devicons.ts                # Technology-to-icon mapping
│   └── portfolio-navigation.ts    # Scroll tracking and header visibility
├── pages/
│   └── index.astro                # Composes the layout and four sections
├── sections/
│   ├── About.astro
│   ├── Education.astro
│   ├── Projects.astro
│   └── Contact.astro              # Contact markup, form and copy-email behavior
├── styles/
│   └── global.css                 # Shared tokens, styles, responsive rules, animations
└── types/
    └── portfolio.ts               # Shared content types
public/
└── figma/                         # Original design assets
```

## Making changes

- Edit portfolio entries and navigation in `src/data/portfolio.ts`.
- Edit About prose in `src/sections/About.astro` to preserve its inline emphasis.
- Edit individual sections or components without expanding `src/pages/index.astro`.
- Keep shared visual tokens and responsive styles in `src/styles/global.css`.
- Keep menu and contact interactions beside their markup. The layout loads the
  shared scrolling behavior from `src/lib/portfolio-navigation.ts`.

Components render as Astro HTML; these interactions use small browser scripts
without React hydration. On desktop, only the right half scrolls. On mobile,
the page uses normal document scrolling.

## Development

```sh
npm install
npm run astro -- dev --background
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
npm run build
npm run preview
```

See [AGENTS.md](./AGENTS.md) for repository conventions and
[Astro's component documentation](https://docs.astro.build/en/basics/astro-components/)
for props, slots, and composition.
