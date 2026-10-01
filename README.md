# Charles Justine Mantes — Portfolio

An Astro and TypeScript portfolio using Tailwind CSS, Lucide interface icons,
and Devicon technology logos.

## Project structure

```text
src/
├── components/
│   ├── interactive/
│   │   ├── ContactForm.astro        # Labeled inquiry form
│   │   ├── EmailContact.astro       # Email link and copy feedback
│   │   └── PageMenu.astro           # Header menu and its open/close behavior
│   ├── layout/
│   │   ├── Navbar.astro            # Brand and header actions
│   │   ├── PortfolioCredit.astro   # Site credit below Contact
│   │   ├── ProfileSidebar.astro    # Profile, section navigation, social links
│   │   └── SectionNavigation.astro # Navigation from shared section data
│   └── ui/
│       ├── GitHubContributions.astro # Build-time contribution calendar
│       └── TechnologyTags.astro    # Shared technology badges
├── data/
│   └── portfolio.ts               # Profile, email, navigation, tech stack, education, projects
├── layout/
│   └── PortfolioLayout.astro      # Document metadata and two-column page shell
├── lib/
│   ├── devicons.ts                # Technology-to-icon mapping
│   ├── github-contributions.ts    # Server-side GitHub GraphQL query
│   └── portfolio-navigation.ts    # Scroll tracking and header visibility
├── pages/
│   └── index.astro                # Composes the layout and six sections
├── sections/
│   ├── About.astro
│   ├── TechStack.astro
│   ├── Education.astro
│   ├── Projects.astro
│   └── Contact.astro              # Contact introduction and component composition
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
- Edit the standalone Tech stack section in `src/sections/TechStack.astro` and
  its categories in `src/data/portfolio.ts`.
- Edit individual sections or components without expanding `src/pages/index.astro`.
- Keep shared visual tokens and responsive styles in `src/styles/global.css`.
- Keep menu and contact interactions beside their markup. The layout loads the
  shared scrolling behavior from `src/lib/portfolio-navigation.ts`.

Components render as Astro HTML; these interactions use small browser scripts
without React hydration. On desktop, only the right half scrolls. On mobile,
the page uses normal document scrolling.

## GitHub contributions

Set `GITHUB_USERNAME` and `GITHUB_TOKEN` as environment variables locally and in
the deployment environment. The token is used only while Astro builds the
Contributions section; it is not sent to the browser. The calendar updates on each
new build. If GitHub is unavailable, the portfolio still builds and shows an
unavailable message in place of the graph.

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
