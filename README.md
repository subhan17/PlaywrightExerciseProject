Playwright Practice Project
A hands-on UI & API test automation practice project built using Microsoft Playwright. This project is designed to explore and practice modern end-to-end (E2E) automation techniques including multi-browser testing, assertions, locators, and reporting.

✨ Features
•	✅ Cross-browser testing (Chromium, Firefox, WebKit)
•	✅ Page Object Model (POM) structure
•	✅ Rich test assertions with Playwright Test Runner
•	✅ Auto-waiting & retry mechanism for stable tests
•	✅ Parallel execution
•	✅ HTML reporting
•	✅ Example scenarios: login, forms, alerts, popups, dynamic elements

🛠️ Tech Stack
Language: TypeScript / JavaScript
Framework: Playwright Test Runner
Reporting: Built-in HTML reporter
IDE: VS Code (recommended)

🚀 Getting Started
Clone the repository
git clone https://github.com/subhan17/PlaywrightExerciseProject.git
cd playwright-practice
Install dependencies
npm install
Install browsers
npx playwright install
Run tests
npx playwright test

📊 Reporting
Generate and open HTML report:
npx playwright show-report

📂 Project Structure
playwright-practice/
│── tests/              # Test files (specs)
│── pages/              # Page Object Model classes
│── fixtures/           # Test data / setup
│── playwright.config.ts # Playwright configuration
│── package.json
│── README.md

🧪 Example Test
import { test, expect } from '@playwright/test';

test('Login form validation', async ({ page }) => {
  await page.goto('https://example.com/login');
  await page.fill('#username', 'testuser');
  await page.fill('#password', 'password123');
  await page.click('button[type="submit"]');
  await expect(page.locator('.welcome')).toHaveText('Welcome testuser');
});

🎯 Learning Goals
•	• Understand Playwright fundamentals
•	• Practice handling locators, assertions, and waits
•	• Explore multiple browsers and devices
•	• Implement Page Object Model (POM) for clean tests
•	• Gain confidence in UI & API test automation with Playwright

🙌 Contributing
This is a practice project — contributions, suggestions, and improvements are always welcome!

📖 References
•	Playwright Official Docs - https://playwright.dev/docs/intro
•	Playwright GitHub Repo - https://github.com/microsoft/playwright
