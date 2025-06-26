import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'logo', name: 'Logo Design' },
    { id: 'branding', name: 'Brand Identity' },
    { id: 'stationery', name: 'Stationery' },
    { id: 'web', name: 'Web Design' },
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'Mountain Adventures',
      category: 'logo',
      tags: ['Travel', 'Outdoors', 'Adventure'],
      imageUrl: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      title: 'Green Leaf Organics',
      category: 'branding',
      tags: ['Health', 'Organic', 'Natural'],
      imageUrl: 'https://images.pexels.com/photos/688668/pexels-photo-688668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      title: 'Blue Ocean Finance',
      category: 'logo',
      tags: ['Finance', 'Corporate', 'Professional'],
      imageUrl: 'https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 4,
      title: 'Spark Digital',
      category: 'web',
      tags: ['Technology', 'Modern', 'Digital'],
      imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 5,
      title: 'Urban Eats',
      category: 'branding',
      tags: ['Food', 'Restaurant', 'Urban'],
      imageUrl: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 6,
      title: 'Fitness First',
      category: 'logo',
      tags: ['Health', 'Fitness', 'Active'],
      imageUrl: 'https://images.pexels.com/photos/703016/pexels-photo-703016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 7,
      title: 'Luxe Boutique',
      category: 'stationery',
      tags: ['Fashion', 'Luxury', 'Boutique'],
      imageUrl: 'https://images.pexels.com/photos/1036856/pexels-photo-1036856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 8,
      title: 'Healthy Harvest',
      category: 'branding',
      tags: ['Food', 'Organic', 'Farming'],
      imageUrl: 'https://images.pexels.com/photos/196643/pexels-photo-196643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 9,
      title: 'Tech Innovate',
      category: 'web',
      tags: ['Technology', 'Innovation', 'Digital'],
      imageUrl: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 10,
      title: 'Cozy Cafe',
      category: 'stationery',
      tags: ['Cafe', 'Coffee', 'Relaxation'],
      imageUrl: 'https://images.pexels.com/photos/958164/pexels-photo-958164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 11,
      title: 'City Cycles',
      category: 'logo',
      tags: ['Cycling', 'Urban', 'Transport'],
      imageUrl: 'https://images.pexels.com/photos/4062/landscape-mountains-nature-lake.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 12,
      title: 'Bloom Beauty',
      category: 'branding',
      tags: ['Beauty', 'Cosmetics', 'Wellness'],
      imageUrl: 'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="pt-16 bg-[#f1f5f9] min-h-screen">
      {/* Hero Section */}
      <section
  className="relative pt-32 pb-16 px-4 bg-gradient-to-br from-[#101828] via-[#16213e] to-[#14b8a6] text-white shadow-lg overflow-hidden"
  style={{
    minHeight: "340px",
  }}
>
  <div className="container mx-auto text-center relative z-10">
    <motion.h1
      className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-lg"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Portfolio
    </motion.h1>
    <motion.p
      className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200 font-medium"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      Browse our collection of logo design and branding projects.
    </motion.p>
  </div>
  {/* Decorative SVG or gradient blob */}
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1440 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute bottom-0 left-0 w-full h-32 opacity-30"
    >
      <path
        fill="#14b8a6"
        fillOpacity="0.3"
        d="M0,224L48,197.3C96,171,192,117,288,117.3C384,117,480,171,576,197.3C672,224,768,224,864,197.3C960,171,1056,117,1152,101.3C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  </div>
</section>

      {/* Portfolio Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all border ${
                  filter === category.id 
                    ? 'bg-[#14b8a6] text-white shadow border-[#14b8a6]'
                    : 'bg-white text-[#0f172a] border-[#14b8a6]/20 hover:bg-[#14b8a6]/10'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.08
                }
              }
            }}
          >
            {filteredItems.map((item) => (
              <motion.div 
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#14b8a6]/10 group relative transition-all hover:shadow-2xl"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                }}
              >
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#14b8a6]/80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                    <button
                      className="bg-white text-[#14b8a6] font-bold px-6 py-2 rounded-full shadow hover:bg-[#0f172a] hover:text-white transition"
                      onClick={() => setSelectedProject(item)}
                    >
                      View Project
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-[#0f172a]">{item.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.tags.map((tag, index) => (
                      <span key={index} className="text-xs bg-[#f1f5f9] text-[#14b8a6] px-3 py-1 rounded-full font-semibold border border-[#14b8a6]/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        {/* Enhanced Modal for Project Details */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <motion.div
              className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-0 overflow-hidden"
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                className="absolute top-5 right-5 text-gray-400 hover:text-[#14b8a6] text-3xl font-bold z-10"
                onClick={() => setSelectedProject(null)}
                aria-label="Close"
                style={{ lineHeight: 1 }}
              >
                &times;
              </button>
              {/* Image */}
              <div className="w-full h-64 sm:h-80 bg-[#f1f5f9] flex items-center justify-center overflow-hidden">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Content */}
              <div className="p-8">
                <h2 className="text-3xl font-extrabold text-[#0f172a] mb-2">{selectedProject.title}</h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs bg-[#f1f5f9] text-[#14b8a6] px-3 py-1 rounded-full font-semibold border border-[#14b8a6]/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mb-3">
                  <span className="inline-block text-sm font-semibold text-[#14b8a6] bg-[#14b8a6]/10 px-3 py-1 rounded-full">
                    {categories.find(c => c.id === selectedProject.category)?.name || selectedProject.category}
                  </span>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {/* Placeholder for description, you can add more info here */}
                  This project showcases our expertise in {categories.find(c => c.id === selectedProject.category)?.name?.toLowerCase() || selectedProject.category}.
                </p>
                <div className="flex gap-3 mt-6">
                  <button
                    className="bg-[#14b8a6] hover:bg-[#0f172a] text-white px-6 py-2 rounded-lg font-bold transition-all"
                    onClick={() => setSelectedProject(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-[#14b8a6] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Create Your Own Success Story?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-6 font-medium text-base">
            Let's work together to design a memorable logo and brand identity that helps your business thrive.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="/get-quote" 
              className="bg-white text-[#14b8a6] hover:bg-[#0f172a] hover:text-white px-8 py-3 rounded-lg font-bold text-lg transition-all text-center"
            >
              Start Your Project
            </a>
            {/* <a 
              href="/about"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-[#14b8a6] text-white px-8 py-3 rounded-lg font-bold text-lg transition-all text-center"
            >
              About Us
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
}