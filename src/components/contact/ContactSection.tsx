'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, CheckCircle2, AlertCircle, Loader2, Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react';

const schema = z.object({
  name: z.string().min(2, 'Nome obrigatório'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().optional(),
  subject: z.string().min(3, 'Assunto obrigatório'),
  message: z.string().min(10, 'Mensagem muito curta'),
});

type FormData = z.infer<typeof schema>;

const channels = [
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: '(13) 99182-1557',
    href: 'https://wa.me/5513991821557',
    desc: 'Resposta em minutos',
    color: 'text-[#25D366]',
    bg: 'bg-[#25D366]/10',
  },
  {
    icon: Mail,
    title: 'E-mail',
    value: 'comercial@innexar.app',
    href: 'mailto:comercial@innexar.app',
    desc: 'Resposta em até 24h',
    color: 'text-[#00C9B1]',
    bg: 'bg-[#00C9B1]/10',
  },
  {
    icon: Phone,
    title: 'Telefone',
    value: '(13) 99182-1557',
    href: 'tel:+5513991821557',
    desc: 'Seg–Sex: 9h–18h',
    color: 'text-[#7EEADC]',
    bg: 'bg-[#7EEADC]/10',
  },
  {
    icon: MapPin,
    title: 'Localização',
    value: 'Praia Grande, SP',
    href: 'https://maps.google.com/?q=Praia+Grande+SP',
    desc: 'Atendimento presencial',
    color: 'text-[#FF9B4E]',
    bg: 'bg-[#FF9B4E]/10',
  },
];

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="py-16 md:py-20 bg-[#0D1B2A]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left: channels */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            viewport={{ once: true }}
          >
            <h2 className="font-['Playfair_Display'] text-3xl font-bold text-white mb-4">
              Canais de atendimento
            </h2>
            <p className="font-['DM_Sans'] text-white/45 text-sm leading-relaxed mb-8">
              Escolha a forma mais conveniente para você. Nossa equipe está pronta para atender.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {channels.map((c, i) => (
                <motion.a
                  key={i}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-5 bg-white/[0.03] border border-white/[0.07] rounded-2xl hover:border-white/15 hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <div className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center flex-shrink-0`}>
                    <c.icon size={18} strokeWidth={1.5} className={c.color} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-white/30 font-['DM_Sans'] uppercase tracking-widest mb-0.5">{c.title}</p>
                    <p className="text-sm font-semibold text-white font-['DM_Sans'] group-hover:text-[#00C9B1] transition-colors">{c.value}</p>
                    <p className="text-xs text-white/35 font-['DM_Sans']">{c.desc}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3 p-5 bg-[#00C9B1]/[0.04] border border-[#00C9B1]/20 rounded-2xl">
              <Clock size={18} strokeWidth={1.5} className="text-[#00C9B1] flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-white font-['DM_Sans']">Horário de atendimento</p>
                <p className="text-xs text-white/40 font-['DM_Sans']">Segunda a Sexta, das 9h às 18h (BRT)</p>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            viewport={{ once: true }}
            className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8"
          >
            {status === 'success' ? (
              <div className="text-center py-8">
                <CheckCircle2 size={56} strokeWidth={1} className="text-[#00C9B1] mx-auto mb-4" aria-hidden="true" />
                <h3 className="font-['Playfair_Display'] text-2xl font-bold text-white mb-2">Mensagem enviada!</h3>
                <p className="font-['DM_Sans'] text-white/50 text-sm mb-6">Retornaremos em até 24 horas. Obrigado!</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-sm text-[#00C9B1] font-semibold font-['DM_Sans'] hover:underline"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <h2 className="font-['Playfair_Display'] text-2xl font-bold text-white mb-6">Envie uma mensagem</h2>

                {status === 'error' && (
                  <div className="flex items-center gap-3 p-4 bg-[#FF6B47]/10 border border-[#FF6B47]/30 rounded-xl">
                    <AlertCircle size={16} strokeWidth={1.5} className="text-[#FF6B47] flex-shrink-0" aria-hidden="true" />
                    <p className="text-sm text-[#FF6B47] font-['DM_Sans']">Erro ao enviar. Tente pelo WhatsApp.</p>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-white/40 font-['DM_Sans'] uppercase tracking-widest mb-2">Nome *</label>
                    <input
                      {...register('name')}
                      placeholder="Seu nome completo"
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/25 text-sm font-['DM_Sans'] focus:outline-none focus:border-[#00C9B1]/50 focus:ring-2 focus:ring-[#00C9B1]/15 transition-all"
                    />
                    {errors.name && <p className="text-[#FF6B47] text-xs mt-1 font-['DM_Sans']">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/40 font-['DM_Sans'] uppercase tracking-widest mb-2">E-mail *</label>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="seu@email.com"
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/25 text-sm font-['DM_Sans'] focus:outline-none focus:border-[#00C9B1]/50 focus:ring-2 focus:ring-[#00C9B1]/15 transition-all"
                    />
                    {errors.email && <p className="text-[#FF6B47] text-xs mt-1 font-['DM_Sans']">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-white/40 font-['DM_Sans'] uppercase tracking-widest mb-2">WhatsApp</label>
                    <input
                      {...register('phone')}
                      placeholder="(13) 99999-9999"
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/25 text-sm font-['DM_Sans'] focus:outline-none focus:border-[#00C9B1]/50 focus:ring-2 focus:ring-[#00C9B1]/15 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/40 font-['DM_Sans'] uppercase tracking-widest mb-2">Assunto *</label>
                    <input
                      {...register('subject')}
                      placeholder="Como podemos ajudar?"
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/25 text-sm font-['DM_Sans'] focus:outline-none focus:border-[#00C9B1]/50 focus:ring-2 focus:ring-[#00C9B1]/15 transition-all"
                    />
                    {errors.subject && <p className="text-[#FF6B47] text-xs mt-1 font-['DM_Sans']">{errors.subject.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/40 font-['DM_Sans'] uppercase tracking-widest mb-2">Mensagem *</label>
                  <textarea
                    {...register('message')}
                    rows={5}
                    placeholder="Conte sobre seu projeto, necessidade ou dúvida..."
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/25 text-sm font-['DM_Sans'] focus:outline-none focus:border-[#00C9B1]/50 focus:ring-2 focus:ring-[#00C9B1]/15 transition-all resize-none"
                  />
                  {errors.message && <p className="text-[#FF6B47] text-xs mt-1 font-['DM_Sans']">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#00C9B1] to-[#0A7EA4] text-white py-4 rounded-xl font-semibold font-['DM_Sans'] text-sm shadow-[0_4px_24px_rgba(0,201,177,0.25)] hover:shadow-[0_8px_32px_rgba(0,201,177,0.4)] hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 transition-all duration-300"
                >
                  {status === 'loading' ? (
                    <><Loader2 size={18} strokeWidth={1.5} className="animate-spin" aria-hidden="true" />Enviando...</>
                  ) : (
                    <><Send size={18} strokeWidth={1.5} aria-hidden="true" />Enviar mensagem</>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
