import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Innexar - Technology Solutions',
  description: 'Professional technology solutions, software development, infrastructure and consulting services',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
}

// Root layout MUST contain html/body (Next.js requirement)
export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}