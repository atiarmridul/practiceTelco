# WDIO Appium Boilerplate

This project provides a basic framework for mobile UI automation using WebdriverIO and Appium.

## Prerequisites

Before you begin, ensure you have the following installed:

* [Node.js](https://nodejs.org/)
* [Appium](https://appium.io/)
* [Android SDK](https://developer.android.com/studio) (with a configured emulator or a physical device)

## Setup

1. **Clone the repository:**

```bash
git clone <repository-url>
cd wdio-appium
```

2. **Install dependencies:**

```bash
npm install
```

## Configuration

All test configurations are located in the `wdio.conf.js` file. Before running the tests, make sure to update the `capabilities` section with your device information and the correct path to your `.apk` file.

```javascript
// wdio.conf.js
capabilities: [
    {
      "appium:platformName": "Android",
      "appium:deviceName": "YOUR_DEVICE_NAME",
      "appium:platformVersion": "YOUR_ANDROID_VERSION",
      "appium:automationName": "UiAutomator2",
      "appium:app": path.join(process.cwd(), "./app/android/YOUR_APP.apk"),
      // ... other capabilities
    },
]
```

## Running the Tests

To execute the test suite, run the following command:

```bash
npm run wdio
```

## Project Structure

* `test/specs/`: Contains the test files (e.g., `e2e.spec.js`).
* `test/pageobjects/`: Contains the page object models (e.g., `login.page.js`, `deeplink.page.js`).
* `test/data/`: Contains test data files (e.g., `deeplinks.js`).
* `wdio.conf.js`: The main configuration file for WebdriverIO.
