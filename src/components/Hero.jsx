import { motion } from 'framer-motion';
import { GraduationCap, Mail, Linkedin, BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-900 via-navy-800 to-slate-800 text-white overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy-500 rounded-full blur-3xl"></div>
      </div>

      {/* Molecular Structure Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="2" fill="currentColor" />
              <line x1="25" y1="25" x2="75" y2="25" stroke="currentColor" strokeWidth="0.5" />
              <line x1="25" y1="25" x2="25" y2="75" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <GraduationCap className="w-16 h-16 mx-auto mb-6 text-gold-400" />

          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Chandrasekar Sivakumar
          </h1>

          <h2 className="text-2xl md:text-3xl font-light mb-6 text-gold-300">
            NIMS Postdoctoral Researcher
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
            Research Center for Materials Nanoarchitectonics (MANA)
          </p>

          <p className="text-base md:text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
            National Institute for Materials Science (NIMS), Tsukuba, Ibaraki 305-0044, Japan
          </p>

          <p className="text-lg text-gray-200 mb-12 max-w-3xl mx-auto italic border-l-4 border-gold-500 pl-6">
            An interdisciplinary researcher pioneering next-generation non-volatile memory technologies
            through innovative experimentation and theoretical simulations
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <motion.a
              href="mailto:SIVAKUMAR.Chandrasekar@nims.go.jp"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-gold-500 px-6 py-3 rounded-lg transition-all duration-300 border border-white/20 hover:border-gold-400"
            >
              <Mail className="w-5 h-5" />
              <span className="font-medium">Email</span>
            </motion.a>

            <motion.a
              href="https://scholar.google.com/citations?user=xaPpQysAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-gold-500 px-6 py-3 rounded-lg transition-all duration-300 border border-white/20 hover:border-gold-400"
            >
              <BookOpen className="w-5 h-5" />
              <span className="font-medium">Google Scholar</span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/chandrasekar-sivakumar-0255955a/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-gold-500 px-6 py-3 rounded-lg transition-all duration-300 border border-white/20 hover:border-gold-400"
            >
              <Linkedin className="w-5 h-5" />
              <span className="font-medium">LinkedIn</span>
            </motion.a>

            <motion.a
              href="https://www.researchgate.net/profile/Chandrasekar-Sivakumar"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-gold-500 px-6 py-3 rounded-lg transition-all duration-300 border border-white/20 hover:border-gold-400"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.121 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53h-.005a3.334 3.334 0 0 0 .113.438c.245.743.65 1.303 1.214 1.68.565.376 1.256.564 2.075.564.8 0 1.487-.188 2.063-.563.575-.375.99-.933 1.247-1.676.024-.092.06-.23.11-.438.05-.206.076-.412.079-.617v-.003a11.823 11.823 0 0 0 .039-.727c.006-.282.009-.621.009-1.016a31.103 31.103 0 0 0-.014-1.017 9 9 0 0 0-.05-.727 7.946 7.946 0 0 0-.077-.53 3.334 3.334 0 0 0-.113-.438c-.257-.743-.672-1.303-1.247-1.68C21.073.19 20.386 0 19.586 0zM1.635 5.768c-.819 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.121 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53h-.005a3.334 3.334 0 0 0 .113.438c.245.743.65 1.303 1.214 1.68.565.376 1.256.564 2.075.564.8 0 1.487-.188 2.063-.563.575-.375.99-.933 1.247-1.676.024-.092.06-.23.11-.438.05-.206.076-.412.079-.617v-.003a11.823 11.823 0 0 0 .039-.727c.006-.282.009-.621.009-1.016a31.103 31.103 0 0 0-.014-1.017 9 9 0 0 0-.05-.727 7.946 7.946 0 0 0-.077-.53 3.334 3.334 0 0 0-.113-.438c-.257-.743-.672-1.303-1.247-1.68-.576-.375-1.263-.565-2.063-.565zm17.951 6.01c-.819 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.121 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53h-.005a3.334 3.334 0 0 0 .113.438c.245.743.65 1.303 1.214 1.68.565.376 1.256.564 2.075.564.8 0 1.487-.188 2.063-.563.575-.375.99-.933 1.247-1.676.024-.092.06-.23.11-.438.05-.206.076-.412.079-.617v-.003a11.823 11.823 0 0 0 .039-.727c.006-.282.009-.621.009-1.016a31.103 31.103 0 0 0-.014-1.017 9 9 0 0 0-.05-.727 7.946 7.946 0 0 0-.077-.53 3.334 3.334 0 0 0-.113-.438c-.257-.743-.672-1.303-1.247-1.68-.576-.375-1.263-.565-2.063-.565z"/>
              </svg>
              <span className="font-medium">ResearchGate</span>
            </motion.a>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-12"
          >
            <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
