# WDIO Appium Boilerplate

## Project Description

This project provides a basic framework for mobile UI automation using WebdriverIO and Appium.

## Project Structure

```
/Users/atiarrahmanchowdhury/wdio-appium/
├───.gitignore
├───package-lock.json
├───package.json
├───README.md
├───wdio.conf.js
├───.git/...
├───app/
│   └───android/...
├───node_modules/...
└───test/
    ├───data/
    │   └───deeplinks.js
    ├───pageobjects/
    │   ├───deeplink.page.js
    │   └───login.page.js
    └───specs/
        └───e2e.spec.js
```

## Features List

*   End-to-end testing for mobile applications.
*   Page Object Model design pattern.
*   Allure reporting for test results.

## Tech Stack

*   [WebdriverIO](https://webdriver.io/)
*   [Appium](https://appium.io/)
*   [Node.js](https://nodejs.org/)
*   [Mocha](https://mochajs.org/)
*   [Allure Reporter](https://www.npmjs.com/package/@wdio/allure-reporter)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

*   [Node.js](https://nodejs.org/)
*   [Appium](https://appium.io/)
*   [Android SDK](https://developer.android.com/studio) (with a configured emulator or a physical device)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd wdio-appium
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

## Running Tests

To execute the test suite, run the following command:

```bash
npm run wdio
```

## Show Report

To generate and view the Allure test report, run the following commands:

```bash
allure generate allure-results --clean
allure open
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

## Troubleshooting

*   **Appium server not starting:** Ensure that Appium is installed correctly and that the server is running before executing the tests.
*   **Emulator/Device not found:** Check that your Android emulator is running or that your physical device is connected and recognized by ADB.

## Appendix

*   [WebdriverIO Documentation](https://webdriver.io/docs/gettingstarted)
*   [Appium Documentation](http://appium.io/docs/en/about-appium/intro/)

## Dependencies

*   allure: ^0.0.0
*   allure-commandline: ^2.30.0
*   appium-uiautomator2-driver: ^3.7.9

## Dev Dependencies

*   @wdio/allure-reporter: ^9.17.0
*   @wdio/appium-service: ^9.17.0
*   @wdio/cli: ^9.17.1
*   @wdio/local-runner: ^9.17.0
*   @wdio/mocha-framework: ^9.17.0
*   @wdio/spec-reporter: ^9.17.0
*   appium: ^2.0.1
*   appium-uiautomator2-driver: ^4.2.5

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgements

*   Thanks to the WebdriverIO and Appium teams for their amazing tools.

## Contact

*   Author: [Your Name]
*   Email: [Your Email]
*   GitHub: [Your GitHub Profile]

## References

*   [WebdriverIO API Docs](https://webdriver.io/docs/api)
*   [Appium Desired Capabilities](http://appium.io/docs/en/writing-running-appium/caps/)