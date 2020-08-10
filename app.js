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
        yield protractor_1.browser.navigate().to(GH.baseUrl);
        yield protractor_1.browser.waitForAngularEnabled(false);
    }));
    it('Check menu links', () => __awaiter(void 0, void 0, void 0, function* () {
        const urlHome = '/home', urlSupport = 'todosupport.helpshift.com/a/microsoft-to-do/?p=web', urlBlog = '/blog/', urlSwitch = 'switch', urlSignIn = 'login?redirect_url=/home';
        yield GH.ClickLinkAndCheckUrl(PO.linkWunderlist, urlHome);
        yield GH.ClickLinkAndCheckUrl(PO.linkSupport, urlSupport);
        yield GH.ClickLinkAndCheckUrl(PO.linkBlog, urlBlog);
        yield GH.ClickLinkAndCheckUrl(PO.linkSwitch, urlSwitch);
        yield GH.ClickLinkAndCheckUrl(PO.linkMicrosoftToDo, urlHome);
        yield GH.ClickLinkAndCheckUrl(PO.linkSignIn, urlSignIn);
        yield GH.ClickLinkAndCheckUrl(PO.linkSwitchToDo, urlSwitch);
    }));
});
//# sourceMappingURL=app.js.map