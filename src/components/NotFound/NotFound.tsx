import React, { FC } from 'react';
import { motion } from 'framer-motion';

const NotFound: FC = () => {
  return (
    <div className="min-h-[100dvh] flex items-center justify-center bg-zinc-950">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <h1 className="text-8xl font-bold text-zinc-800 mb-4">404</h1>
        <p className="text-zinc-400 text-lg mb-8">Page not found</p>
        <a
          href="/"
          className="text-accent hover:text-accent-light text-sm no-underline transition-colors"
        >
          Back to luisaraujo.io
        </a>
      </motion.div>
    </div>
  );
};

export default NotFound;
