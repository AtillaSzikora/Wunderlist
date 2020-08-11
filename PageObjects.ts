import { $, element, by } from 'protractor';

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
    footerSupport = element(by.cssContainingText('div.footer.center a', 'Support'));
