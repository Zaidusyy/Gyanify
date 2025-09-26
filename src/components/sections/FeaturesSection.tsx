import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Globe, Volume2, RefreshCw, Accessibility } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const features = [
    {
      icon: Globe,
      title: 'Multi-language Support',
      description: '22+ Indian languages supported',
      details: 'Hindi, Bengali, Tamil, Telugu, Marathi, Gujarati, Kannada, Malayalam, Punjabi, and more'
    },
    {
      icon: Volume2,
      title: 'Native Voice Generation',
      description: 'Authentic local accents',
      details: 'AI-powered voiceovers that capture regional pronunciation and cultural nuances'
    },
    {
      icon: RefreshCw,
      title: 'Continuous Learning',
      description: 'AI feedback improvement loop',
      details: 'Machine learning models that continuously improve translation accuracy through user feedback'
    },
    {
      icon: Accessibility,
      title: 'Universal Accessibility',
      description: 'Inclusive design for all learners',
      details: 'Speech-to-text, text-to-speech, screen reader compatibility, and visual accessibility features'
    }
  ];

  return (
    <section className="py-20 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Cutting-edge capabilities designed to transform multilingual education accessibility
          </p>
        </motion.div>

        <div className="space-y-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="flex-1">
                <motion.div
                  className="w-24 h-24 bg-gradient-to-br from-violet-500 to-blue-500 rounded-2xl flex items-center justify-center mb-8 mx-auto lg:mx-0"
                  whileHover={{ scale: 1.1, rotate: 12 }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon className="w-12 h-12 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center lg:text-left">
                  {feature.title}
                </h3>
                
                <p className="text-lg text-violet-600 dark:text-violet-400 font-semibold mb-4 text-center lg:text-left">
                  {feature.description}
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-center lg:text-left">
                  {feature.details}
                </p>
              </div>

              <div className="flex-1">
                <motion.div
                  className="relative h-64 bg-gradient-to-br from-violet-100 to-blue-100 dark:from-violet-900/30 dark:to-blue-900/30 rounded-2xl flex items-center justify-center overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-blue-500/10" />
                  <motion.div
                    className="text-6xl opacity-20"
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <feature.icon className="w-16 h-16 text-violet-500" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;