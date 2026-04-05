import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../../lib/animations';

interface SectionHeadingProps {
  title: string;
  accent?: string;
  id?: string;
}

const SectionHeading: FC<SectionHeadingProps> = ({ title, accent, id }) => {
  return (
    <motion.div
      id={id}
      className="mb-12 pt-8"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-8 h-px bg-accent" />
        {accent && (
          <span className="text-accent text-sm font-mono tracking-widest uppercase">
            {accent}
          </span>
        )}
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight">
        {title}
      </h2>
    </motion.div>
  );
};

export default SectionHeading;
