import fs from "fs";
import path from "path";
export const config = {
  runner: "local",
  port: 4723,

  specs: ["./test/specs/**/*.js"],

  exclude: [],

  maxInstances: 10,

  capabilities: [
    {
      "appium:platformName": "Android",
      //Personal Samsung device
      "appium:deviceName": "R58R777L6JL",
      "appium:platformVersion": "14.0",
      //OPPO from office
      // "appium:deviceName": "IFIVQOTS95GYMRW4",
      // "appium:platformVersion": "12.0",
      "appium:automationName": "UiAutomator2",
      // "appium:appPackage": "com.chaldal.poached",
      // "appium:appActivity": "com.chaldal.poached.MainActivity",
      "appium:app": path.join(process.cwd(), "./app/android/My_Airtel.apk"),
      "appium:autoGrantPermissions": true,
      "appium:enforceXPath1": true,
      "appium:noReset": true,
      "appium:disableSuppressAccessibilityServiceErrors": true, //due to facing problem in Android 11+
      "appium:ignoreHiddenApiPolicyError": true, //due to facing problem in Android 11+
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
