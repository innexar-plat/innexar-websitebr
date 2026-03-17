import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

/** Configuração pública do site (env vars) para Header, Footer, etc. */
export async function GET() {
  const config = {
    site_phone_br: process.env.NEXT_PUBLIC_SITE_PHONE || '5513991821557',
    site_whatsapp_br: process.env.NEXT_PUBLIC_SITE_WHATSAPP || process.env.NEXT_PUBLIC_SITE_PHONE || '5513991821557',
    site_address_br: process.env.NEXT_PUBLIC_SITE_ADDRESS || 'Praia Grande, SP',
    sales_email: process.env.SMTP_FROM_EMAIL || process.env.CONTACT_RECIPIENT_EMAIL || 'comercial@innexar.app',
    support_email: process.env.SMTP_FROM_EMAIL || 'comercial@innexar.app',
    company_name: process.env.NEXT_PUBLIC_COMPANY_NAME || 'Innexar',
  }
  return NextResponse.json(config)
}
