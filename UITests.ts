import { browser, ExpectedConditions as EC, $ } from 'protractor';
import * as PO from './PageObjects'
import * as GH from './GenericHelper';

describe('Wunderlist UI tests', () => {
    beforeAll(async () => {
        await browser.navigate().to(GH.urlBase);
        await browser.waitForAngularEnabled(false);
    });

    beforeEach(async () => {
        if (await browser.getCurrentUrl() != GH.urlBase) await browser.navigate().to(GH.urlBase);
    });

    it('Check if all menu bar links lead to the right sub page.', async () => {
        await GH.ClickLinkAndCheckUrl(PO.menuWunderlist, GH.urlHome);
        await GH.ClickLinkAndCheckUrl(PO.menuSupport, GH.urlSupport);
        await GH.ClickLinkAndCheckUrl(PO.menuBlog, GH.urlBlog);
        await GH.ClickLinkAndCheckUrl(PO.menuSwitch, GH.urlSwitch);
        await GH.ClickLinkAndCheckUrl(PO.menuMicrosoftToDo, GH.urlHome);
        await GH.ClickLinkAndCheckUrl(PO.menuSignIn, GH.urlSignIn);
        await GH.ClickLinkAndCheckUrl(PO.menuSwitchToDo, GH.urlSwitch);
    });

    it('Check if Sign In shows the correct error when user/pass is wrong.', async () => {
        await browser.wait(EC.presenceOf(PO.menuSignIn), 10000);
        await PO.menuSignIn.click();
        await browser.wait(EC.presenceOf(PO.inputEmail), 10000);
        await PO.inputEmail.sendKeys(GH.email);
        await PO.inputPassword.sendKeys(GH.password);
        await PO.buttonSignIn.click();
        await browser.wait(EC.visibilityOf(PO.divSignInError), 10000, GH.signInErrorMsg);
        expect(await PO.divSignInError.getText()).toEqual(GH.signInErrorAlert);
    });

    it('Check if all footer links lead to the right sub page.', async () => {
        await GH.ClickLinkAndCheckUrl(PO.footerImprint, GH.urlImprint);
        await GH.ClickLinkAndCheckUrl(PO.footerPrivacyPolicy, GH.urlPrivacyPolicy);
        await GH.ClickLinkAndCheckUrl(PO.footerTermsOfUse, GH.urlTermsOfUse);
        await GH.ClickLinkAndCheckUrl(PO.footerContact, GH.urlContact);
        await GH.ClickLinkAndCheckUrl(PO.footerBlog, GH.urlBlog);
        await GH.ClickLinkAndCheckUrl(PO.footerSupport, GH.urlSupport);
    });

    it('Comparison of Wunderlist and Microsoft To Do features', async () => {
        await GH.CompareTableValues();
    });

    it('Check if the Blog contains important titles.');
    it('Switch STEP 2  - Learn More - fails');

    xit('Filter down support topics', async () => {
        const searchText = 'privacy';

        await browser.wait(EC.presenceOf(PO.menuSupport), 10000);
        await PO.menuSupport.click();
        await PO.inputSearch.sendKeys(searchText);
        await browser.wait(EC.presenceOf(PO.searchResults.get(0)), 10000);
        await PO.searchResults.each(async result => expect(await result.getText()).toContain(searchText));
    });
});
