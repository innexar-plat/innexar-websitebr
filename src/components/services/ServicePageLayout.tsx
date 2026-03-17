'use client';

import { motion } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import type { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

export type FeatureItem = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

export type PlanItem = {
  name: string;
  price: string;
  desc: string;
  features: string[];
  cta: string;
  highlight: boolean;
};

type ServicePageLayoutProps = {
  badge: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
  features: FeatureItem[];
  plans: PlanItem[];
};

export default function ServicePageLayout({
  badge,
  icon: Icon,
  title,
  subtitle,
  description,
  gradient,
  features,
  plans,
}: ServicePageLayoutProps) {
  return (
    <>
      <section
        className={`relative py-20 md:py-28 overflow-hidden bg-gradient-to-br ${gradient}`}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-white"
          >
            <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase mb-6">
              <Icon className="w-4 h-4" />
              {badge}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              {title}{' '}
              <span className="block md:inline">{subtitle}</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-12">
            O que oferecemos
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((item, i) => {
              const F = item.icon;
              return (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="p-6 rounded-xl bg-slate-800/80 border border-slate-700/50"
                >
                  <F className="w-10 h-10 text-[#00C9B1] mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-sm">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-12">
            Opções de investimento
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  plan.highlight
                    ? 'bg-[#00C9B1]/15 border-2 border-[#00C9B1]/50'
                    : 'bg-slate-800/80 border border-slate-700/50'
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00C9B1] text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
                    Recomendado
                  </span>
                )}
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <p className="mt-2 text-2xl font-semibold text-[#00C9B1]">
                  {plan.price}
                </p>
                <p className="mt-2 text-slate-400 text-sm">{plan.desc}</p>
                <ul className="mt-6 space-y-2">
                  {plan.features.map((f, j) => (
                    <li key={j} className="text-slate-300 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00C9B1]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.cta}
                  className="mt-8 inline-flex items-center gap-2 bg-[#00C9B1] hover:bg-[#00C9B1]/90 text-slate-900 font-semibold px-6 py-3 rounded-xl transition-colors"
                >
                  Saiba mais
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
