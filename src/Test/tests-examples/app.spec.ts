import { expect, test, type Page } from "@playwright/test";

// eslint-disable-next-line import/no-extraneous-dependencies
import { Browser, chromium } from "playwright";

let browser: Browser;
let page: Page;

before(async () => {
  browser = await chromium.launch();
  page = await browser.newPage();
});

after(async () => {
  await browser.close();
});

describe("React App E2E Test", () => {
  test("should load the app, check the title, and interact with the button", async () => {
    await page.goto("http://localhost:3000"); // Adjust the URL as needed

    // Check if the app title is visible and contains the expected text
    await expect(page.locator("[data-testid=app-title]")).toBeVisible();
    const titleText = await page.textContent("[data-testid=app-title]");
    expect(titleText).toContain("Vite + React");

    // Check if the button is visible
    await expect(page.locator("button[type=button]")).toBeVisible();
    const buttonText = await page.textContent("button[type=button]");
    expect(buttonText).toContain("count is 0");

    // Interact with the button and check if the count is updated
    await page.click("button[type=button]");
    const updatedButtonText = await page.textContent("button[type=button]");
    expect(updatedButtonText).toContain("count is 1");
  });
});
