# Playwright Automated Blog Post Test

This project automates the process of logging into a web application, creating and publishing a blog post with text and an image, and verifying its presence and accuracy. The automation is built with Playwright and designed to support multiple browsers.

---

## Prerequisites

Ensure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** (version 6 or higher)
- **Playwright**

## Installation

**Clone the repository:**
```
git clone <repository-url>
```

**Install dependencies:**
```
npm init playwright@latest
```

## Test Execution

**Run the tests:**
```
npx playwright test
```

**View the Test Report (after tests complete):**
```
npx playwright show-report
```

**Run the test in UI Mode:**
```
npx playwright test --ui
```

## Project Structure

```plaintext
├── pages/                           # Page object classes defining UI interactions
│   ├── loginPage.ts                 # Login page class and methods
│   ├── profileMenu.ts               # Profile menu interactions
│   └── blog/                        # Blog-related pages and interactions
│       ├── addBlogPost.ts           # Page class for creating a new blog post
│       └── blogPage.ts              # General blog page interactions and verification methods
│
├── tests/                           # Test files
│   └── createBlogPost.spec.ts       # Main test case for creating and verifying a blog post
│
├── .env                             # Environment variables file (not included in repository)
├── playwright.config.ts             # Playwright configuration file
└── README.md                        # Documentation file (this file)
```


## Design Patterns

This project follows the **Page Object Model (POM)** design pattern to separate test logic from UI interactions. This improves **readability**, **reusability**, and **maintainability**.

- **Page Classes**: Each page (`LoginPage`, `ProfileMenu`, `BlogPage`, `addBlogPost`) has its own class with dedicated methods for interacting with specific elements and performing actions.
- **Test Script**: The main test script (`blogPostCreation.spec.ts`) coordinates interactions through the page classes, keeping the test steps clear and high-level.


## Error Handling & Flakiness

To reduce test flakiness, Playwright’s built-in wait conditions are used:

- **Assertions**: Confirm element visibility before interactions.
- **Timeouts and Retries**: Handle asynchronous elements with retry logic as needed for stability.


## Extensions and Improvements

Consider implementing the following improvements for additional robustness and usability:

1. **Data-Driven Testing**: Use a configuration file or CSV for input data to facilitate testing multiple blog posts with varied content.
2. **Advanced Error Handling**: Capture screenshots upon test failures for faster debugging.
3. **Integration with CI/CD**: Set up the tests to run on a Continuous Integration (CI) system for automated testing in production.
