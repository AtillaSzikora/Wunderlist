"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divImportSiteHeader = exports.divSiteError = exports.buttonGetToDoFromMicrosoft = exports.buttonGetMoreInfo = exports.buttonLearnMore = exports.buttonGetToDo = exports.searchResults = exports.inputSearch = exports.footerSupport = exports.footerBlog = exports.footerContact = exports.footerTermsOfUse = exports.footerPrivacyPolicy = exports.footerImprint = exports.divSignInError = exports.buttonSignIn = exports.inputPassword = exports.inputEmail = exports.menuSwitchToDo = exports.menuSignIn = exports.menuMicrosoftToDo = exports.menuSwitch = exports.menuBlog = exports.menuSupport = exports.menuWunderlist = void 0;
const protractor_1 = require("protractor");
// Menu bar links
exports.menuWunderlist = protractor_1.$('.wunderlist-logo'), exports.menuSupport = protractor_1.element(protractor_1.by.cssContainingText('li.menu-link > a', 'Support')), exports.menuBlog = protractor_1.element(protractor_1.by.cssContainingText('li.menu-link > a', 'Blog')), exports.menuSwitch = protractor_1.element(protractor_1.by.cssContainingText('li.menu-link > a', 'Switch')), exports.menuMicrosoftToDo = protractor_1.$('.wunderlist-todo-logo'), exports.menuSignIn = protractor_1.$('.wunderlist-login-button'), exports.menuSwitchToDo = protractor_1.$('.wunderlist-signup-button'), 
// Sign In fields
exports.inputEmail = protractor_1.$('[name="email"]'), exports.inputPassword = protractor_1.$('[name="password"]'), exports.buttonSignIn = protractor_1.$('[value="Sign In"]'), exports.divSignInError = protractor_1.$('div.errors > .message'), 
// Footer links
exports.footerImprint = protractor_1.element(protractor_1.by.cssContainingText('div.footer.center a', 'Imprint')), exports.footerPrivacyPolicy = protractor_1.element(protractor_1.by.cssContainingText('div.footer.center a', 'Policy')), exports.footerTermsOfUse = protractor_1.element(protractor_1.by.cssContainingText('div.footer.center a', 'Terms of Use')), exports.footerContact = protractor_1.element(protractor_1.by.cssContainingText('div.footer.center a', 'Contact')), exports.footerBlog = protractor_1.element(protractor_1.by.cssContainingText('div.footer.center a', 'Blog')), exports.footerSupport = protractor_1.element(protractor_1.by.cssContainingText('div.footer.center a', 'Support')), 
// Support page fields
exports.inputSearch = protractor_1.$('form > input.search-input.hide-on-mobile'), exports.searchResults = protractor_1.$$('div.search-results-wrapper > div > ul.faq-list > li > a'), 
// Switch to To Do page fields
exports.buttonGetToDo = protractor_1.$('#step-1 > div > div.section-intro > a'), exports.buttonLearnMore = protractor_1.$('#step-2 > div > div.section-intro > a'), exports.buttonGetMoreInfo = protractor_1.$('#step-3 > div > div.section-intro > a'), exports.buttonGetToDoFromMicrosoft = protractor_1.$('#buttonPanel_AppIdentityBuyButton'), exports.divSiteError = protractor_1.$('#main-message > h1'), exports.divImportSiteHeader = protractor_1.$('#supArticleContent h1');
//# sourceMappingURL=PageObjects.js.map