import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHeroSection from '@/components/about/AboutHeroSection';
import AboutMission from '@/components/about/AboutMission';
import AboutValues from '@/components/about/AboutValues';
import CTASection from '@/components/CTASection';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://innexar.com.br';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Sobre Nós | Innexar',
    description: 'Conheça a Innexar — agência digital brasileira especializada em sites, apps e IA. Nossa missão, valores e time.',
    openGraph: {
      title: 'Sobre a Innexar',
      description: 'Conheça nossa história, missão e valores.',
      url: `${SITE_URL}/${locale}/about`,
      images: [{ url: `${SITE_URL}/og-image.jpg` }],
    },
  };
}

export default async function AboutPage() {
  return (
    <main>
      <Header />
      <AboutHeroSection />
      <AboutMission />
      <AboutValues />
      <CTASection />
      <Footer />
    </main>
  );
}