import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../../lib/animations';
import heroVideo from '../../assets/images/Developer_Workspace_Video_Generation.mp4';

const VideoDivider: FC = () => {
  return (
    <section className="relative h-[45vh] overflow-hidden">
      {/* Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'saturate(0.3) brightness(0.45) contrast(1.1)' }}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Top and bottom gradient masks — dissolve into zinc-950 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(to bottom, rgb(9,9,11) 0%, transparent 25%, transparent 75%, rgb(9,9,11) 100%),
            radial-gradient(ellipse 100% 100% at 50% 50%, transparent 20%, rgba(9,9,11,0.4) 60%, rgb(9,9,11) 95%)
          `,
        }}
      />

      {/* Centered tagline */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <motion.p
          className="text-zinc-300 text-lg md:text-2xl font-light tracking-wide text-center max-w-[40ch]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Committed to clean code and
          <span className="text-accent font-medium"> engineering excellence</span>
        </motion.p>
      </div>
    </section>
  );
};

export default VideoDivider;
