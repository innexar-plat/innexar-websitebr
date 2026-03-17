'use strict';
const path = require('path');
const fs = require('fs');

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
  const messagesDir = path.join(process.cwd(), 'messages');
  const messagesPath = path.join(messagesDir, `${locale}.json`);
  let messages = {};
  try {
    if (fs.existsSync(messagesPath)) {
      messages = JSON.parse(fs.readFileSync(messagesPath, 'utf8'));
    }
  } catch (err) {
    console.error('[next-intl] Failed to load messages:', messagesPath, err.message);
  }
  return { locale, messages };
};
