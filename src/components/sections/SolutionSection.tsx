import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, BookOpen, CheckCircle, Smartphone } from 'lucide-react';

const SolutionSection: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const solutions = [
    {
      icon: Brain,
      title: 'AI-Powered Translation & Dubbing',
      description: 'Advanced AI models translate text, audio, and video content with contextual accuracy and cultural sensitivity.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BookOpen,
      title: 'Domain-Specific Glossary',
      description: 'Specialized terminology databases ensure technical accuracy across different industries and subjects.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: CheckCircle,
      title: 'Human-in-Loop Validation',
      description: 'Expert trainers review and approve translations, maintaining quality while scaling efficiently.',
      color: 'from-violet-500 to-purple-500'
    },
    {
      icon: Smartphone,
      title: 'Seamless LMS Integration',
      description: 'Direct integration with learning management systems and mobile apps for instant deployment.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-20 px-6 bg-white/5 dark:bg-black/10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent mb-6">
            Our Innovative Solution
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive AI-driven platform that revolutionizes multilingual content localization for global education
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="group relative p-8 bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative">
                <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                  {solution.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {solution.description}
                </p>
              </div>

              <motion.div
                className={`absolute -right-16 -top-16 w-32 h-32 bg-gradient-to-br ${solution.color} rounded-full opacity-0 group-hover:opacity-20 blur-2xl`}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;