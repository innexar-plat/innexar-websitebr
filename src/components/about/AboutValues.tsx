'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Target, Users, Shield, Code2, Rocket } from 'lucide-react';

const values = [
  { icon: Lightbulb, title: 'Inovação', desc: 'Adotamos as melhores tecnologias do mercado para criar soluções que realmente diferenciam seu negócio.' },
  { icon: Target, title: 'Resultado', desc: 'Cada linha de código tem um propósito: gerar crescimento, conversão e retorno para o seu negócio.' },
  { icon: Users, title: 'Parceria', desc: 'Somos uma extensão do seu time, não apenas um fornecedor. Seu problema é nosso problema.' },
  { icon: Shield, title: 'Qualidade', desc: 'Código limpo, testes automatizados, CI/CD e melhores práticas de segurança em tudo que entregamos.' },
  { icon: Code2, title: 'Excelência técnica', desc: 'Arquitetura sólida, performance e escalabilidade — pensamos no longo prazo desde o primeiro commit.' },
  { icon: Rocket, title: 'Agilidade', desc: 'Metodologia ágil com entregas iterativas. Você vê progresso real desde a primeira semana.' },
];

export default function AboutValues() {
  return (
    <section className="py-20 md:py-28 bg-[#0D1B2A]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-[#00C9B1]/12 border border-[#00C9B1]/30 rounded-full px-4 py-1.5 text-[11px] text-[#00C9B1] font-bold tracking-[2px] uppercase font-['DM_Sans'] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C9B1] animate-pulse" />
            Como trabalhamos
          </span>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-white mb-5">
            O que nos move todos os dias
          </h2>
          <p className="font-['DM_Sans'] text-lg text-white/45 max-w-xl mx-auto">
            Princípios que guiam cada projeto, cada decisão e cada linha de código que escrevemos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const }}
              viewport={{ once: true, margin: '-80px' }}
              className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 hover:border-[#00C9B1]/25 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-[#00C9B1]/10 flex items-center justify-center mb-5">
                <v.icon size={20} strokeWidth={1.5} className="text-[#00C9B1]" aria-hidden="true" />
              </div>
              <h3 className="font-['Playfair_Display'] text-lg font-bold text-white mb-2">{v.title}</h3>
              <p className="font-['DM_Sans'] text-sm text-white/45 leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
