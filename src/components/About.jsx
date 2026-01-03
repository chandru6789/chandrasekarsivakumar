import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, FileText, Trophy } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const memberships = [
    "Executive Editor, Int. Research Journal of Multidisciplinary Technovation",
    "Receiving Editor, NanoNEXT",
    "Early Career Member, American Physical Society (USA)",
    "Member, Institute of Physics (UK)",
    "Honorary Member, The Phi Tau Phi Scholastic Honor Society, Taiwan (2023)",
    "Student Ambassador, American Physical Society (2021-2023)"
  ];

  return (
    <section id="about" className="section-container bg-white">
      <div ref={ref}>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="section-title text-center">
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Biography */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="card border-l-4 border-gold-500">
                <h3 className="text-2xl font-semibold text-navy-800 mb-4 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-gold-500" />
                  Biography
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  An interdisciplinary researcher with a proven track record of conducting innovative
                  research and publishing influential findings in top-tier academic journals in theory
                  and experimentation works on next-generation non-volatile memory technologies.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Skilled in designing and executing experiments, analyzing data, and presenting results
                  to diverse audiences.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-navy-800">Areas of interest:</strong> material synthesis,
                  memory device production, performance analysis, physical and chemical characterizations,
                  and first-principle DFT calculations to derive the fundamental electron transport
                  mechanism at the nanoscale device level.
                </p>
              </div>
            </motion.div>

            {/* Memberships & Awards */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="card border-l-4 border-navy-500">
                <h3 className="text-2xl font-semibold text-navy-800 mb-4 flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-navy-600" />
                  Memberships & Awards
                </h3>
                <ul className="space-y-3">
                  {memberships.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <Award className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Research Highlights */}
          <motion.div variants={itemVariants} className="mt-12">
            <h3 className="text-2xl font-semibold text-navy-800 mb-6 text-center">
              Research Highlights
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                className="card bg-gradient-to-br from-navy-50 to-white border-t-4 border-navy-600"
              >
                <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-navy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-navy-800 mb-2">
                  Tailoring Properties of 2D Materials
                </h4>
                <p className="text-gray-600">
                  Strain Engineering & Electric Field Modulation
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                className="card bg-gradient-to-br from-gold-50 to-white border-t-4 border-gold-600"
              >
                <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-gold-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-navy-800 mb-2">
                  Molecular Dynamics Simulations
                </h4>
                <p className="text-gray-600">
                  Grain Boundary Effects in ReRAM
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                className="card bg-gradient-to-br from-slate-50 to-white border-t-4 border-slate-600"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-navy-800 mb-2">
                  Phosphate Adsorption Studies
                </h4>
                <p className="text-gray-600">
                  on Goethite
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
