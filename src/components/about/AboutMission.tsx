'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';

const pillars = [
  {
    icon: Target,
    title: 'Nossa Missão',
    text: 'Democratizar o acesso à tecnologia de ponta para empresas brasileiras, entregando soluções digitais que geram crescimento real e mensurável.',
    color: 'from-[#00C9B1]/20 to-[#0A7EA4]/20',
    border: 'border-[#00C9B1]/20',
    iconColor: 'text-[#00C9B1]',
    iconBg: 'bg-[#00C9B1]/10',
  },
  {
    icon: Eye,
    title: 'Nossa Visão',
    text: 'Ser a agência digital de referência no Brasil para PMEs, reconhecida pela excelência técnica, design inovador e resultados concretos.',
    color: 'from-[#0A7EA4]/20 to-[#005F7A]/20',
    border: 'border-[#0A7EA4]/20',
    iconColor: 'text-[#7EEADC]',
    iconBg: 'bg-[#0A7EA4]/10',
  },
  {
    icon: Heart,
    title: 'Nossos Valores',
    text: 'Transparência, comprometimento e foco em resultado. Tratamos cada projeto como se fosse nosso, porque o sucesso do cliente é o nosso sucesso.',
    color: 'from-[#FF6B47]/10 to-[#FF9B4E]/10',
    border: 'border-[#FF6B47]/15',
    iconColor: 'text-[#FF6B47]',
    iconBg: 'bg-[#FF6B47]/10',
  },
];

export default function AboutMission() {
  return (
    <section className="py-20 md:py-28 bg-[#112233]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-[#00C9B1]" />
            <span className="text-[11px] text-[#00C9B1] font-bold tracking-[3px] uppercase font-['DM_Sans']">Quem somos</span>
            <div className="w-6 h-[2px] bg-[#00C9B1]" />
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-white mb-5">
            Propósito e direção
          </h2>
          <p className="font-['DM_Sans'] text-lg text-white/45 max-w-2xl mx-auto">
            Tudo que fazemos é guiado por um propósito claro: transformar negócios através da tecnologia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
              viewport={{ once: true, margin: '-80px' }}
              className={`bg-gradient-to-br ${p.color} border ${p.border} rounded-2xl p-8`}
            >
              <div className={`w-12 h-12 rounded-xl ${p.iconBg} flex items-center justify-center mb-5`}>
                <p.icon size={22} strokeWidth={1.5} className={p.iconColor} aria-hidden="true" />
              </div>
              <h3 className="font-['Playfair_Display'] text-xl font-bold text-white mb-3">{p.title}</h3>
              <p className="font-['DM_Sans'] text-sm text-white/55 leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
