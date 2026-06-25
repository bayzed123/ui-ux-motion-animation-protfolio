import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:bayezid@example.com',
      color: 'hover:text-cyan-400',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: '#',
      color: 'hover:text-blue-400',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: '#',
      color: 'hover:text-gray-300',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: '#',
      color: 'hover:text-sky-400',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />
      </div>

      <motion.div
        ref={ref}
        className="max-w-4xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Section title */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">Let's </span>
            <span className="bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12" variants={containerVariants}>
          <motion.div
            className="glass p-8 rounded-lg text-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-xl font-bold text-white mb-2">Professional Inquiries</h3>
            <p className="text-gray-400 mb-4">
              Interested in collaborating on projects or discussing business opportunities?
            </p>
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold">
              Get in Touch
            </Button>
          </motion.div>

          <motion.div
            className="glass p-8 rounded-lg text-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-white mb-2">Let's Build Together</h3>
            <p className="text-gray-400 mb-4">
              Have an idea? Let's collaborate and create something amazing!
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
              Start a Project
            </Button>
          </motion.div>
        </motion.div>

        {/* Social links */}
        <motion.div className="flex justify-center gap-6" variants={containerVariants}>
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                className={`p-4 glass rounded-lg text-gray-300 transition-all ${link.color}`}
                variants={itemVariants}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Footer note */}
        <motion.p
          className="text-center text-gray-500 text-sm mt-12"
          variants={itemVariants}
        >
          © 2026 Sayad Md Bayezid Hosan. All rights reserved. Built with passion and modern web technologies.
        </motion.p>
      </motion.div>
    </section>
  );
}
