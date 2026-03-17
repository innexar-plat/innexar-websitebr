import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Política de privacidade e proteção de dados da Innexar. Conheça como tratamos suas informações.',
}

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Header />
      <article className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-white mb-8">Política de Privacidade</h1>
        <p className="text-white/70 mb-6">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-white/80">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">1. Coleta de Dados</h2>
            <p>
              A Innexar coleta informações que você nos fornece diretamente, como nome, e-mail, telefone e mensagens
              enviadas através dos formulários de contato. Também coletamos dados de uso do site (cookies, endereço IP)
              para melhorar nossa experiência e análise.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">2. Uso das Informações</h2>
            <p>
              Utilizamos suas informações para responder a solicitações, enviar comunicações comerciais (com seu
              consentimento), melhorar nossos serviços e cumprir obrigações legais.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">3. Compartilhamento</h2>
            <p>
              Não vendemos seus dados. Podemos compartilhar informações com prestadores de serviço (hospedagem, e-mail,
              analytics) que nos auxiliam na operação do site, sob acordos de confidencialidade.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">4. Cookies</h2>
            <p>
              Utilizamos cookies para funcionalidade essencial, análise de tráfego e personalização. Você pode
              configurar suas preferências através do banner de cookies exibido no site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">5. Seus Direitos (LGPD)</h2>
            <p>
              Você tem direito a acessar, corrigir, excluir ou portar seus dados pessoais. Para exercer esses direitos,
              entre em contato conosco em comercial@innexar.app.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">6. Contato</h2>
            <p>
              Dúvidas sobre esta política: comercial@innexar.app | (13) 99182-1557
            </p>
          </section>
        </div>
      </article>
      <Footer />
    </main>
  )
}
