import { $, element, by } from 'protractor';

export const
    linkWunderlist = $('.wunderlist-wordmark'),
    linkSupport = element(by.cssContainingText('li.menu-link > a', 'Support')),
    linkBlog = $(''),
    linkSwitch = $('');