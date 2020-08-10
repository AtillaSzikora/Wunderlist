import { $, element, by } from 'protractor';

export const
    linkWunderlist = $('.wunderlist-logo'),
    linkSupport = element(by.cssContainingText('li.menu-link > a', 'Support')),
    linkBlog = element(by.cssContainingText('li.menu-link > a', 'Blog')),
    linkSwitch = element(by.cssContainingText('li.menu-link > a', 'Switch')),
    linkMicrosoftToDo = $('.wunderlist-todo-logo'),
    linkSignIn = $('.wunderlist-login-button'),
    linkSwitchToDo = $('.wunderlist-signup-button');
