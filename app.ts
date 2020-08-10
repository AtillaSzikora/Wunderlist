import { browser } from 'protractor';

describe('Wunderlist', () => {
    const baseUrl = 'https://www.wunderlist.com/';

    it('Open website', async () => {
        await browser.navigate().to(baseUrl);
    });
});
