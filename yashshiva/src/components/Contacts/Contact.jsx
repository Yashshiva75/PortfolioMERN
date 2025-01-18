import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_CONTENT } from '../../constants';
import { RiGithubFill, RiLinkedinFill, RiInstagramFill,RiGoogleFill } from '@remixicon/react'; 

const Contact = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay },
    }),
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (delay = 0) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut', delay },
    }),
  };

  return (
    <section className="min-h-screen flex flex-col justify-center px-4 md:px-10" id="contact">
      <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">Contact</h2>
      <div className="h-1 w-20 bg-white mb-8"></div>

      {/* Fix: Added correct motion props */}
      <motion.h3
        className="text-6xl md:text-8xl leading-none"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={0.4}
        variants={textVariants}
      >
        {CONTACT_CONTENT.headline}
      </motion.h3>

      <motion.p
        className="text-lg md:text-2xl mt-6 max-w-3xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={0.6}
        variants={textVariants}
      >
        {CONTACT_CONTENT.description}
      </motion.p>

      <motion.a
        href={`mailto:${CONTACT_CONTENT.email}`}
        className="text-2xl md:text-3xl font-medium mt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={0.8}
        variants={textVariants}
      >
        {CONTACT_CONTENT.email}
        <br />
        <span className='font-light text-lg'>{CONTACT_CONTENT.phone}</span>
      </motion.a>

      <div className="flex space-x-6 mt-8">
        {CONTACT_CONTENT.socialLinks.map((link, index) => {
          const Icon =
            link.icon === 'RiInstagramFill'
              ? RiInstagramFill
              : link.icon === 'RiGithubFill'
              ? RiGithubFill
              : link.icon === 'RiLinkedinFill'
              ? RiLinkedinFill
              : RiGoogleFill;

          return (
            <motion.a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              aria-label={link.ariaLabel} // Fix: Remove curly braces around aria-label
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={1.0 + index * 0.2}
              variants={iconVariants}
            >
              <Icon size={36} />
            </motion.a>
          );
        })}
      </div>

      <motion.p
        className="text-sm text-stone-400 mt-36"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={1.6}
        variants={textVariants}
      >
        {CONTACT_CONTENT.footerText}
      </motion.p>
    </section>
  );
};

export default Contact;
