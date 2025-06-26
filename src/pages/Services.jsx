import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Logo Design',
      description: 'Get a unique, custom logo that perfectly represents your brand identity. Our professional designers will create a memorable logo that helps your business stand out.',
      features: [
        'Custom design tailored to your brand',
        'Multiple concepts to choose from',
        'Unlimited revisions until satisfaction',
        'All file formats provided (AI, EPS, PDF, JPG, PNG)',
        'Full copyright ownership',
      ],
      imageUrl: 'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      title: 'Brand Identity',
      description: 'Develop a complete brand identity system including logo, color palette, typography, and brand guidelines to ensure consistent brand presentation across all platforms.',
      features: [
        'Comprehensive brand strategy',
        'Logo design and variations',
        'Color palette selection',
        'Typography guidelines',
        'Brand usage documentation',
      ],
      imageUrl: 'https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      title: 'Business Cards',
      description: 'Make a lasting impression with professionally designed business cards that reflect your brand identity and provide essential contact information.',
      features: [
        'Custom business card designs',
        'Multiple layout options',
        'Double-sided printing options',
        'Print-ready files',
        'Special finish recommendations (emboss, foil, etc.)',
      ],
      imageUrl: 'https://images.pexels.com/photos/7876708/pexels-photo-7876708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 4,
      title: 'Stationery Design',
      description: 'Create a cohesive brand image with custom stationery including letterheads, envelopes, and notepads that reflect your company\'s visual identity.',
      features: [
        'Letterhead design',
        'Envelope design',
        'Business card design',
        'Compliment slip design',
        'Print-ready files in all formats',
      ],
      imageUrl: 'https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 5,
      title: 'Website Design',
      description: 'Get a professionally designed website that looks great, functions smoothly, and effectively represents your brand online.',
      features: [
        'Custom website design',
        'Mobile-responsive layouts',
        'User experience optimization',
        'Integration with your branding',
        'Basic SEO setup',
      ],
      imageUrl: 'https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 6,
      title: 'Social Media Branding',
      description: 'Create consistent brand presence across all social media platforms with custom profile images, cover photos, and post templates.',
      features: [
        'Profile picture design',
        'Cover/banner image design',
        'Post template designs',
        'Story template designs',
        'Social media brand guidelines',
      ],
      imageUrl: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

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
            Our Services
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive design solutions to elevate your brand and make your business stand out.
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

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              className="bg-white rounded-2xl shadow-lg border border-[#14b8a6]/10 flex flex-col hover:shadow-2xl transition-shadow duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="h-48 w-full overflow-hidden rounded-t-2xl">
            <img 
              src={service.imageUrl} 
              alt={service.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
              </div>
              <div className="p-7 flex flex-col flex-1">
            <h3 className="text-xl font-bold mb-2 text-[#0f172a]">{service.title}</h3>
            <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
            <ul className="space-y-2 mb-5">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start">
              <span className="text-[#14b8a6] mr-2 mt-1 text-base">•</span>
              <span className="text-gray-700 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <Link 
                to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} 
                className="inline-flex items-center text-[#14b8a6] font-semibold hover:underline text-sm transition"
                onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
              >
                Learn More <FaArrowRight className="ml-2" />
              </Link>
            </div>
              </div>
            </motion.div>
          ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
      <section className="py-16 bg-[#14b8a6]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Get Started?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 font-medium">
            Contact us today to discuss your project and get a free quote. Our team is ready to help you create a stunning brand identity.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/get-quote" 
              className="bg-white text-[#14b8a6] hover:bg-[#0f172a] hover:text-white px-8 py-3 rounded-lg font-bold text-lg transition-all text-center"
            >
              Get a Free Quote
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-[#14b8a6] text-white px-8 py-3 rounded-lg font-bold text-lg transition-all text-center"
            >
              Contact Us
            </Link>
            {/* <Link 
              to="/about" 
              className="bg-white text-[#14b8a6] hover:bg-[#0f172a] hover:text-white px-8 py-3 rounded-lg font-bold text-lg transition-all text-center"
            >
              About Us
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
}