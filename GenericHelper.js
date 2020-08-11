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
exports.CompareTableValues = exports.ClickField = exports.ClickLinkAndCheckUrl = exports.comparisonTableData = exports.comparisonTableRowSelector = exports.signInErrorMsg = exports.signInErrorAlert = exports.password = exports.email = exports.urlContact = exports.urlTermsOfUse = exports.urlPrivacyPolicy = exports.urlImprint = exports.urlSignIn = exports.urlSwitch = exports.urlBlog = exports.urlSupport = exports.urlHome = exports.urlBase = void 0;
const protractor_1 = require("protractor");
// URLs
exports.urlBase = 'https://www.wunderlist.com/', exports.urlHome = '/home', exports.urlSupport = 'todosupport.helpshift.com/a/microsoft-to-do/?p=web', exports.urlBlog = '/blog/', exports.urlSwitch = 'switch', exports.urlSignIn = 'login?redirect_url=/home', exports.urlImprint = '/imprint/', exports.urlPrivacyPolicy = '/privacy-policy/', exports.urlTermsOfUse = '/terms-of-use/', exports.urlContact = '/contact/', 
// Misc texts
exports.email = 'nincs@ilyen.cim', exports.password = 'randomPass', exports.signInErrorAlert = 'The email or password you entered was incorrect. Please try again.', exports.signInErrorMsg = `Expected alert didn't show up in time: '${exports.signInErrorAlert}'`, 
// Comparison table values
exports.comparisonTableRowSelector = '#comparisonTable div.row', exports.comparisonTableData = {
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
    assignTasks: ['Assign tasks', false, false],
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
 * Clicks on a field. Waits 10 seconds for it to load.
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
/**
 * Check if Wunderlist and Microsoft To Do features are marked correctly by ckeckbox icon
 */
function CompareTableValues() {
    return __awaiter(this, void 0, void 0, function* () {
        for (let prop in exports.comparisonTableData) {
            const row = yield protractor_1.element(protractor_1.by.cssContainingText(exports.comparisonTableRowSelector, exports.comparisonTableData[prop][0])), isCheckedAt1stCol = yield row.$('div.cell.icon:nth-child(2) > svg > path[fill-rule="nonzero"]').isPresent(), isCheckedAt2ndCol = yield row.$('div.cell.icon:nth-child(3) > svg > path[fill-rule="nonzero"]').isPresent(), errMsg = new Error(`At row: '${exports.comparisonTableData[prop][0]}'`);
            expect(isCheckedAt1stCol).toBe(exports.comparisonTableData[prop][1], errMsg);
            expect(isCheckedAt2ndCol).toBe(exports.comparisonTableData[prop][2], errMsg);
        }
    });
}
exports.CompareTableValues = CompareTableValues;
;
//# sourceMappingURL=GenericHelper.js.map