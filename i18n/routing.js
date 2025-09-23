// i18n/routing.js (Final Version)

import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  locales: ['tr', 'en', 'de'],
  defaultLocale: 'tr',
  localeDetection: true,
});
