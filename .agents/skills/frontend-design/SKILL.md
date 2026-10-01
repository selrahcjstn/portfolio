---
name: frontend-design
description: Implement or refine this portfolio's frontend with production-quality fidelity to provided Figma designs and the existing Astro, TypeScript, Tailwind, component, and design-token conventions. Use for portfolio pages, sections, and UI components; do not use to redesign approved sections unless explicitly requested.
---

# Frontend Design

Build polished frontend interfaces for this portfolio that feel intentionally designed rather than generically generated. Preserve the established visual language and architecture while matching the requested design closely.

## Design fidelity

- Treat Figma as the visual source of truth whenever Figma context is provided. Inspect the relevant frame before writing implementation code.
- Match the frame's layout, spacing, typography, sizing, borders, and responsive behavior. Do not optimize only for the desktop screenshot; infer and preserve the intended behavior across supported viewport sizes.
- Preserve and reuse the project's existing design tokens, components, and conventions. Do not redesign approved sections unless the user explicitly asks for a redesign.
- Avoid generic AI UI habits such as gratuitous gradients, card grids, rounded containers, shadows, or decorative effects unless they are present in the design or clearly established by the project.

## Implementation

- Use Astro components by default and TypeScript for typed code.
- Use Tailwind CSS according to the project's existing conventions rather than introducing a parallel styling system.
- Use React only when client-side state, complex interactivity, or a React-specific library genuinely requires it. Keep browser JavaScript and hydration to the minimum needed for the behavior.
- Prefer semantic HTML and maintain accessible structure, interaction, focus behavior, labels, contrast, and reduced-motion support.
- Reuse existing components before creating new ones. Keep components focused, but do not fragment them into abstractions that do not improve reuse, comprehension, testing, or ownership.
- Avoid new dependencies when Astro, the browser platform, Tailwind, or existing project dependencies can solve the requirement cleanly.

## Verification

Compare the rendered result with the relevant Figma frame at representative desktop and mobile widths. Verify responsive layout, typography, spacing, interactive states, keyboard behavior, and that the implementation uses the project's existing tokens and components where appropriate.
