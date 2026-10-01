---
name: accessibility
description: Review and improve frontend accessibility while preserving the existing visual design. Use for accessibility audits, remediation, or accessibility-focused frontend code review; do not invoke for ordinary visual redesign work.
---

# Accessibility

Review the relevant user flows and implement or recommend the smallest changes that make them accessible. Preserve the existing visual design unless an accessibility requirement makes a visual change necessary.

## Review and remediation

- Prefer semantic HTML and native controls. Use ARIA only when native semantics cannot express the required role, name, state, or relationship; do not duplicate or conflict with native semantics.
- Keep all interactive elements operable by keyboard, with a logical focus order and no keyboard traps. Do not add custom keyboard behavior to native controls unless the interaction requires it.
- Maintain a logical heading hierarchy that reflects the page structure rather than choosing heading levels for appearance.
- Use buttons for actions and links for navigation. Do not simulate either with non-interactive elements.
- Give informative images concise, context-appropriate alternative text. Use empty alt text for decorative images, and do not repeat nearby text unnecessarily.
- Associate every form control with a visible label when practical. Ensure instructions, errors, and required state are programmatically associated with the control.
- Preserve a clearly visible focus indicator across backgrounds and interaction states. Do not remove outlines without an equivalent replacement.
- Give icon-only controls an accessible name that communicates their action. Hide purely decorative icons from assistive technology.
- Check text, interactive controls, focus indicators, and meaningful graphics for sufficient contrast. Follow the project's stated standard; otherwise target WCAG AA.
- Respect `prefers-reduced-motion`. Remove or substantially reduce non-essential motion while preserving required feedback and functionality.

## Astro

Prefer semantic, server-rendered Astro markup when interactivity does not require a client-side component. Add client-side hydration only for behavior that needs it, and keep the rendered HTML usable before hydration where practical.

## Verification

Inspect both source and rendered behavior when possible. Test representative flows with keyboard-only navigation, verify accessible names and relationships in the accessibility tree or equivalent tooling, check contrast, and test reduced-motion behavior. Report remaining issues and any accessibility-driven visual changes clearly.
