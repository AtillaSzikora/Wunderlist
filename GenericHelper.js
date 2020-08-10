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
exports.ClickLinkAndCheckUrl = exports.baseUrl = void 0;
const protractor_1 = require("protractor");
exports.baseUrl = 'https://www.wunderlist.com/';
function ClickLinkAndCheckUrl(link, url) {
    return __awaiter(this, void 0, void 0, function* () {
        const errMsg = new Error(`Clicking on link: '${link.locator().value}' didn't lead to the expected url: '${url}'`);
        if ((yield protractor_1.browser.getCurrentUrl()) != exports.baseUrl)
            yield protractor_1.browser.navigate().to(exports.baseUrl);
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(link), 10000);
        yield link.click();
        expect((yield protractor_1.browser.getCurrentUrl()).endsWith(url)).toBe(true, errMsg);
    });
}
exports.ClickLinkAndCheckUrl = ClickLinkAndCheckUrl;
;
//# sourceMappingURL=GenericHelper.js.map