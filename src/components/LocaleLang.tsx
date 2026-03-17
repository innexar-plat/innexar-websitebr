'use client'

import { useEffect } from 'react'

/** Atualiza document.documentElement.lang para SEO (root layout usa pt por padrão) */
export default function LocaleLang({ locale }: { locale: string }) {
  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])
  return null
}
