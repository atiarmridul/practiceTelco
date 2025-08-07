
import { deeplinks } from '../data/deeplinks.js';

class DeeplinkPage {
    async navigateToEasyplanGiftPage() {
        await driver.execute('mobile: deepLink', {
            url: deeplinks.EasyPlanGift,
            package: 'net.omobio.robisc'
        });
        await driver.pause("3000");

        

    }
}

export default new DeeplinkPage();
