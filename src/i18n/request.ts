import { createRequire } from 'module'
import path from 'path'
import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

const require = createRequire(import.meta.url)

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale

  if (!locale || !routing.locales.includes(locale as 'en' | 'pt' | 'es')) {
    locale = routing.defaultLocale
  }

  // Path absoluto para Docker: dynamic import ../../messages falha em runtime no container
  const messagesPath = path.join(process.cwd(), 'messages', `${locale}.json`)
  const messages = require(messagesPath) as Record<string, unknown>

  return {
    locale,
    messages
  }
})