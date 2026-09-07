// spec: tests/validation/test-plan.md § AC-001-a
import { test, expect } from "@playwright/test";

test("AC-001-a: page displays exact text 'Hello, World!' without sign-in", async ({ page }) => {
  // 1. Navigate to / with no prior authentication/session (fresh context per test)
  //    and no login step — reaching the greeting directly is the "without sign-in" proof.
  await page.goto("/");
  // 2. Locate the greeting heading and assert its exact text is visible.
  await expect(page.getByRole("heading", { name: "Hello, World!" })).toHaveText("Hello, World!");
});
