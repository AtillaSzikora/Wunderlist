import { $, element, by } from 'protractor';

export const
    // Menu bar links
    linkWunderlist = $('.wunderlist-logo'),
    linkSupport = element(by.cssContainingText('li.menu-link > a', 'Support')),
    linkBlog = element(by.cssContainingText('li.menu-link > a', 'Blog')),
    linkSwitch = element(by.cssContainingText('li.menu-link > a', 'Switch')),
    linkMicrosoftToDo = $('.wunderlist-todo-logo'),
    linkSignIn = $('.wunderlist-login-button'),
    linkSwitchToDo = $('.wunderlist-signup-button'),

    // Sign In fields
    inputEmail = $('[name="email"]'),
    inputPassword = $('[name="password"]'),
    buttonSignIn = $('[value="Sign In"]'),
    divSignInError = $('div.errors > .message');
