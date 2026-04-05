import React, { FC } from 'react';
import { motion } from 'framer-motion';
import skills from '../../data/skills';
import SectionHeading from '../ui/SectionHeading';
import { fadeUp } from '../../lib/animations';

const skillStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const Skills: FC = () => {
  return (
    <section className="bg-zinc-900/40 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Skills" accent="Technical" id="my-skills" />

        <motion.div
          className="max-w-3xl mt-12 space-y-6"
          variants={skillStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={fadeUp}>
              <div className="flex items-baseline justify-between mb-2">
                <h4 className="text-zinc-200 font-medium text-sm">{skill.title}</h4>
                <span className="text-zinc-500 text-xs font-mono">{skill.value}%</span>
              </div>
              <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-accent rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
                />
              </div>
              <p className="text-zinc-500 text-xs mt-1.5">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
