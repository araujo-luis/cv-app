import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { LinkedinLogo, GithubLogo } from '@phosphor-icons/react';

const socials = [
  { href: 'https://www.linkedin.com/in/araujo-luis-hn/', icon: LinkedinLogo, label: 'LinkedIn' },
  { href: 'https://github.com/araujo-luis', icon: GithubLogo, label: 'GitHub' },
];

const SocialIcons: FC = () => {
  return (
    <div className="flex items-center gap-4">
      {socials.map(({ href, icon: Icon, label }) => (
        <motion.a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-zinc-400 hover:text-accent transition-colors duration-200 no-underline"
          whileHover={{ scale: 1.15 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <Icon size={24} weight="regular" />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialIcons;
