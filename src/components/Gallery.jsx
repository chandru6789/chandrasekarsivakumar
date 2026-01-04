import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Camera, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Add your outreach images here
  const outreachImages = [
    {
      src: '/images/outreach/1H0A3766.jpg',
      title: 'International Conference on Materials Science',
      description: 'Presenting research findings at NIMS, Japan',
      year: '2025'
    },
    {
      src: '/images/outreach/1H0A3788.jpg',
      title: 'Nanotechnology Workshop',
      description: 'Leading hands-on training session',
      year: '2024'
    },
    {
      src: '/images/outreach/1H0A3791.jpg',
      title: 'Research Collaboration',
      description: 'Working with international research team',
      year: '2024'
    },
    // Add more images as needed
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % outreachImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + outreachImages.length) % outreachImages.length);
  };

  return (
    <section id="gallery" className="section-container bg-gradient-to-br from-slate-50 to-gray-100">
      <div ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          className="section-title text-center"
        >
          Outreach & Activities
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Carousel */}
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Image Container */}
            <div className="relative h-96 md:h-[500px] bg-gray-200">
              <img
                src={outreachImages[currentIndex].src}
                alt={outreachImages[currentIndex].title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to placeholder if image not found
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23ddd" width="400" height="300"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="18" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3EAdd Your Image%3C/text%3E%3C/svg%3E';
                }}
              />

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-navy-800" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-navy-800" />
              </button>

              {/* Year Badge */}
              <div className="absolute top-4 right-4 bg-gold-500 text-white px-4 py-2 rounded-full font-bold">
                {outreachImages[currentIndex].year}
              </div>
            </div>

            {/* Image Info */}
            <div className="p-6 bg-white">
              <h3 className="text-2xl font-bold text-navy-800 mb-2">
                {outreachImages[currentIndex].title}
              </h3>
              <p className="text-gray-600">
                {outreachImages[currentIndex].description}
              </p>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {outreachImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'w-8 bg-gold-500'
                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Grid View Option */}
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {outreachImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setCurrentIndex(index)}
                className="cursor-pointer group relative overflow-hidden rounded-lg shadow-md aspect-video"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23ddd" width="400" height="300"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="18" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3EAdd Image%3C/text%3E%3C/svg%3E';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold text-sm">{image.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
