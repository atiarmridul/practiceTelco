import LoginPage from '../pageobjects/login.page.js';
import DeeplinkPage from '../pageobjects/deeplink.page.js';

describe('End-to-End Test Suite', () => {
  it('should login successfully', async () => {
    await LoginPage.login('01897689140', '123456');
    await driver.pause("3000");

    // Add a login assertion here
  });


  it('should navigate to the easyplan gift page via deeplink', async () => {
    await DeeplinkPage.navigateToEasyplanGiftPage();
    await driver.pause("3000");

    // Add your assertions here
  });
});
