import { browser } from 'protractor';
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
});
