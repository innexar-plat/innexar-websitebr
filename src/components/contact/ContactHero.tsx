'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactHero() {
  return (
    <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-[#0D1B2A] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00C9B1]/[0.06] rounded-full blur-[120px]" />
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 bg-[#00C9B1]/12 border border-[#00C9B1]/30 rounded-full px-4 py-1.5 text-[11px] text-[#00C9B1] font-bold tracking-[2px] uppercase font-['DM_Sans'] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C9B1] animate-pulse" />
            Fale conosco
          </span>
          <h1 className="font-['Playfair_Display'] text-4xl md:text-6xl font-black text-white mb-6">
            Vamos conversar sobre
            <br />
            <span className="bg-gradient-to-r from-[#00C9B1] to-[#7EEADC] bg-clip-text text-transparent">
              seu projeto
            </span>
          </h1>
          <p className="font-['DM_Sans'] text-xl text-white/50 leading-relaxed">
            Preencha o formulário ou use um dos canais abaixo. Respondemos em até 24 horas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
