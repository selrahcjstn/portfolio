---
name: caveman
description: Prevent overengineering by favoring the simplest correct implementation that fits the existing codebase. Use when building or changing software where unnecessary abstraction, dependencies, or architectural expansion are risks; do not use to override explicit architecture requirements.
---

# Caveman

Choose the simplest correct solution that satisfies the request and fits the project's existing patterns. Preserve the current architecture unless the user explicitly asks for a redesign.

## Decision rules

- Reuse established project structure, conventions, components, and utilities before adding new patterns.
- Solve the concrete problem at hand. Do not generalize for hypothetical future requirements.
- Do not introduce interfaces, services, helpers, wrappers, factories, layers, or generic utilities unless they resolve a demonstrated architectural problem or remove meaningful repetition.
- Avoid new dependencies when the platform, framework, or existing dependencies already provide an adequate solution.
- Avoid premature optimization. Optimize only for an observed bottleneck, an explicit requirement, or a clearly material constraint.
- Keep components focused, but do not split a component merely to make it shorter. Extract only when the boundary improves reuse, comprehension, testing, or ownership in a concrete way.
- Prefer direct, readable control and data flow over indirection.
- Before adding complexity, state the concrete limitation of the simpler approach and the benefit that justifies the additional mechanism.

## Astro

- Prefer `.astro` components and server-rendered markup for static or server-driven behavior.
- Use React or other hydrated framework components only when client-side state or sufficiently complex interactivity requires them.
- Apply the narrowest appropriate hydration directive and keep non-interactive surrounding markup in Astro when practical.

## Scope and verification

Make the smallest relevant change. Do not redesign existing architecture or perform unrelated refactoring unless explicitly requested. Run checks proportional to the change and report any complexity that was necessary and why.
