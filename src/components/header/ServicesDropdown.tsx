'use client';

import { useState, useRef, useEffect } from 'react';
import { Link } from '@/i18n/navigation';
import { ChevronDown } from 'lucide-react';

export type ServiceItem = { key: string; href: string; label: string };

type ServicesDropdownProps = {
  triggerLabel: string;
  items: ServiceItem[];
};

export function ServicesDropdown({ triggerLabel, items }: ServicesDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1 px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-white hover:bg-white/10 rounded-lg border-0 bg-transparent cursor-pointer"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {triggerLabel}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div
          className="absolute left-0 top-full mt-1 w-56 rounded-lg border border-zinc-700 bg-zinc-900 py-1 shadow-xl z-50"
          role="menu"
        >
          <div className="px-3 py-2 text-xs font-medium text-slate-400 border-b border-zinc-700">
            {triggerLabel}
          </div>
          {items.map((svc) => (
            <Link
              key={svc.key}
              href={svc.href}
              role="menuitem"
              className="block px-3 py-2 text-sm text-slate-200 hover:bg-zinc-800 hover:text-white"
              onClick={() => setOpen(false)}
            >
              {svc.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
