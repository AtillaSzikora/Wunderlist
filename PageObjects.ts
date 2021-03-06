import { $, $$, element, by } from 'protractor';

export const
    // Menu bar links
    menuWunderlist = $('.wunderlist-logo'),
    menuSupport = element(by.cssContainingText('li.menu-link > a', 'Support')),
    menuBlog = element(by.cssContainingText('li.menu-link > a', 'Blog')),
    menuSwitch = element(by.cssContainingText('li.menu-link > a', 'Switch')),
    menuMicrosoftToDo = $('.wunderlist-todo-logo'),
    menuSignIn = $('.wunderlist-login-button'),
    menuSwitchToDo = $('.wunderlist-signup-button'),

    // Sign In fields
    inputEmail = $('[name="email"]'),
    inputPassword = $('[name="password"]'),
    buttonSignIn = $('[value="Sign In"]'),
    divSignInError = $('div.errors > .message'),

    // Footer links
    footerImprint = element(by.cssContainingText('div.footer.center a', 'Imprint')),
    footerPrivacyPolicy = element(by.cssContainingText('div.footer.center a', 'Policy')),
    footerTermsOfUse = element(by.cssContainingText('div.footer.center a', 'Terms of Use')),
    footerContact = element(by.cssContainingText('div.footer.center a', 'Contact')),
    footerBlog = element(by.cssContainingText('div.footer.center a', 'Blog')),
    footerSupport = element(by.cssContainingText('div.footer.center a', 'Support')),

    // Support page fields
    inputSearch = $('form > input.search-input.hide-on-mobile'),
    searchResults = $$('div.search-results-wrapper > div > ul.faq-list > li > a'),

    // Switch to To Do page fields
    buttonGetToDo = $('#step-1 > div > div.section-intro > a'),
    buttonLearnMore = $('#step-2 > div > div.section-intro > a'),
    buttonGetMoreInfo = $('#step-3 > div > div.section-intro > a'),
    buttonGetToDoFromMicrosoft = $('#buttonPanel_AppIdentityBuyButton'),
    divSiteError = $('#main-message > h1'),
    divImportSiteHeader = $('#supArticleContent h1');
