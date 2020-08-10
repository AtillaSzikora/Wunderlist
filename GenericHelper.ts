import { ElementFinder, browser, ExpectedConditions as EC } from 'protractor';

export const
    baseUrl = 'https://www.wunderlist.com/',
    signInErrMsg = 'The email or password you entered was incorrect. Please try again.';

/**
 * Clicks on a link and expect a given url to be loaded.
 * Navigates to the home page if necessary.
 * @param link to click on
 * @param url expected to load
 */
export async function ClickLinkAndCheckUrl(link: ElementFinder, url: string) {
    const errMsg = new Error(`Clicking on link: '${link.locator().value}' didn't lead to the expected url: '${url}'`);

    if (await browser.getCurrentUrl() != baseUrl) await browser.navigate().to(baseUrl);

    ClickField(link);
    expect((await browser.getCurrentUrl()).endsWith(url)).toBe(true, errMsg);
};

/**
 * Clicks on a field. Waits 10 s for it to load.
 * Throws custom error if it times out.
 * @param field locator to click on.
 */
export async function ClickField(field: ElementFinder) {
    const errMsg = `Field didn't load in 10 seconds to click on: '${field.locator().value}'!`;

    await browser.wait(EC.presenceOf(field), 10000, errMsg);
    await field.click();
};
