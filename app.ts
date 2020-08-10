import { browser, ExpectedConditions as EC } from 'protractor';
import * as PO from './PageObjects'
import * as GH from './GenericHelper';

describe('Wunderlist', () => {
    beforeAll(async () => {
        await browser.navigate().to(GH.baseUrl);
        await browser.waitForAngularEnabled(false);
    });

    it('Check menu links', async () => {
        const
            urlHome = '/home',
            urlSupport = 'todosupport.helpshift.com/a/microsoft-to-do/?p=web',
            urlBlog = '/blog/',
            urlSwitch = 'switch',
            urlSignIn = 'login?redirect_url=/home';

        await GH.ClickLinkAndCheckUrl(PO.linkWunderlist, urlHome);
        await GH.ClickLinkAndCheckUrl(PO.linkSupport, urlSupport);
        await GH.ClickLinkAndCheckUrl(PO.linkBlog, urlBlog);
        await GH.ClickLinkAndCheckUrl(PO.linkSwitch, urlSwitch);
        await GH.ClickLinkAndCheckUrl(PO.linkMicrosoftToDo, urlHome);
        await GH.ClickLinkAndCheckUrl(PO.linkSignIn, urlSignIn);
        await GH.ClickLinkAndCheckUrl(PO.linkSwitchToDo, urlSwitch);
    });

    it('Check Sign In process', async () => {
        const
            email = 'nincs@ilyen.cim',
            password = 'randomPass',
            errMsg = `Expected alert didn't show up in time: '${GH.signInErrMsg}'`;

        await browser.wait(EC.presenceOf(PO.linkSignIn), 10000);
        await PO.linkSignIn.click();
        await browser.wait(EC.presenceOf(PO.inputEmail), 10000);
        await PO.inputEmail.sendKeys(email);
        await PO.inputPassword.sendKeys(password);
        await PO.buttonSignIn.click();
        await browser.wait(EC.visibilityOf(PO.divSignInError), 10000, errMsg);
        expect(await PO.divSignInError.getText()).toEqual(GH.signInErrMsg);
    });
});
