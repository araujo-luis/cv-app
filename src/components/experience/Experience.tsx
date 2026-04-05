import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Certificate } from '@phosphor-icons/react';
import experiences from '../../data/experiences';
import education from '../../data/education';
import certifications from '../../data/certifications';
import SectionHeading from '../ui/SectionHeading';
import { staggerContainer, fadeUp } from '../../lib/animations';

interface TimelineItemProps {
  date: string;
  title: string;
  subtitle: string;
  location?: string;
  description?: string;
  tools?: string[];
  link?: { url: string; text: string };
}

const TimelineItem: FC<TimelineItemProps> = ({ date, title, subtitle, location, description, tools, link }) => (
  <motion.div
    variants={fadeUp}
    className="relative pl-8 pb-10 border-l border-zinc-800 last:pb-0"
  >
    <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-accent -translate-x-[5px]" />
    <span className="text-zinc-500 text-sm font-mono">{date}</span>
    <h3 className="text-zinc-100 font-semibold text-lg mt-1">{title}</h3>
    <p className="text-accent text-sm mt-0.5">{subtitle}</p>
    {location && <p className="text-zinc-500 text-sm">{location}</p>}
    {description && (
      <div
        className="text-zinc-400 text-sm leading-relaxed mt-3 [&_ul]:list-disc [&_ul]:pl-4 [&_ul]:space-y-1 [&_li]:text-zinc-400"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    )}
    {tools && tools.length > 0 && (
      <div className="flex flex-wrap gap-1.5 mt-3">
        {tools.map((tool, i) => (
          <span key={i} className="bg-zinc-800/60 text-zinc-300 text-xs px-2 py-1 rounded border border-zinc-700/40">
            {tool}
          </span>
        ))}
      </div>
    )}
    {link && link.url && (
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent text-sm mt-2 inline-block no-underline hover:text-accent-light transition-colors"
      >
        {link.text}
      </a>
    )}
  </motion.div>
);

const Experience: FC = () => {
  return (
    <section className="bg-zinc-950 py-24" id="events-section">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Resume" accent="Experience" id="my-resume" />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 mt-16">
          {/* Left — Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8 lg:sticky lg:top-24">
              <Briefcase size={22} className="text-accent" weight="duotone" />
              <h3 className="text-zinc-100 font-semibold text-xl">Work Experience</h3>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              {experiences.data.map((item) => (
                <TimelineItem
                  key={item.id}
                  date={`${item.fromDate} - ${item.toDate}`}
                  title={item.company}
                  subtitle={item.position}
                  location={item.location}
                  description={item.description}
                  tools={item.tools}
                />
              ))}
            </motion.div>
          </div>

          {/* Right — Education & Certifications */}
          <div className="space-y-16">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap size={22} className="text-accent" weight="duotone" />
                <h3 className="text-zinc-100 font-semibold text-xl">Education</h3>
              </div>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
              >
                {education.data.map((item) => (
                  <TimelineItem
                    key={item.id}
                    date={`${item.dateFrom} - ${item.dateTo}`}
                    title={item.degreeTitle}
                    subtitle={item.universityName}
                    description={item.description}
                  />
                ))}
              </motion.div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <Certificate size={22} className="text-accent" weight="duotone" />
                <h3 className="text-zinc-100 font-semibold text-xl">Certifications</h3>
              </div>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
              >
                {certifications.data.map((item) => (
                  <TimelineItem
                    key={item.id}
                    date={item.dateFrom}
                    title={item.degreeTitle}
                    subtitle={item.universityName}
                    link={item.url ? { url: item.url, text: 'See credential' } : undefined}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
