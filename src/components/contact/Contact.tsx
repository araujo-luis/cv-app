import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { Envelope, MapPin } from '@phosphor-icons/react';
import MapContainer from './MapContainer';
import SocialIcons from '../introduce-yourself/SocialIcons';
import SectionHeading from '../ui/SectionHeading';
import { staggerContainer, fadeUp } from '../../lib/animations';

const Contact: FC = () => {
  const defaultProps = {
    center: { lat: 59.3293, lng: 18.0686 },
    zoom: 11,
  };

  return (
    <section className="bg-zinc-900/40 py-24 border-t border-zinc-800/50" id="contact-me">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Get in Touch" accent="Contact" />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.div variants={fadeUp} className="space-y-6">
            <div className="flex items-center gap-3">
              <Envelope size={20} className="text-accent" weight="duotone" />
              <a
                href="mailto:araujoluis358@gmail.com"
                className="text-accent hover:text-accent-light text-base no-underline transition-colors"
              >
                araujoluis358@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={20} className="text-zinc-400" weight="duotone" />
              <span className="text-zinc-400 text-base">Stockholm, Sweden</span>
            </div>

            <div className="pt-4">
              <p className="text-zinc-500 text-sm mb-3">Find me on</p>
              <SocialIcons />
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="rounded-xl overflow-hidden border border-zinc-800">
            <MapContainer center={defaultProps.center} zoom={defaultProps.zoom} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
