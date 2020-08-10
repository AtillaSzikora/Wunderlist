"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkSwitch = exports.linkBlog = exports.linkSupport = exports.linkWunderlist = void 0;
const protractor_1 = require("protractor");
exports.linkWunderlist = protractor_1.$('.wunderlist-wordmark'), exports.linkSupport = protractor_1.element(protractor_1.by.cssContainingText('li.menu-link > a', 'Support')), exports.linkBlog = protractor_1.$(''), exports.linkSwitch = protractor_1.$('');
//# sourceMappingURL=PageObjects.js.map