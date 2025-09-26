import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Clock, Globe, TrendingUp } from 'lucide-react';

const ImpactSection: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [counters, setCounters] = useState({
    students: 0,
    time: 0,
    languages: 0,
    efficiency: 0
  });

  const targetValues = {
    students: 500000,
    time: 80,
    languages: 22,
    efficiency: 95
  };

  useEffect(() => {
    if (inView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepTime = duration / steps;

      Object.keys(targetValues).forEach((key) => {
        const target = targetValues[key as keyof typeof targetValues];
        const increment = target / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters(prev => ({
            ...prev,
            [key]: Math.floor(current)
          }));
        }, stepTime);
      });
    }
  }, [inView]);

  const impacts = [
    {
      icon: Users,
      value: counters.students,
      label: 'Students Reached',
      suffix: '+',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Clock,
      value: counters.time,
      label: 'Time Saved',
      suffix: '%',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe,
      value: counters.languages,
      label: 'Languages Supported',
      suffix: '+',
      color: 'from-violet-500 to-purple-500'
    },
    {
      icon: TrendingUp,
      value: counters.efficiency,
      label: 'Translation Accuracy',
      suffix: '%',
      color: 'from-orange-500 to-red-500'
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
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent mb-6">
            Global Impact
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transforming education accessibility and bridging the digital divide across linguistic communities
          </p>
        </motion.div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              className="group text-center p-6 bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${impact.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                <impact.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className={`text-3xl lg:text-4xl font-bold bg-gradient-to-r ${impact.color} bg-clip-text text-transparent mb-2`}>
                {impact.value.toLocaleString()}{impact.suffix}
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 font-medium">
                {impact.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Impact Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Inclusive Learning',
              description: 'Empowering rural and regional students with content in their native languages',
              icon: '🌍'
            },
            {
              title: 'Cost Reduction',
              description: 'Reducing localization costs by 80% compared to traditional translation methods',
              icon: '💰'
            },
            {
              title: 'Digital Equity',
              description: 'Bridging the digital education gap across linguistic and geographic boundaries',
              icon: '🚀'
            }
          ].map((highlight, index) => (
            <motion.div
              key={index}
              className="text-center p-8 bg-gradient-to-br from-white/10 to-white/5 dark:from-white/5 dark:to-white/2 backdrop-blur-md rounded-2xl border border-white/20 dark:border-white/10"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-4xl mb-4">{highlight.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                {highlight.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;