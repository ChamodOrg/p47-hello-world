# Validation test plan — REQ-001

## AC-001-a — The page displays the exact text "Hello, World!" without requiring sign-in

- Target: hello-webapp (primary)
- Steps:
  1. Navigate to `/` with no prior authentication/session.
  2. Locate the greeting heading.
- Assert: the heading text is exactly "Hello, World!" and is visible without any sign-in redirect or prompt.
- Source of truth: `hello-webapp/src/pages/Greeting.tsx` (unambiguous — a static `<Heading level={1}>Hello, World!</Heading>` with no auth guard in `hello-webapp/src/App.tsx`) — confirmed live via playwright-cli.

## AC-001-b — The greeting is identical for every visitor, with no personalization or input fields

- Target: hello-webapp (primary)
- Steps:
  1. Navigate to `/` as one visitor (default browser context).
  2. Navigate to `/` again as a second, independent browser context (no shared storage/cookies).
  3. Compare the greeting text between the two.
  4. Assert no input fields (textbox, search, etc.) are present on the page.
- Assert: both contexts see the identical "Hello, World!" text, and the page contains zero input elements.
- Source of truth: `hello-webapp/src/pages/Greeting.tsx` (unambiguous — static markup, no form/input elements, no props driving the text) — confirmed live via playwright-cli.
