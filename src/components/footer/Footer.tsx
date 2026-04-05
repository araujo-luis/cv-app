import React, { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/50 py-8">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <span className="text-zinc-500 text-sm">
          Luis Araujo {new Date().getFullYear()}
        </span>
        <span className="text-zinc-600 text-xs">
          Stockholm, Sweden
        </span>
      </div>
    </footer>
  );
};

export default Footer;
