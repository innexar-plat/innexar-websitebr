import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SaasHero from '@/components/saas/SaasHero'
import CTASection from '@/components/CTASection'
import ServicePageLayout from '@/components/services/ServicePageLayout'
import { CreditCard, Zap, Building2, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Site por Assinatura | Innexar',
  description: 'Site profissional com manutenção inclusa. Pague mensalmente, sem investimento inicial. Design, hospedagem e suporte incluídos.',
}

const features = [
  { icon: Zap, title: 'Sem investimento inicial', desc: 'Comece com uma mensalidade acessível. Sem taxa de setup.' },
  { icon: CreditCard, title: 'Pagamento mensal', desc: 'Cancele quando quiser. Sem fidelidade ou multas.' },
  { icon: Building2, title: 'Manutenção inclusa', desc: 'Atualizações, correções e suporte técnico incluídos.' },
  { icon: CheckCircle2, title: 'Entrega rápida', desc: 'Site no ar em até 7 dias após o onboarding.' },
]

const plans = [
  {
    name: 'Starter',
    price: 'R$ 197/mês',
    desc: 'Ideal para profissionais e pequenos negócios',
    features: ['1 página (landing)', 'Design responsivo', 'Formulário de contato', 'Hospedagem incluída', 'SSL e domínio', 'Suporte por e-mail'],
    cta: '/contact',
    highlight: false,
  },
  {
    name: 'Profissional',
    price: 'R$ 347/mês',
    desc: 'Para empresas que precisam de mais páginas',
    features: ['Até 5 páginas', 'Design exclusivo', 'Blog integrado', 'SEO básico', 'WhatsApp integrado', 'Suporte prioritário'],
    cta: '/contact',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Sob consulta',
    desc: 'Soluções sob medida para grandes operações',
    features: ['Páginas ilimitadas', 'E-commerce', 'Integrações', 'SLA dedicado', 'Gerente de conta', 'Treinamento'],
    cta: '/contact',
    highlight: false,
  },
]

export default function SaasPage() {
  return (
    <main>
      <Header />
      <SaasHero />
      <ServicePageLayout
        badge="Site por Assinatura"
        icon={CreditCard}
        title="Preços transparentes"
        subtitle="sem surpresas"
        description="Escolha o plano ideal para seu negócio. Todos incluem hospedagem, manutenção e suporte. Comece hoje e cancele quando quiser."
        gradient="from-indigo-600 to-purple-700"
        features={features}
        plans={plans}
      />
      <CTASection />
      <Footer />
    </main>
  )
}
