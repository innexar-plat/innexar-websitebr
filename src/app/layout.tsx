import type { Metadata } from 'next'
import './globals.css'
import { Geist } from 'next/font/google'

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Innexar - Technology Solutions',
  description: 'Professional technology solutions, software development, infrastructure and consulting services',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
}

// Root layout: apply font variable so it's available in DOM; [locale]/layout.tsx wraps content
export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  return <div className={geist.variable}>{children}</div>
}