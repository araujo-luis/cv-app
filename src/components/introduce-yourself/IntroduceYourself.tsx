import React, { FC } from "react";
import { motion } from "framer-motion";
import { DownloadSimple } from "@phosphor-icons/react";
import TextScramble from "../ui/TextScramble";
import SocialIcons from "./SocialIcons";
import {
  staggerContainer,
  fadeUp,
  springTransition,
} from "../../lib/animations";
import heroPhoto from "../../assets/images/banner-bg.jpg";

const techPills = [
  "Claude Code",
  "Java",
  "Spring Boot",
  "TypeScript",
  "Node.js",
  "Rust",
  "AWS",
  "Docker",
  "MongoDB",
  "DynamoDB",
  "React",
  "Distributed Systems",
];

const IntroduceYourself: FC = () => {
  return (
    <section
      id="top"
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
    >
      {/* Photo — editorial right-aligned, large and atmospheric */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      >
        {/* Desktop: flipped */}
        <img
          src={heroPhoto}
          alt=""
          aria-hidden="true"
          className="hidden lg:block absolute inset-0 w-full h-full object-cover -scale-x-100"
          style={{
            filter: "saturate(0.35) brightness(0.55) contrast(1.1)",
            objectPosition: "90% 65%",
          }}
        />
        {/* Mobile: not flipped, face centered */}
        <img
          src={heroPhoto}
          alt=""
          aria-hidden="true"
          className="lg:hidden absolute inset-0 w-full h-full object-cover"
          style={{
            filter: "saturate(0.35) brightness(0.55) contrast(1.1)",
            objectPosition: "30% 25%",
          }}
        />
        {/* Gradient mask: desktop — fades left for text */}
        <div
          className="hidden lg:block absolute inset-0"
          style={{
            background: `
              linear-gradient(to right, rgb(9,9,11) 0%, rgb(9,9,11) 25%, rgba(9,9,11,0.65) 45%, rgba(9,9,11,0.2) 65%, rgba(9,9,11,0.3) 100%),
              linear-gradient(to bottom, rgba(9,9,11,0.4) 0%, transparent 25%, transparent 65%, rgb(9,9,11) 95%)
            `,
          }}
        />
        {/* Gradient mask: mobile — fades right to keep face visible on left */}
        <div
          className="lg:hidden absolute inset-0"
          style={{
            background: `
              linear-gradient(to left, rgb(9,9,11) 0%, rgba(9,9,11,0.7) 30%, rgba(9,9,11,0.2) 55%, rgba(9,9,11,0.3) 100%),
              linear-gradient(to bottom, rgba(9,9,11,0.3) 0%, transparent 20%, transparent 55%, rgb(9,9,11) 85%)
            `,
          }}
        />
      </motion.div>

      {/* Layer 3: Overall edge vignette — ensures seamless blend on all sides */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: `
            radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, rgba(9,9,11,0.6) 65%, rgb(9,9,11) 90%),
            linear-gradient(to bottom, rgb(9,9,11) 0%, transparent 8%, transparent 90%, rgb(9,9,11) 100%)
          `,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
          {/* Left — Name & CTA */}
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

            <motion.div variants={fadeUp} className="mb-6">
              <TextScramble
                texts={[
                  "Building robust backend systems",
                  "Crafting cloud-native solutions",
                  "Engineering distributed architectures",
                  "Driving agentic development with AI",
                ]}
                className="text-lg md:text-xl text-zinc-400 font-light"
                intervalMs={3500}
              />
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-zinc-500 leading-relaxed max-w-[50ch] mb-8 text-sm"
            >
              Over ten years across Media, Education, Banking, and Healthcare.
              Specialized in backend development and cloud-native architectures
              using Node.js, Spring Boot, and Rust. AWS Certified Developer.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex items-center gap-6 mb-8"
            >
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

            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              {techPills.map((tech) => (
                <span
                  key={tech}
                  className="bg-zinc-800/40 text-zinc-400 text-xs px-3 py-1.5 rounded-md border border-zinc-700/30 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — empty, the photo background fills this space */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

export default IntroduceYourself;
