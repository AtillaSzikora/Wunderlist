import { ElementFinder, browser, ExpectedConditions as EC } from 'protractor';

export const
    // URLs
    urlBase = 'https://www.wunderlist.com/',
    urlHome = '/home',
    urlSupport = 'todosupport.helpshift.com/a/microsoft-to-do/?p=web',
    urlBlog = '/blog/',
    urlSwitch = 'switch',
    urlSignIn = 'login?redirect_url=/home',
    urlImprint = '/imprint/',
    urlPrivacyPolicy = '/privacy-policy/',
    urlTermsOfUse = '/terms-of-use/',
    urlContact = '/contact/',

    // Misc texts
    email = 'nincs@ilyen.cim',
    password = 'randomPass',
    signInErrorAlert = 'The email or password you entered was incorrect. Please try again.',
    signInErrorMsg = `Expected alert didn't show up in time: '${signInErrorAlert}'`;

/**
 * Clicks on a link and expect a given url to be loaded.
 * Navigates to the home page first if necessary.
 * @param link to click on
 * @param url expected to load
 */
export async function ClickLinkAndCheckUrl(link: ElementFinder, url: string) {
    const errMsg = new Error(`Clicking on link: '${link.locator().value}' didn't lead to the expected url: '${url}'`);

    if (await browser.getCurrentUrl() != urlBase) await browser.navigate().to(urlBase);

    await ClickField(link);
    expect((await browser.getCurrentUrl()).endsWith(url)).toBe(true, errMsg);
};

/**
 * Clicks on a field. Waits 10 s for it to load.
 * Throws custom error if it times out.
 * @param field locator to click on.
 */
export async function ClickField(field: ElementFinder) {
    const errMsg = `Could not click on field in 10 seconds: '${field.locator().value}'!`;

    await browser.wait(EC.presenceOf(field), 10000, errMsg);
    await field.click();
};
