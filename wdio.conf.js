import fs from "fs";
import path from "path";
export const config = {
  runner: "local",
  port: 4723,

  specs: ["./test/specs/e2e.spec.js"],

  exclude: [],

  maxInstances: 10,

  capabilities: [
    {
      "appium:platformName": "Android",
      "appium:deviceName": "IFIVQOTS95GYMRW4", //R58R777L6JL
      "appium:platformVersion": "12.0", //14.0
      "appium:automationName": "UiAutomator2",
      "appium:app": path.join(process.cwd(), "./app/android/My_Robi.apk"),
      "appium:autoGrantPermissions": true,
      "appium:enforceXPath1": true,
      "appium:noReset": false,
      "appium:fullReset": true,
      "appium:disableSuppressAccessibilityServiceErrors": true,
      "appium:ignoreHiddenApiPolicyError": true,
      "appium:adbExecTimeout": 20000,
      "appium:appWaitActivity": "*",
    },
  ],

  logLevel: "info",

  bail: 0,

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  services: [["appium"]],

  framework: "mocha",

  // afterTest: async function (
  //   test,
  //   context,
  //   { error, result, duration, passed, retries }
  // ) {
  //   if (error) {
  //     // Take screenshot
  //     const screenshot = await browser.takeScreenshot();
  //     // Attach screenshot to Allure report
  //     allure.addAttachment(
  //       "Screenshot on Failure",
  //       Buffer.from(screenshot, "base64"),
  //       "image/png"
  //     );
  //   }
  // },

  reporters: ["spec"],

  // Options to be passed to Mocha.
  // See the full list at http://mochajs.org/
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
