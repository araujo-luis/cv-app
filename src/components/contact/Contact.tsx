import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { Envelope, MapPin, ArrowRight } from '@phosphor-icons/react';
import SocialIcons from '../introduce-yourself/SocialIcons';
import { staggerContainer, fadeUp, springTransition } from '../../lib/animations';

const Contact: FC = () => {
  return (
    <section className="py-16 border-t border-zinc-800/50" id="contact-me">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* Left — heading + CTA */}
          <motion.div variants={fadeUp} className="space-y-4">
            <p className="text-accent font-mono text-sm tracking-widest uppercase">
              Contact
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight">
              Let's talk
            </h2>
            <p className="text-zinc-500 text-sm max-w-[45ch]">
              Open to conversations about backend engineering, distributed
              systems, and agentic development.
            </p>
            <motion.a
              href="mailto:araujoluis358@gmail.com"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-zinc-950 font-semibold text-sm px-6 py-3 rounded-lg no-underline transition-colors duration-200 mt-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={springTransition}
            >
              <Envelope size={18} weight="bold" />
              Send me an email
              <ArrowRight size={16} weight="bold" />
            </motion.a>
          </motion.div>

          {/* Right — details + socials */}
          <motion.div variants={fadeUp} className="space-y-5">
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-zinc-500" weight="duotone" />
              <span className="text-zinc-400 text-sm">Stockholm, Sweden</span>
            </div>
            <div className="flex items-center gap-3">
              <Envelope size={18} className="text-zinc-500" weight="duotone" />
              <a
                href="mailto:araujoluis358@gmail.com"
                className="text-zinc-400 hover:text-accent text-sm no-underline transition-colors"
              >
                araujoluis358@gmail.com
              </a>
            </div>
            <div className="pt-1">
              <p className="text-zinc-600 text-xs mb-2">Find me on</p>
              <SocialIcons />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
