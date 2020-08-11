"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const PO = require("./PageObjects");
const GH = require("./GenericHelper");
describe('Wunderlist', () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.navigate().to(GH.urlBase);
        yield protractor_1.browser.waitForAngularEnabled(false);
    }));
    it('Check if all menu bar links lead to the right sub page.', () => __awaiter(void 0, void 0, void 0, function* () {
        yield GH.ClickLinkAndCheckUrl(PO.menuWunderlist, GH.urlHome);
        yield GH.ClickLinkAndCheckUrl(PO.menuSupport, GH.urlSupport);
        yield GH.ClickLinkAndCheckUrl(PO.menuBlog, GH.urlBlog);
        yield GH.ClickLinkAndCheckUrl(PO.menuSwitch, GH.urlSwitch);
        yield GH.ClickLinkAndCheckUrl(PO.menuMicrosoftToDo, GH.urlHome);
        yield GH.ClickLinkAndCheckUrl(PO.menuSignIn, GH.urlSignIn);
        yield GH.ClickLinkAndCheckUrl(PO.menuSwitchToDo, GH.urlSwitch);
    }));
    it('Check if the Sign In shows the correct error when user/pass is wrong.', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(PO.menuSignIn), 10000);
        yield PO.menuSignIn.click();
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(PO.inputEmail), 10000);
        yield PO.inputEmail.sendKeys(GH.email);
        yield PO.inputPassword.sendKeys(GH.password);
        yield PO.buttonSignIn.click();
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(PO.divSignInError), 10000, GH.signInErrorMsg);
        expect(yield PO.divSignInError.getText()).toEqual(GH.signInErrorAlert);
    }));
    it('Check if all footer links lead to the right sub page.', () => __awaiter(void 0, void 0, void 0, function* () {
        yield GH.ClickLinkAndCheckUrl(PO.footerImprint, GH.urlImprint);
        yield GH.ClickLinkAndCheckUrl(PO.footerPrivacyPolicy, GH.urlPrivacyPolicy);
        yield GH.ClickLinkAndCheckUrl(PO.footerTermsOfUse, GH.urlTermsOfUse);
        yield GH.ClickLinkAndCheckUrl(PO.footerContact, GH.urlContact);
        yield GH.ClickLinkAndCheckUrl(PO.footerBlog, GH.urlBlog);
        yield GH.ClickLinkAndCheckUrl(PO.footerSupport, GH.urlSupport);
    }));
    it('Filter down support topics');
    it('Check if hte Blog contain important titles.');
    it('Comparison of Wunderlist and Microsoft To Do in /home#mydaySection');
    it('Switch STEP 2  - Learn More fails');
});
//# sourceMappingURL=UITests.js.map