"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divSignInError = exports.buttonSignIn = exports.inputPassword = exports.inputEmail = exports.linkSwitchToDo = exports.linkSignIn = exports.linkMicrosoftToDo = exports.linkSwitch = exports.linkBlog = exports.linkSupport = exports.linkWunderlist = void 0;
const protractor_1 = require("protractor");
// Menu bar links
exports.linkWunderlist = protractor_1.$('.wunderlist-logo'), exports.linkSupport = protractor_1.element(protractor_1.by.cssContainingText('li.menu-link > a', 'Support')), exports.linkBlog = protractor_1.element(protractor_1.by.cssContainingText('li.menu-link > a', 'Blog')), exports.linkSwitch = protractor_1.element(protractor_1.by.cssContainingText('li.menu-link > a', 'Switch')), exports.linkMicrosoftToDo = protractor_1.$('.wunderlist-todo-logo'), exports.linkSignIn = protractor_1.$('.wunderlist-login-button'), exports.linkSwitchToDo = protractor_1.$('.wunderlist-signup-button'), 
// Sign In fields
exports.inputEmail = protractor_1.$('[name="email"]'), exports.inputPassword = protractor_1.$('[name="password"]'), exports.buttonSignIn = protractor_1.$('[value="Sign In"]'), exports.divSignInError = protractor_1.$('div.errors > .message');
//# sourceMappingURL=PageObjects.js.map