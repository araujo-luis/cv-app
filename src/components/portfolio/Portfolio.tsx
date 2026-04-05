import React, { FC } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';
import portfolio from '../../data/portfolio';
import SectionHeading from '../ui/SectionHeading';
import { staggerContainer, fadeUp } from '../../lib/animations';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

const TiltCard: FC<TiltCardProps> = ({ children, className = '' }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-150, 150], [5, -5]);
  const rotateY = useTransform(x, [-150, 150], [-5, 5]);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Portfolio: FC = () => {
  return (
    <section className="bg-zinc-950 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Portfolio" accent="Projects" id="my-portfolio" />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {portfolio.data.map((item, index) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              className={index === 0 ? 'md:col-span-2' : ''}
            >
              <TiltCard>
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 h-full flex flex-col hover:border-zinc-700 transition-colors duration-300 hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.1)]">
                  <h3 className="text-zinc-100 font-semibold text-lg mb-3">{item.title}</h3>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.tools.map((tool, i) => (
                      <span key={i} className="bg-zinc-800/60 text-zinc-300 text-xs px-2 py-1 rounded border border-zinc-700/40">
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div
                    className="text-zinc-400 text-sm leading-relaxed flex-grow [&_p]:mb-2"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />

                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-accent text-sm mt-4 no-underline hover:text-accent-light transition-colors group"
                    >
                      View project
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
