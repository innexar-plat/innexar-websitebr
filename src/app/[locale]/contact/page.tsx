import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from '@/components/contact/ContactHero';
import ContactSection from '@/components/contact/ContactSection';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://innexar.com.br';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Contato | Innexar',
    description: 'Fale com a Innexar. Tire suas dúvidas, solicite um orçamento ou agende uma call gratuita com nossa equipe.',
    openGraph: {
      title: 'Contato | Innexar',
      description: 'Fale com nossa equipe.',
      url: `${SITE_URL}/${locale}/contact`,
    },
  };
}

export default function ContactPage() {
  return (
    <main>
      <Header />
      <ContactHero />
      <ContactSection />
      <Footer />
    </main>
  );
}
