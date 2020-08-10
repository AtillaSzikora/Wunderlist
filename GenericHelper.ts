import { ElementFinder, browser, ExpectedConditions as EC} from 'protractor';

export const
    baseUrl = 'https://www.wunderlist.com/';

export async function ClickLinkAndCheckUrl(link: ElementFinder, url: string) {
    const errMsg = new Error(`Clicking on link: '${link.locator().value}' didn't lead to the expected url: '${url}'`);

    if (await browser.getCurrentUrl() != baseUrl) await browser.navigate().to(baseUrl);

    await browser.wait(EC.presenceOf(link), 10000);
    await link.click();
    expect((await browser.getCurrentUrl()).endsWith(url)).toBe(true, errMsg);
};