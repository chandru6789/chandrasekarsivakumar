import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { BookOpen, ExternalLink, Filter } from 'lucide-react';

const Publications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedYear, setSelectedYear] = useState('All');

  const publications = [
    {
      year: 2025,
      authors: "Yang, S.-H., et al.",
      title: "Exploring the Frontier of 2D Materials: Strain and Electric Field Effects in MoS2/WS2 VdW Heterostructures",
      journal: "Journal of Alloys and Compounds",
      volume: "1012",
      pages: "178457",
      doi: null
    },
    {
      year: 2024,
      authors: "Huang, K. W., et al.",
      title: "Highly Efficient Room Temperature NO2 Sensor Using Two-Phase TiOx Heterogenous Nanoparticles",
      journal: "ACS Applied Materials & Interfaces",
      volume: null,
      pages: null,
      doi: null
    },
    {
      year: 2024,
      authors: "Gowtham, M., et al.",
      title: "Exploring Zinc Vanadate/Cobalt Oxide Nano Hybrid Composites as Supercapacitors",
      journal: "Int. Research Journal Of Multidisciplinary Technovation",
      volume: null,
      pages: null,
      doi: null
    },
    {
      year: 2023,
      authors: "Hong, T. J., et al.",
      title: "Investigation of TiO2 Nanoparticle Interactions in the Fibroblast NIH-3T3 Cells via Liquid Mode-Atomic Force Microscope",
      journal: "Archives of Toxicology",
      volume: null,
      pages: null,
      doi: null
    },
    {
      year: 2023,
      authors: "Lin, Y.-H., et al.",
      title: "Ag-Decorated Vertically Aligned ZnO Nanorods for Non-Enzymatic Glucose Sensor Applications",
      journal: "Nanomaterials",
      volume: null,
      pages: null,
      doi: null
    },
    {
      year: 2021,
      authors: "Sivakumar, C., et al.",
      title: "High quality single-crystalline β-Ga2O3 nanowires: synthesis to non-volatile memory applications",
      journal: "Nanomaterials",
      volume: null,
      pages: null,
      doi: null
    },
    {
      year: 2020,
      authors: "Weng, T. F., et al.",
      title: "VLS growth of pure and Au decorated β-Ga2O3 nanowires for room temperature CO gas sensor",
      journal: "Applied Surface Science",
      volume: null,
      pages: null,
      doi: null
    }
  ];

  // Extract unique years and sort them in descending order
  const years = ['All', ...Array.from(new Set(publications.map(p => p.year))).sort((a, b) => b - a)];

  // Filter publications based on selected year
  const filteredPublications = selectedYear === 'All'
    ? publications
    : publications.filter(p => p.year === parseInt(selectedYear));

  const PublicationCard = ({ pub, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: index * 0.1 }}
      className="card border-l-4 border-navy-600 hover:border-gold-500 transition-colors duration-300"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-block bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              {pub.year}
            </span>
            <BookOpen className="w-5 h-5 text-navy-600" />
          </div>

          <h3 className="text-lg font-semibold text-navy-800 mb-2 leading-tight">
            {pub.title}
          </h3>

          <p className="text-gray-600 text-sm mb-2">
            {pub.authors}
          </p>

          <p className="text-navy-600 font-medium mb-1">
            <em>{pub.journal}</em>
            {pub.volume && <>, {pub.volume}</>}
            {pub.pages && <>, {pub.pages}</>}
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-gold-600 hover:text-gold-700 flex-shrink-0"
          aria-label="View publication"
        >
          <ExternalLink className="w-5 h-5" />
        </motion.button>
      </div>
    </motion.div>
  );

  return (
    <section id="publications" className="section-container bg-white">
      <div ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          className="section-title text-center"
        >
          Publications
        </motion.h2>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <div className="flex items-center gap-2 text-navy-700 font-semibold">
              <Filter className="w-5 h-5" />
              <span>Filter by Year:</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {years.map((year) => (
                <motion.button
                  key={year}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedYear(year)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                    selectedYear === year
                      ? 'bg-gold-500 text-white shadow-md'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {year}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <p className="text-center mt-4 text-gray-600">
            Showing <span className="font-bold text-navy-800">{filteredPublications.length}</span>{' '}
            {filteredPublications.length === 1 ? 'publication' : 'publications'}
            {selectedYear !== 'All' && ` from ${selectedYear}`}
          </p>
        </motion.div>

        {/* Publications List */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {filteredPublications.length > 0 ? (
            filteredPublications.map((pub, index) => (
              <PublicationCard key={index} pub={pub} index={index} />
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No publications found for {selectedYear}</p>
            </motion.div>
          )}
        </div>

        {/* Scholar Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://scholar.google.com/citations?user=xaPpQysAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-secondary"
          >
            <BookOpen className="w-5 h-5" />
            View Full Publication List on Google Scholar
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;
