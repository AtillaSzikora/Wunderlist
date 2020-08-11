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
exports.ClickField = exports.ClickLinkAndCheckUrl = exports.signInErrorMsg = exports.signInErrorAlert = exports.password = exports.email = exports.urlContact = exports.urlTermsOfUse = exports.urlPrivacyPolicy = exports.urlImprint = exports.urlSignIn = exports.urlSwitch = exports.urlBlog = exports.urlSupport = exports.urlHome = exports.urlBase = void 0;
const protractor_1 = require("protractor");
// URLs
exports.urlBase = 'https://www.wunderlist.com/', exports.urlHome = '/home', exports.urlSupport = 'todosupport.helpshift.com/a/microsoft-to-do/?p=web', exports.urlBlog = '/blog/', exports.urlSwitch = 'switch', exports.urlSignIn = 'login?redirect_url=/home', exports.urlImprint = '/imprint/', exports.urlPrivacyPolicy = '/privacy-policy/', exports.urlTermsOfUse = '/terms-of-use/', exports.urlContact = '/contact/', 
// Misc texts
exports.email = 'nincs@ilyen.cim', exports.password = 'randomPass', exports.signInErrorAlert = 'The email or password you entered was incorrect. Please try again.', exports.signInErrorMsg = `Expected alert didn't show up in time: '${exports.signInErrorAlert}'`;
/**
 * Clicks on a link and expect a given url to be loaded.
 * Navigates to the home page first if necessary.
 * @param link to click on
 * @param url expected to load
 */
function ClickLinkAndCheckUrl(link, url) {
    return __awaiter(this, void 0, void 0, function* () {
        const errMsg = new Error(`Clicking on link: '${link.locator().value}' didn't lead to the expected url: '${url}'`);
        if ((yield protractor_1.browser.getCurrentUrl()) != exports.urlBase)
            yield protractor_1.browser.navigate().to(exports.urlBase);
        yield ClickField(link);
        expect((yield protractor_1.browser.getCurrentUrl()).endsWith(url)).toBe(true, errMsg);
    });
}
exports.ClickLinkAndCheckUrl = ClickLinkAndCheckUrl;
;
/**
 * Clicks on a field. Waits 10 s for it to load.
 * Throws custom error if it times out.
 * @param field locator to click on.
 */
function ClickField(field) {
    return __awaiter(this, void 0, void 0, function* () {
        const errMsg = `Could not click on field in 10 seconds: '${field.locator().value}'!`;
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(field), 10000, errMsg);
        yield field.click();
    });
}
exports.ClickField = ClickField;
;
//# sourceMappingURL=GenericHelper.js.map