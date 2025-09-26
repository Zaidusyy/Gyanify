import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Mail, Linkedin, Trophy, ExternalLink } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const socialLinks = [
    { icon: Github, label: 'GitHub Repository', href: '#', color: 'hover:text-gray-800 dark:hover:text-white' },
    { icon: Mail, label: 'Contact Email', href: '#', color: 'hover:text-blue-500' },
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:text-blue-600' },
    { icon: Trophy, label: 'SIH 2025', href: '#', color: 'hover:text-yellow-500' }
  ];

  return (
    <section className="py-20 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to revolutionize multilingual education? Get in touch with Team Binary DNF
          </p>
        </motion.div>

        <motion.div
          className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl border border-white/20 dark:border-white/10 p-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Join Our Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Help us break down language barriers and make quality education accessible to everyone, everywhere.
              </p>
              
              <div className="space-y-3">
                {[
                  'Contribute to our open-source project',
                  'Partner with us for implementation',
                  'Provide feedback and suggestions',
                  'Join our community of educators and developers'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full" />
                    <span className="text-gray-600 dark:text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <motion.div
                className="inline-block p-8 bg-gradient-to-br from-violet-500/10 to-blue-500/10 rounded-2xl border border-violet-200 dark:border-violet-800 mb-6"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Trophy className="w-16 h-16 text-violet-500 mx-auto mb-4" />
                <div className="text-lg font-bold text-gray-800 dark:text-white">
                  Smart India Hackathon 2025
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Competing for Innovation
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className={`group flex items-center gap-3 px-6 py-3 bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-full border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 ${link.color}`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <link.icon className="w-5 h-5" />
              <span className="font-medium">{link.label}</span>
              <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-gray-500 dark:text-gray-400">
            © 2025 Team Binary DNF. Built with ❤️ for Smart India Hackathon 2025
          </p>
          <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
            Empowering education through AI-powered multilingual localization
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;