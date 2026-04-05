import React, { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X } from '@phosphor-icons/react';

const navLinks = [
  { label: 'Resume', href: '#my-resume' },
  { label: 'Skills', href: '#my-skills' },
  { label: 'Portfolio', href: '#my-portfolio' },
  { label: 'Contact', href: '#contact-me' },
];

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const Navigation: FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-zinc-950/60 border-b border-zinc-800/50">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <motion.a
          href="#top"
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-zinc-100 font-bold text-lg tracking-tight no-underline"
          whileHover={{ scale: 1.02 }}
        >
          Luis Araujo
        </motion.a>

        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className="text-zinc-400 hover:text-accent text-sm tracking-wide no-underline transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-zinc-300 hover:text-zinc-100 bg-transparent border-none cursor-pointer p-1"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="md:hidden overflow-hidden bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800/50"
          >
            <ul className="flex flex-col gap-1 px-6 py-4 list-none m-0">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                      setMobileOpen(false);
                    }}
                    className="block py-3 text-zinc-300 hover:text-accent text-base no-underline transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;
