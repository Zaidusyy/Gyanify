import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Smartphone, Cpu, Cloud, Mic } from 'lucide-react';

const TechnicalSection: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const techStack = [
    { name: 'Django', icon: Code, color: 'from-green-500 to-emerald-500' },
    { name: 'Flutter', icon: Smartphone, color: 'from-blue-500 to-cyan-500' },
    { name: 'MERN Stack', icon: Database, color: 'from-yellow-500 to-orange-500' },
    { name: 'Whisper AI', icon: Mic, color: 'from-purple-500 to-violet-500' },
    { name: 'IndicTrans', icon: Code, color: 'from-indigo-500 to-blue-500' },
    { name: 'Firebase', icon: Cloud, color: 'from-red-500 to-pink-500' },
    { name: 'OpenAI/Gemini', icon: Cpu, color: 'from-teal-500 to-cyan-500' },
    { name: 'n8n Automation', icon: Database, color: 'from-violet-500 to-purple-500' }
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
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent mb-6">
            Technical Architecture
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Built on a robust, scalable technology stack designed for enterprise-grade performance
          </p>
        </motion.div>

        {/* Data Flow Diagram */}
        <motion.div
          className="mb-16 p-8 bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl border border-white/20 dark:border-white/10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            AI Processing Pipeline
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-4">
            {['Content Input', 'Language Detection', 'AI Translation', 'Quality Check', 'Voice Generation', 'Final Output'].map((step, index) => (
              <React.Fragment key={step}>
                <motion.div
                  className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white rounded-full font-semibold whitespace-nowrap"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {step}
                </motion.div>
                {index < 5 && (
                  <motion.div
                    className="w-8 h-0.5 bg-gradient-to-r from-indigo-300 to-cyan-300 hidden sm:block"
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="group relative p-6 bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 text-center"
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, rotateX: 5, scale: 1.05 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
              
              <div className="relative">
                <div className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="font-bold text-gray-800 dark:text-white text-sm">
                  {tech.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration Preview */}
        <motion.div
          className="mt-16 p-8 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 rounded-2xl border border-indigo-200 dark:border-indigo-800"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Enterprise Integration Ready
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              RESTful APIs, SDKs, and webhook support for seamless integration with existing learning platforms
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['REST API', 'GraphQL', 'Webhooks', 'SDK Support', 'OAuth 2.0'].map((feature, index) => (
                <motion.span
                  key={feature}
                  className="px-4 py-2 bg-white/20 dark:bg-white/10 rounded-full text-sm font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                >
                  {feature}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalSection;