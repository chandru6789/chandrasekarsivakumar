import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const employment = [
    {
      period: "10/2025 - Present",
      title: "NIMS Postdoctoral Researcher",
      organization: "National Institute for Materials Science",
      location: "Japan",
      focus: "Neuromorphic computing, multi-valued logic memory, logic-in-memory"
    },
    {
      period: "09/2023 - 07/2025",
      title: "Postdoctoral Researcher",
      organization: "National Chung Hsing University",
      location: "Taiwan",
      focus: "Scanning Probe Microscopy UHV-STM & AFM, theoretical simulations VASP/QuantumATK/LAMMPS"
    },
    {
      period: "09/2017 - 07/2023",
      title: "Research Assistant",
      organization: "National Chung Hsing University",
      location: "Taiwan",
      focus: "CVD growth for RRAM, Surface study"
    },
    {
      period: "11/2019 - 01/2020",
      title: "Young Scientist Trainee",
      organization: "NIMS",
      location: "Japan",
      focus: "MO-CVD growth of MoS2"
    }
  ];

  const education = [
    {
      period: "2017-2023",
      degree: "Ph.D. in Physics",
      institution: "National Chung Hsing University",
      location: "Taiwan",
      dissertation: "Low Dimensional β-Ga₂O₃ – A Comprehensive Evaluation through Experimental and Theoretical Methods for Non-Volatile Memory Application"
    },
    {
      period: "2015-2017",
      degree: "M.Sc. in Physics",
      institution: "SRMV CAS, Bharathiar University",
      location: "India",
      dissertation: null
    },
    {
      period: "2012-2015",
      degree: "B.Sc. in Physics",
      institution: "SRMV CAS, Bharathiar University",
      location: "India",
      dissertation: null
    }
  ];

  const TimelineItem = ({ item, index, type }) => (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ delay: index * 0.2 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-navy-600 to-gold-400"></div>

      {/* Timeline Dot */}
      <div className="absolute left-0 top-0 -ml-2 w-4 h-4 rounded-full bg-gold-500 border-4 border-white shadow-lg"></div>

      {/* Content Card */}
      <div className="card hover:shadow-xl transition-shadow duration-300 border-l-4 border-gold-500">
        <div className="flex items-center gap-2 text-gold-600 font-semibold mb-2">
          <Calendar className="w-4 h-4" />
          <span>{item.period}</span>
        </div>

        <h3 className="text-xl font-bold text-navy-800 mb-2">
          {type === 'employment' ? item.title : item.degree}
        </h3>

        <div className="flex items-center gap-2 text-navy-600 font-medium mb-3">
          {type === 'employment' ? (
            <Briefcase className="w-4 h-4" />
          ) : (
            <GraduationCap className="w-4 h-4" />
          )}
          <span>{type === 'employment' ? item.organization : item.institution}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-600 mb-3">
          <MapPin className="w-4 h-4" />
          <span>{item.location}</span>
        </div>

        {type === 'employment' && (
          <div className="bg-navy-50 rounded-lg p-3 mt-3">
            <p className="text-sm font-medium text-navy-700">
              <span className="text-navy-900 font-semibold">Focus:</span> {item.focus}
            </p>
          </div>
        )}

        {type === 'education' && item.dissertation && (
          <div className="bg-gold-50 rounded-lg p-3 mt-3">
            <p className="text-sm font-medium text-gray-700">
              <span className="text-navy-900 font-semibold">Dissertation:</span> {item.dissertation}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <section id="experience" className="section-container bg-gradient-to-br from-gray-50 to-slate-100">
      <div ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          className="section-title text-center"
        >
          Experience & Education
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Employment Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-navy-800 mb-8 flex items-center gap-2">
              <Briefcase className="w-7 h-7 text-gold-500" />
              Employment
            </h3>
            <div className="relative">
              {employment.map((job, index) => (
                <TimelineItem key={index} item={job} index={index} type="employment" />
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-navy-800 mb-8 flex items-center gap-2">
              <GraduationCap className="w-7 h-7 text-gold-500" />
              Education
            </h3>
            <div className="relative">
              {education.map((edu, index) => (
                <TimelineItem key={index} item={edu} index={index} type="education" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
