# interact-test-task
Prerequisites
Ensure you have the following installed:

Node.js (version 14 or higher)
npm (version 6 or higher)
Playwright
Installation
Clone the repository:

bash
Copy code
git clone <repository-url>
Install dependencies:

bash
Copy code
npm install
Install Playwright browsers:

bash
Copy code
npx playwright install
Environment Setup
Setting up Environment Variables
To manage sensitive information securely, credentials and URLs should be stored in a .env file at the project root (not included in the repository for security reasons). Create this file as follows:

plaintext
Copy code
USERNAME=<your-username>
PASSWORD=<your-password>
BASE_URL=<application-url>
Environment Configuration
Playwright configures browsers and test parameters via the playwright.config.ts file. Ensure that configurations for browser type, base URL, and timeouts are set appropriately.

Test Execution
Run the tests:

bash
Copy code
npx playwright test
Run tests in a specific browser (e.g., Chrome):

bash
Copy code
npx playwright test --project=chromium
View the Test Report (after tests complete):

bash
Copy code
npx playwright show-report