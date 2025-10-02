// i18n/routing.js
import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  locales: ['tr', 'en', 'de', 'ar'],
  defaultLocale: 'tr',
  localePrefix: 'always',
  localeDetection: true,
});
