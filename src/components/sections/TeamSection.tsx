import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, Code, Palette, Smartphone } from 'lucide-react';

const TeamSection: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const team = [
    {
      name: 'Alex Chen',
      role: 'Flutter Developer',
      icon: Smartphone,
      description: 'Mobile app architect specializing in cross-platform development',
      color: 'from-blue-500 to-cyan-500',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Priya Sharma',
      role: 'Full Stack Developer',
      icon: Code,
      description: 'MERN stack expert with AI/ML integration experience',
      color: 'from-green-500 to-emerald-500',
      avatar: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Rahul Patel',
      role: 'Python AI Developer',
      icon: Code,
      description: 'Machine learning engineer focused on NLP and translation models',
      color: 'from-violet-500 to-purple-500',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Sarah Johnson',
      role: 'UI/UX Designer',
      icon: Palette,
      description: 'Design systems expert with accessibility focus',
      color: 'from-pink-500 to-rose-500',
      avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Arjun Kumar',
      role: 'Backend Developer',
      icon: Code,
      description: 'Django specialist with cloud infrastructure expertise',
      color: 'from-orange-500 to-red-500',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Maya Singh',
      role: 'Frontend Developer',
      icon: Code,
      description: 'React expert with modern web technologies',
      color: 'from-teal-500 to-cyan-500',
      avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400'
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
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-violet-500 text-white rounded-full font-semibold mb-6">
            Team Binary DNF
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent mb-6">
            Meet Our Team
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A diverse group of passionate developers, designers, and innovators united by the mission to democratize education through technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, rotateY: 5 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative p-6 bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-500 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative text-center">
                  {/* Avatar */}
                  <div className="relative mb-6">
                    <motion.div
                      className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-white/20 group-hover:ring-white/40 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    
                    <div className={`absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center`}>
                      <member.icon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  {/* Info */}
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  
                  <p className={`text-sm font-semibold mb-3 bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}>
                    {member.role}
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                    {member.description}
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex justify-center gap-3">
                    {[Github, Linkedin, Mail].map((Icon, iconIndex) => (
                      <motion.button
                        key={iconIndex}
                        className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-white transition-all duration-300"
                        whileHover={{ scale: 1.2, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Icon className="w-4 h-4" />
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Circles */}
                <motion.div
                  className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br ${member.color} rounded-full opacity-0 group-hover:opacity-20 blur-xl`}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  className={`absolute -bottom-10 -left-10 w-16 h-16 bg-gradient-to-br ${member.color} rounded-full opacity-0 group-hover:opacity-30 blur-xl`}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Stats */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { value: '6+', label: 'Team Members' },
              { value: '10+', label: 'Years Combined Experience' },
              { value: '5+', label: 'Technologies Mastered' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;