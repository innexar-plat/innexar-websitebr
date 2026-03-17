import { generateMetadata as genMeta } from '@/lib/seo'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LaunchPageClient from '@/components/launch/LaunchPageClient'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  return genMeta(locale, 'criar-site')
}

/** Página principal "Criar meu site" - mesmo conteúdo do launch */
export default function CriarSitePage() {
  return (
    <main>
      <Header />
      <LaunchPageClient />
      <Footer />
    </main>
  )
}
