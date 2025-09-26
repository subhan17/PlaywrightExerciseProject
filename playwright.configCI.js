import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',          // adjust if your tests live elsewhere
  timeout: 30_000,
    expect: {
    timeout: 5000
  },
  retries: 1,                  // optional: retry failing tests once
  reporter: [
    ['line'],                  // simple console reporter
    ['blob'],                  // required for sharding + artifact merge (optional but nice)
    ['allure-playwright'],     // produces allure-results/ per shard
  ],
  use: {
    browserName:'Chrome',
    trace: 'on-first-retry',   // Playwright traces for debugging (Allure can show them)
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});
