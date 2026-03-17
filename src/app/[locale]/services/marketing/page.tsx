import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServicePageLayout from '@/components/services/ServicePageLayout'
import CTASection from '@/components/CTASection'
import { BarChart3, Search, Target, TrendingUp, Megaphone, LineChart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Marketing Digital | Innexar',
  description: 'SEO, Google Ads, Meta Ads e estratégias de crescimento. Apareça no topo do Google e atraia clientes qualificados.',
}

const features = [
  { icon: Search, title: 'SEO Avançado', desc: 'Otimização técnica e de conteúdo para ranquear no Google e gerar tráfego orgânico.' },
  { icon: Target, title: 'Google Ads', desc: 'Campanhas de busca e display com foco em conversão e ROI mensurável.' },
  { icon: Megaphone, title: 'Meta Ads', desc: 'Facebook e Instagram Ads para alcançar seu público com criativos que convertem.' },
  { icon: TrendingUp, title: 'Crescimento Orgânico', desc: 'Estratégias de conteúdo, link building e autoridade de domínio.' },
  { icon: LineChart, title: 'Analytics', desc: 'Dashboards e relatórios para acompanhar métricas e tomar decisões baseadas em dados.' },
  { icon: BarChart3, title: 'Conversão', desc: 'CRO, testes A/B e otimização de landing pages para maximizar resultados.' },
]

const plans = [
  {
    name: 'SEO Básico',
    price: 'A partir de R$ 997/mês',
    desc: 'Para negócios que querem começar no Google',
    features: ['Auditoria técnica', 'Otimização on-page', 'Relatório mensal', 'Suporte por e-mail'],
    cta: '/contact',
    highlight: false,
  },
  {
    name: 'Gestão de Tráfego',
    price: 'Sob consulta',
    desc: 'Google Ads + Meta Ads com gestão completa',
    features: ['Estratégia personalizada', 'Criação de campanhas', 'Otimização contínua', 'Relatórios semanais', 'ROI acompanhado'],
    cta: '/contact',
    highlight: true,
  },
  {
    name: 'Growth Full',
    price: 'Sob consulta',
    desc: 'SEO + Ads + conteúdo integrados',
    features: ['Estratégia 360°', 'SEO + Paid', 'Conteúdo para blog', 'Analytics avançado', 'Reuniões quinzenais'],
    cta: '/contact',
    highlight: false,
  },
]

export default function MarketingPage() {
  return (
    <main>
      <Header />
      <ServicePageLayout
        badge="Marketing Digital"
        icon={BarChart3}
        title="Apareça no topo"
        subtitle="do Google"
        description="SEO avançado, Google Ads, Meta Ads e estratégias de crescimento orgânico. Atraia clientes qualificados e escale suas vendas com dados."
        gradient="from-[#FF6B47] to-[#FF9B4E]"
        features={features}
        plans={plans}
      />
      <CTASection />
      <Footer />
    </main>
  )
}
