import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCard {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  color: string;
}

const projects: ProjectCard[] = [
  {
    id: 1,
    title: 'Connect With Bayezid',
    description: 'A digital platform connecting entrepreneurs and tech enthusiasts. Built with modern web technologies and AI-powered features.',
    tags: ['React', 'AI', 'Web Design'],
    link: '#',
    color: 'from-cyan-400 to-blue-400',
  },
  {
    id: 2,
    title: 'GenZ Frontier',
    description: 'Digital brand and content platform targeting Gen Z audience. Features interactive content and community engagement tools.',
    tags: ['Content Platform', 'Community', 'Digital Marketing'],
    link: '#',
    color: 'from-purple-400 to-pink-400',
  },
  {
    id: 3,
    title: 'SmartGen QR Code Generator',
    description: 'Advanced QR code generation utility with AI-powered customization. Create dynamic, branded QR codes with ease.',
    tags: ['Utility App', 'AI', 'QR Codes'],
    link: '#',
    github: '#',
    color: 'from-orange-400 to-red-400',
  },
  {
    id: 4,
    title: 'Digital Infrastructure Solutions',
    description: 'Scalable backend systems and APIs for enterprise clients. Focus on security, performance, and compliance.',
    tags: ['Backend', 'APIs', 'Infrastructure'],
    link: '#',
    color: 'from-green-400 to-emerald-400',
  },
];

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none" />

      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">Featured </span>
            <span className="bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-orange-400 rounded-full" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="group glass rounded-lg overflow-hidden hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div
                className={`h-40 bg-gradient-to-br ${project.color} opacity-20 relative overflow-hidden`}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{
                    x: [-1000, 1000],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30 hover:bg-cyan-500/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                    >
                      View Project
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors text-sm font-medium"
                    >
                      GitHub
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
