---
name: debugging
description: Systematically diagnose software bugs before changing code. Use for bug investigation, root-cause analysis, and narrowly scoped fixes; do not invoke for feature work or unrelated refactoring.
---

# Debugging

Establish the cause of a reported bug before proposing or implementing a fix. Separate investigation from implementation and distinguish observable symptoms from the underlying defect.

## Investigation

- Reproduce the problem when practical. Otherwise, establish the reported inputs, environment, expected behavior, actual behavior, and reliable evidence available.
- Inspect the relevant execution path from entry point to failure. Trace important data, state, and control flow across the involved components or modules.
- Compare working and failing paths when that can isolate the fault. Use logs, tests, debuggers, or focused instrumentation when appropriate.
- Test hypotheses against evidence. Avoid speculative fixes and do not present an unverified possibility as the root cause.
- Identify the earliest incorrect state or behavior and explain how it produces the visible symptom. Name the responsible file, component, or boundary and why it is responsible.
- Do not modify code during an investigation-only request unless the user explicitly asks for implementation. Prefer reversible, non-mutating diagnostic checks.
- If the cause cannot be established, report what was verified, what remains uncertain, and the next discriminating check instead of guessing.

## Fixing

After identifying the cause, propose the smallest appropriate fix and explain why it addresses the cause rather than only masking the symptom.

When implementation is requested:

- Modify only code relevant to the diagnosed cause. Avoid opportunistic refactors or unrelated cleanup.
- Add or update a focused regression test when the project supports it and the test meaningfully guards the failure.
- Run checks proportional to the change, starting with the narrowest relevant test and expanding when risk warrants it.
- Reproduce the original scenario after the change when practical.

## Report

State the root cause, the evidence connecting it to the symptom, the responsible file or component, what changed, and the checks performed. Clearly disclose any remaining uncertainty or unverified behavior.
