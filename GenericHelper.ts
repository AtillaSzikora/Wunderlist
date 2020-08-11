import { ElementFinder, browser, ExpectedConditions as EC, element, by } from 'protractor';

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
    signInErrorMsg = `Expected alert didn't show up in time: '${signInErrorAlert}'`,

    // Comparison table values
    comparisonTableRowSelector = '#comparisonTable div.row',
    comparisonTableData = {
        // Overview
        myDay: ['My Day', false, true],
        suggestions: ['Suggestions', false, true],
        crossPlatform: ['Cross-platform syncing', true, true],
        // Tasks
        addSubTask: ['Add subtasks', true, true],
        setReminder: ['Set reminders and due dates', true, true],
        createRecurring: ['Create recurring tasks', true, true],
        prioritizeTaks: ['Prioritize tasks', true, true],
        attachFiles: ['Attach files', true, true],
        addNotes: ['Add notes', true, true],
        assignTasks: ['Assign tasks', false, false], // << fails intentionally
        // Lists
        shareLists: ['Share lists', true, true],
        groupLists: ['Group lists', true, true],
        //Design
        colorCoded: ['Color-coded lists', false, true],
        listThemes: ['List themes', false, true],
        darkMode: ['Dark mode', false, true]
    };

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
 * Clicks on a field. Waits 10 seconds for it to load.
 * Throws custom error if it times out.
 * @param field locator to click on.
 */
export async function ClickField(field: ElementFinder) {
    const errMsg = `Could not click on field in 10 seconds: '${field.locator().value}'!`;

    await browser.wait(EC.presenceOf(field), 10000, errMsg);
    await field.click();
};

/**
 * Check if Wunderlist and Microsoft To Do features are marked correctly by ckeckbox icon
 */
export async function CompareTableValues() {
    for (let prop in comparisonTableData) {
        const
            row = await element(by.cssContainingText(comparisonTableRowSelector, comparisonTableData[prop][0])),
            isCheckedAt1stCol = await row.$('div.cell.icon:nth-child(2) > svg > path[fill-rule="nonzero"]').isPresent(),
            isCheckedAt2ndCol = await row.$('div.cell.icon:nth-child(3) > svg > path[fill-rule="nonzero"]').isPresent(),
            errMsg = new Error(`At row: '${comparisonTableData[prop][0]}'`);

        expect(isCheckedAt1stCol).toBe(comparisonTableData[prop][1], errMsg);
        expect(isCheckedAt2ndCol).toBe(comparisonTableData[prop][2], errMsg);
    }
};
