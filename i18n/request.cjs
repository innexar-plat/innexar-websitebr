'use strict';
const path = require('path');
const { getRequestConfig } = require('next-intl/server');

const routing = {
  locales: ['pt', 'en', 'es'],
  defaultLocale: 'pt',
  localeDetection: false
};

module.exports = getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale;
  }
  const messagesPath = path.join(process.cwd(), 'messages', `${locale}.json`);
  const messages = require(messagesPath);
  return { locale, messages };
});
