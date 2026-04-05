import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { DownloadSimple } from '@phosphor-icons/react';
import TextScramble from '../ui/TextScramble';
import SocialIcons from './SocialIcons';
import { staggerContainer, fadeUp, springTransition } from '../../lib/animations';

const techPills = [
  'TypeScript', 'Node.js', 'Spring Boot', 'Rust', 'AWS',
  'Docker', 'MongoDB', 'DynamoDB', 'React', 'Distributed Systems',
];

const IntroduceYourself: FC = () => {
  return (
    <section id="top" className="min-h-[100dvh] flex items-center bg-zinc-950 pt-16">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center">
          {/* Left */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={fadeUp}
              className="text-accent font-mono text-sm tracking-widest uppercase mb-6"
            >
              Software Engineer
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-[clamp(2.5rem,5vw,5rem)] font-bold text-zinc-100 tracking-tighter leading-none mb-4"
            >
              Luis Araujo
            </motion.h1>

            <motion.div variants={fadeUp} className="mb-8">
              <TextScramble
                texts={[
                  'Building robust backend systems',
                  'Crafting cloud-native solutions',
                  'Engineering distributed architectures',
                ]}
                className="text-lg md:text-xl text-zinc-500 font-light"
                intervalMs={3500}
              />
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-6">
              <motion.a
                href="https://cv-luis-araujo.s3.amazonaws.com/cv-luis-araujo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-zinc-950 font-semibold text-sm px-6 py-3 rounded-lg no-underline transition-colors duration-200"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={springTransition}
              >
                <DownloadSimple size={18} weight="bold" />
                Download CV
              </motion.a>
              <SocialIcons />
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:border-l lg:border-zinc-800 lg:pl-16"
          >
            <motion.p variants={fadeUp} className="text-zinc-400 leading-relaxed mb-4 max-w-[55ch]">
              Software Engineer with over six years across Media, Education, Banking, and Healthcare.
              Specialized in backend development and cloud-native architectures using Node.js,
              Spring Boot, and Rust. AWS Certified Developer.
            </motion.p>

            <motion.p variants={fadeUp} className="text-zinc-500 leading-relaxed mb-8 max-w-[55ch]">
              Energized by new challenges, committed to clean code and active participation
              across the full software development lifecycle.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              {techPills.map((tech) => (
                <span
                  key={tech}
                  className="bg-zinc-800/60 text-zinc-300 text-xs px-3 py-1.5 rounded-md border border-zinc-700/40"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroduceYourself;
