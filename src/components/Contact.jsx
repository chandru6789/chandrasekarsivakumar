import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, BookOpen, ExternalLink } from 'lucide-react';

const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gradient-to-br from-navy-900 via-navy-800 to-slate-900 text-white">
      {/* Contact Section */}
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center text-white"
        >
          Get in Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {/* Email */}
          <motion.a
            href="mailto:SIVAKUMAR.Chandrasekar@nims.go.jp"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            <Mail className="w-8 h-8 text-gold-400 mb-3" />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-sm text-gray-300 break-words">SIVAKUMAR.Chandrasekar@nims.go.jp</p>
          </motion.a>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
          >
            <MapPin className="w-8 h-8 text-gold-400 mb-3" />
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-sm text-gray-300">NIMS, Tsukuba, Ibaraki 305-0044, Japan</p>
          </motion.div>

          {/* Google Scholar */}
          <motion.a
            href="https://scholar.google.com/citations?user=xaPpQysAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -5 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            <BookOpen className="w-8 h-8 text-gold-400 mb-3" />
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              Google Scholar
              <ExternalLink className="w-4 h-4" />
            </h3>
            <p className="text-sm text-gray-300">View Publications</p>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/chandrasekar-sivakumar-0255955a/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -5 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            <Linkedin className="w-8 h-8 text-gold-400 mb-3" />
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              LinkedIn
              <ExternalLink className="w-4 h-4" />
            </h3>
            <p className="text-sm text-gray-300">Connect with me</p>
          </motion.a>
        </div>

        {/* Flag Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mb-8"
        >
          <h3 className="text-lg font-semibold mb-4 text-gray-300">Visitor Statistics</h3>
          <div className="inline-block bg-white/5 rounded-lg p-4 border border-white/10">
            <a href="https://info.flagcounter.com/YH8J">
              <img
                src="https://s11.flagcounter.com/count2/YH8J/bg_FFFFFF/txt_000000/border_CCCCCC/columns_5/maxflags_20/viewers_0/labels_0/pageviews_1/flags_0/percent_0/"
                alt="Flag Counter"
                border="0"
                className="rounded"
              />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Chandrasekar Sivakumar. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <a
                href="https://scholar.google.com/citations?user=xaPpQysAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold-400 transition-colors"
                aria-label="Google Scholar"
              >
                <BookOpen className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/chandrasekar-sivakumar-0255955a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.researchgate.net/profile/Chandrasekar-Sivakumar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold-400 transition-colors"
                aria-label="ResearchGate"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.121 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53h-.005a3.334 3.334 0 0 0 .113.438c.245.743.65 1.303 1.214 1.68.565.376 1.256.564 2.075.564.8 0 1.487-.188 2.063-.563.575-.375.99-.933 1.247-1.676.024-.092.06-.23.11-.438.05-.206.076-.412.079-.617v-.003a11.823 11.823 0 0 0 .039-.727c.006-.282.009-.621.009-1.016a31.103 31.103 0 0 0-.014-1.017 9 9 0 0 0-.05-.727 7.946 7.946 0 0 0-.077-.53 3.334 3.334 0 0 0-.113-.438c-.257-.743-.672-1.303-1.247-1.68C21.073.19 20.386 0 19.586 0zM1.635 5.768c-.819 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.121 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53h-.005a3.334 3.334 0 0 0 .113.438c.245.743.65 1.303 1.214 1.68.565.376 1.256.564 2.075.564.8 0 1.487-.188 2.063-.563.575-.375.99-.933 1.247-1.676.024-.092.06-.23.11-.438.05-.206.076-.412.079-.617v-.003a11.823 11.823 0 0 0 .039-.727c.006-.282.009-.621.009-1.016a31.103 31.103 0 0 0-.014-1.017 9 9 0 0 0-.05-.727 7.946 7.946 0 0 0-.077-.53 3.334 3.334 0 0 0-.113-.438c-.257-.743-.672-1.303-1.247-1.68-.576-.375-1.263-.565-2.063-.565zm17.951 6.01c-.819 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.121 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53h-.005a3.334 3.334 0 0 0 .113.438c.245.743.65 1.303 1.214 1.68.565.376 1.256.564 2.075.564.8 0 1.487-.188 2.063-.563.575-.375.99-.933 1.247-1.676.024-.092.06-.23.11-.438.05-.206.076-.412.079-.617v-.003a11.823 11.823 0 0 0 .039-.727c.006-.282.009-.621.009-1.016a31.103 31.103 0 0 0-.014-1.017 9 9 0 0 0-.05-.727 7.946 7.946 0 0 0-.077-.53 3.334 3.334 0 0 0-.113-.438c-.257-.743-.672-1.303-1.247-1.68-.576-.375-1.263-.565-2.063-.565z"/>
                </svg>
              </a>
            </div>

            <p className="text-gray-400 text-sm">
              Built with React + Tailwind CSS + Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
