'use strict';
const path = require('path');

const routing = {
  locales: ['pt', 'en', 'es'],
  defaultLocale: 'pt',
  localeDetection: false
};

// Exporta função compatível com getRequestConfig, sem importar next-intl/server (server-only)
module.exports = async function getRequestConfig({ requestLocale }) {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale;
  }
  const messagesPath = path.join(process.cwd(), 'messages', `${locale}.json`);
  const messages = require(messagesPath);
  return { locale, messages };
};
