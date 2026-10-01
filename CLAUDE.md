## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

# Portfolio Development Guidelines

## Stack

- Astro is the primary framework.
- Use `.astro` components by default.
- Use TypeScript.
- Use Tailwind CSS.
- Use React only when genuinely necessary.

## Design

- Figma is the visual source of truth.
- Follow existing design tokens.
- Preserve the black-and-white visual language.

## Icons

- Use Devicon for programming languages, frameworks, databases,
  and development-tool logos.
- Prefer monochrome/plain variants where available.
- Use Lucide for interface icons such as arrows, external links,
  navigation, email, and menus.
- Do not use emoji as interface icons.
- Keep icon size and visual weight consistent.
- Do not add another icon library unless necessary.

## Architecture

- Prefer Astro components.
- Keep client-side JavaScript minimal.
- Reuse existing components.
- Avoid unnecessary abstractions.s