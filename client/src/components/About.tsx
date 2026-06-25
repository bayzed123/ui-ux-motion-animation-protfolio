import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
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

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black/50 to-black/80 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663777727529/JLyoeSugmsQwJFM9X8uCsC/abstract-pattern-96eqRN8GRAfXugaCiL75Eh.webp"
          alt="pattern"
          className="w-full h-full object-cover"
        />
      </div>

      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Section title */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">About </span>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-orange-400 rounded-full" />
        </motion.div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text */}
          <motion.div className="space-y-6" variants={containerVariants}>
            <motion.p className="text-lg text-gray-300 leading-relaxed" variants={itemVariants}>
              I'm <span className="text-cyan-400 font-semibold">Sayad Md Bayezid Hosan</span>, a technology entrepreneur and digital content creator based in Bangladesh. I specialize in integrating AI and modern web design to build efficient, scalable digital infrastructures.
            </motion.p>

            <motion.p className="text-lg text-gray-300 leading-relaxed" variants={itemVariants}>
              Currently a final-year undergraduate student in the Department of English at Northern University Bangladesh (Expected Graduation: June 2026), I've founded digital brands such as <span className="text-orange-400 font-semibold">Connect With Bayezid</span> and <span className="text-purple-400 font-semibold">GenZ Frontier</span>.
            </motion.p>

            <motion.p className="text-lg text-gray-300 leading-relaxed" variants={itemVariants}>
              As a professional within the digital ecosystem, I operate as a Technical Expert with a core focus on <span className="text-cyan-400 font-semibold">policy compliance, privacy, and transparency</span>. I specialize in providing permission-based technical solutions and managing digital business assets with high integrity.
            </motion.p>

            {/* Stats */}
            <motion.div className="grid grid-cols-3 gap-4 pt-8" variants={containerVariants}>
              <motion.div
                className="glass p-4 rounded-lg text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-cyan-400">5+</div>
                <div className="text-sm text-gray-400 mt-2">Digital Brands</div>
              </motion.div>
              <motion.div
                className="glass p-4 rounded-lg text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-orange-400">50+</div>
                <div className="text-sm text-gray-400 mt-2">Projects Delivered</div>
              </motion.div>
              <motion.div
                className="glass p-4 rounded-lg text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-purple-400">100%</div>
                <div className="text-sm text-gray-400 mt-2">Client Satisfaction</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right column - Visual */}
          <motion.div
            className="relative"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="glass p-8 rounded-lg overflow-hidden">
              <div className="relative w-full aspect-square bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-orange-500/20 rounded-lg flex items-center justify-center">
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-orange-500/10"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                />

                {/* Content */}
                <div className="relative z-10 text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <p className="text-gray-300 text-lg font-semibold">
                    Building the Future
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    One digital solution at a time
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-24 h-24 bg-orange-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
