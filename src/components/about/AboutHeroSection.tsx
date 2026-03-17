'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Users, Award, Globe2, Rocket, MapPin, CalendarDays } from 'lucide-react';

const stats = [
  { icon: Users, value: '120+', label: 'Clientes ativos' },
  { icon: Award, value: '98%', label: 'Satisfação' },
  { icon: Globe2, value: '8+', label: 'Anos de mercado' },
  { icon: Rocket, value: '200+', label: 'Projetos entregues' },
];

export default function AboutHeroSection() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-[#0D1B2A] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#00C9B1]/[0.06] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#0A7EA4]/[0.08] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-[#00C9B1]/12 border border-[#00C9B1]/30 rounded-full px-4 py-1.5 text-[11px] text-[#00C9B1] font-bold tracking-[2px] uppercase font-['DM_Sans'] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C9B1] animate-pulse" />
            Nossa história
          </span>
          <h1 className="font-['Playfair_Display'] text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Tecnologia que{' '}
            <span className="bg-gradient-to-r from-[#00C9B1] to-[#7EEADC] bg-clip-text text-transparent">
              transforma negócios
            </span>
          </h1>
          <p className="font-['DM_Sans'] text-xl text-white/50 leading-relaxed mb-6">
            A Innexar é uma agência digital brasileira especializada em criar experiências digitais que geram resultados reais para empresas que querem crescer.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-white/30 font-['DM_Sans']">
            <MapPin size={14} strokeWidth={1.5} aria-hidden="true" />
            <span>Praia Grande, São Paulo — Brasil</span>
          </div>
        </motion.div>

        {/* Logo visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative max-w-sm mx-auto mb-16"
        >
          <div className="aspect-square rounded-3xl bg-white/[0.03] border border-white/[0.07] flex items-center justify-center p-12">
            <Image
              src="/logo-innexar.svg"
              alt="Innexar"
              width={240}
              height={240}
              className="object-contain brightness-0 invert opacity-80"
            />
          </div>
          <div className="absolute -top-3 -right-3 w-6 h-6 bg-[#00C9B1] rounded-full" />
          <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-[#FF6B47] rounded-full" />
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } }
              }}
              className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 text-center hover:border-[#00C9B1]/25 transition-all duration-300"
            >
              <stat.icon size={20} strokeWidth={1.5} className="text-[#00C9B1]/60 mx-auto mb-3" aria-hidden="true" />
              <p className="font-['Playfair_Display'] text-4xl font-black text-[#00C9B1] leading-none mb-1">{stat.value}</p>
              <p className="text-xs text-white/40 font-['DM_Sans']">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
