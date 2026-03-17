import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServicePageLayout from '@/components/services/ServicePageLayout'
import CTASection from '@/components/CTASection'
import { BrainCircuit, Search, Zap, Target, BarChart3, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'ProspectorAI | Prospecção com IA | Innexar',
  description: 'Prospecção inteligente com inteligência artificial. Encontre leads qualificados, automatize o outreach e escale suas vendas.',
}

const features = [
  { icon: Search, title: 'Descoberta de Leads', desc: 'IA identifica prospects ideais com base em critérios de fit e intent.' },
  { icon: BrainCircuit, title: 'Análise com IA', desc: 'Processamento de dados e scoring automático para priorizar os melhores leads.' },
  { icon: Mail, title: 'Outreach Automatizado', desc: 'Sequências de e-mail e follow-ups personalizados em escala.' },
  { icon: Target, title: 'Qualificação', desc: 'Filtros por indústria, tamanho, tecnologias e comportamento.' },
  { icon: Zap, title: 'Integrações', desc: 'CRM, LinkedIn, e-mail e ferramentas de vendas conectadas.' },
  { icon: BarChart3, title: 'Métricas', desc: 'Dashboards de conversão, taxa de resposta e pipeline de vendas.' },
]

const plans = [
  {
    name: 'Starter',
    price: 'Sob consulta',
    desc: 'Para equipes de vendas iniciando com IA',
    features: ['Até 500 leads/mês', '1 integração', 'Suporte por e-mail', 'Onboarding básico'],
    cta: '/contact',
    highlight: false,
  },
  {
    name: 'Growth',
    price: 'Sob consulta',
    desc: 'Para equipes que querem escalar',
    features: ['Leads ilimitados', 'Integrações completas', 'Suporte prioritário', 'Customizações'],
    cta: '/contact',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Sob consulta',
    desc: 'Solução sob medida para grandes operações',
    features: ['API dedicada', 'SLA garantido', 'Sucesso do cliente', 'Treinamento da equipe'],
    cta: '/contact',
    highlight: false,
  },
]

export default function ProspectorAiPage() {
  return (
    <main>
      <Header />
      <ServicePageLayout
        badge="ProspectorAI"
        icon={BrainCircuit}
        title="Prospecção inteligente"
        subtitle="com IA"
        description="Encontre leads qualificados automaticamente, automatize o outreach e escale suas vendas com inteligência artificial."
        gradient="from-[#00C9B1] to-[#0A7EA4]"
        features={features}
        plans={plans}
      />
      <CTASection />
      <Footer />
    </main>
  )
}
