// spec: tests/validation/test-plan.md § AC-001-b
import { test, expect } from "@playwright/test";

test("AC-001-b: greeting is identical for every visitor, with no personalization or input fields", async ({ browser }) => {
  // 1-2. Two independent visitors: separate browser contexts share no cookies/storage.
  const contextA = await browser.newContext();
  const contextB = await browser.newContext();
  const pageA = await contextA.newPage();
  const pageB = await contextB.newPage();

  await pageA.goto("/");
  await pageB.goto("/");

  // 3. Compare the greeting text between the two independent visitors.
  const headingA = pageA.getByRole("heading", { name: "Hello, World!" });
  const headingB = pageB.getByRole("heading", { name: "Hello, World!" });
  await expect(headingA).toHaveText("Hello, World!");
  await expect(headingB).toHaveText("Hello, World!");
  expect(await headingA.textContent()).toBe(await headingB.textContent());

  // 4. Assert no input fields (no personalization mechanism) are present on either page.
  // CSS locator: the criterion asserts the ABSENCE of any input-like element, and
  // there is no accessible role that names "every input, textarea, and select".
  await expect(pageA.locator("input, textarea, select")).toHaveCount(0);
  await expect(pageB.locator("input, textarea, select")).toHaveCount(0);

  await contextA.close();
  await contextB.close();
});
