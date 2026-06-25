import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    category: 'Web Development',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'Next.js'],
    color: 'from-cyan-400 to-blue-400',
  },
  {
    category: 'AI & Automation',
    skills: ['Claude AI', 'LLM Integration', 'Prompt Engineering', 'AI Workflows', 'Automation Scripts'],
    color: 'from-purple-400 to-pink-400',
  },
  {
    category: 'Design & UX',
    skills: ['UI/UX Design', 'Figma', 'Framer Motion', 'Web Design', 'Brand Design'],
    color: 'from-orange-400 to-red-400',
  },
  {
    category: 'Backend & Infrastructure',
    skills: ['Database Design', 'API Development', 'Cloud Services', 'Security', 'DevOps'],
    color: 'from-green-400 to-emerald-400',
  },
];

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-black/50 relative overflow-hidden">
      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">Skills & </span>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.category}
              className="glass p-8 rounded-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-gray-300 hover:bg-white/20 hover:border-white/40 transition-all cursor-default"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional info */}
        <motion.div
          className="mt-16 glass p-8 rounded-lg"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Core Competencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-cyan-400 font-semibold mb-2">Policy & Compliance</h4>
              <p className="text-gray-400 text-sm">
                Expert in privacy regulations, data protection, and compliance frameworks. Ensuring all solutions meet industry standards.
              </p>
            </div>
            <div>
              <h4 className="text-orange-400 font-semibold mb-2">Technical Excellence</h4>
              <p className="text-gray-400 text-sm">
                Building scalable, secure, and efficient digital infrastructures. Focus on clean code and best practices.
              </p>
            </div>
            <div>
              <h4 className="text-purple-400 font-semibold mb-2">Innovation & Creativity</h4>
              <p className="text-gray-400 text-sm">
                Leveraging AI and modern technologies to create innovative solutions. Always pushing boundaries.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
