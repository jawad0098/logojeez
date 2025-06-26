import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaCheckCircle, FaStar, FaArrowRight, FaSyncAlt, FaClock, FaUndo, FaHeadset, FaFileAlt, FaGem } from 'react-icons/fa';
import { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import slider1 from '../assets/slider/slider1.jpg';
import slider2 from '../assets/slider/slider2.jpg';
import slider3 from '../assets/slider/slider3.jpg';

export default function Home() {
  const services = [
    {
      id: 1,
      title: 'Logo Design',
      description: 'Professional and unique logo designs tailored for your business identity.',
      imageUrl: 'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      title: 'Brand Identity',
      description: 'Complete brand identity design including logos, color palettes, and brand guidelines.',
      imageUrl: 'https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      title: 'Business Cards',
      description: 'Eye-catching business card designs that make a lasting impression.',
      imageUrl: 'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 4,
      title: 'Stationery Design',
      description: 'Cohesive stationery design including letterheads, envelopes, and more.',
      imageUrl: 'https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      company: 'Tech Solutions Inc.',
      content: 'LogoJeez delivered beyond our expectations. The logo perfectly captures our brand essence and has received countless compliments from our clients.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      company: 'Bloom Boutique',
      content: 'Working with LogoJeez was a breeze. They understood our vision right away and created a stunning logo that truly represents our boutique.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      name: 'Michael Chen',
      company: 'Fusion Restaurant',
      content: 'The team at LogoJeez is incredibly talented. They designed a logo that perfectly blends our cultural influences and modern approach to cuisine.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'Mountain Adventures',
      category: 'Travel & Tourism',
      imageUrl: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      title: 'Green Leaf Organics',
      category: 'Health & Wellness',
      imageUrl: 'https://images.pexels.com/photos/688668/pexels-photo-688668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      title: 'Blue Ocean Finance',
      category: 'Finance & Banking',
      imageUrl: 'https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 4,
      title: 'Spark Digital',
      category: 'Technology',
      imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 5,
      title: 'Urban Eats',
      category: 'Food & Restaurant',
      imageUrl: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 6,
      title: 'Fitness First',
      category: 'Health & Fitness',
      imageUrl: 'https://images.pexels.com/photos/703016/pexels-photo-703016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  const features = [
    "100% Unique & Custom Designs",
    "Unlimited Revisions",
    "Quick Turnaround Time",
    "Money Back Guarantee",
    "Dedicated Support Team",
    "Source Files Included",
  ];

  // Pricing plans for each tab
  const pricingTabs = [
    {
      key: 'logo',
      label: 'Logo',
      plans: [
        {
          id: 1,
          name: 'Basic',
          price: 99,
          features: [
            "2 Logo Concepts",
            "2 Revisions",
            "JPG & PNG Files",
            "3 Day Delivery",
          ],
          popular: false,
        },
        {
          id: 2,
          name: 'Standard',
          price: 199,
          features: [
            "4 Logo Concepts",
            "Unlimited Revisions",
            "All File Formats",
            "Business Card Design",
            "2 Day Delivery",
          ],
          popular: true,
        },
        {
          id: 3,
          name: 'Premium',
          price: 299,
          features: [
            "6 Logo Concepts",
            "Unlimited Revisions",
            "All File Formats",
            "Business Card & Stationery",
            "Social Media Kit",
            "1 Day Delivery",
          ],
          popular: false,
        },
      ],
    },
    {
      key: 'web',
      label: 'Web',
      plans: [
        {
          id: 1,
          name: 'Starter',
          price: 299,
          features: [
            "3 Page Website",
            "Responsive Design",
            "Basic SEO",
            "5 Day Delivery",
          ],
          popular: false,
        },
        {
          id: 2,
          name: 'Business',
          price: 599,
          features: [
            "7 Page Website",
            "Responsive Design",
            "SEO Optimization",
            "CMS Integration",
            "3 Day Delivery",
          ],
          popular: true,
        },
        {
          id: 3,
          name: 'Enterprise',
          price: 999,
          features: [
            "15+ Page Website",
            "Custom Features",
            "Advanced SEO",
            "E-commerce",
            "Priority Support",
            "7 Day Delivery",
          ],
          popular: false,
        },
      ],
    },
    {
      key: 'branding',
      label: 'Branding',
      plans: [
        {
          id: 1,
          name: 'Starter',
          price: 149,
          features: [
            "Logo Design",
            "Color Palette",
            "Basic Brand Guide",
            "3 Day Delivery",
          ],
          popular: false,
        },
        {
          id: 2,
          name: 'Pro',
          price: 299,
          features: [
            "Logo & Stationery",
            "Brand Guidelines",
            "Social Media Kit",
            "5 Day Delivery",
          ],
          popular: true,
        },
        {
          id: 3,
          name: 'Elite',
          price: 499,
          features: [
            "Full Brand Identity",
            "Brand Book",
            "Marketing Collateral",
            "10 Day Delivery",
          ],
          popular: false,
        },
      ],
    },
    {
      key: 'video',
      label: 'Video',
      plans: [
        {
          id: 1,
          name: 'Intro',
          price: 79,
          features: [
            "10s Animated Intro",
            "HD Quality",
            "2 Revisions",
            "2 Day Delivery",
          ],
          popular: false,
        },
        {
          id: 2,
          name: 'Promo',
          price: 199,
          features: [
            "30s Promo Video",
            "Script & Voiceover",
            "HD Quality",
            "4 Day Delivery",
          ],
          popular: true,
        },
        {
          id: 3,
          name: 'Explainer',
          price: 399,
          features: [
            "60s Explainer Video",
            "Custom Animation",
            "Script & Voiceover",
            "7 Day Delivery",
          ],
          popular: false,
        },
      ],
    },
    {
      key: 'digital',
      label: 'Digital Marketing',
      plans: [
        {
          id: 1,
          name: 'Starter',
          price: 99,
          features: [
            "Social Media Setup",
            "1 Campaign",
            "Basic Analytics",
            "3 Day Delivery",
          ],
          popular: false,
        },
        {
          id: 2,
          name: 'Growth',
          price: 299,
          features: [
            "3 Campaigns",
            "Ad Management",
            "Monthly Report",
            "7 Day Delivery",
          ],
          popular: true,
        },
        {
          id: 3,
          name: 'Pro',
          price: 599,
          features: [
            "Full Digital Strategy",
            "SEO & SEM",
            "Content Creation",
            "Ongoing Support",
            "30 Day Delivery",
          ],
          popular: false,
        },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState('logo');
  const activePlans = pricingTabs.find(tab => tab.key === activeTab)?.plans || [];

  // Seasonal Offer Banner State
  const [offerOpen, setOfferOpen] = useState(false);
  const [offerForm, setOfferForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    contactOption: '',
  });
  const [offerSubmitted, setOfferSubmitted] = useState(false);

  const serviceOptions = [
    'Logo Design',
    'Brand Identity',
    'Business Cards',
    'Stationery Design',
    'Web',
    'Branding',
    'Video',
    'Digital Marketing',
  ];

  function handleOfferInput(e) {
    const { name, value } = e.target;
    setOfferForm(f => ({ ...f, [name]: value }));
  }

  function handleOfferSubmit(e) {
    e.preventDefault();
    setOfferSubmitted(true);
    // You can add actual submission logic here
  }

  // Animation variants
  const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };
  const cardVariant = {
    hidden: { opacity: 0, scale: 0.96, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.5 }
    })
  };

  const featureIcons = [
    <FaGem className="text-[#14b8a6] text-3xl drop-shadow" />,         // 100% Unique & Custom Designs
    <FaSyncAlt className="text-[#14b8a6] text-3xl drop-shadow" />,     // Unlimited Revisions
    <FaClock className="text-[#14b8a6] text-3xl drop-shadow" />,       // Quick Turnaround Time
    <FaUndo className="text-[#14b8a6] text-3xl drop-shadow" />,        // Money Back Guarantee
    <FaHeadset className="text-[#14b8a6] text-3xl drop-shadow" />,     // Dedicated Support Team
    <FaFileAlt className="text-[#14b8a6] text-3xl drop-shadow" />,     // Source Files Included
  ];

  // Slider images array
  const sliderImages = [
    slider1,
    slider2,
    slider3,
    // ...add more if needed
  ];

  return (
    <>
      {/* Seasonal Offer Banner - center horizontally, width 60vw, rounded bottom corners */}
      <div
        className="absolute top-[118px] left-1/2 -translate-x-1/2 w-[63vw] flex flex-col items-center justify-center bg-gradient-to-r from-[#14b8a6] via-[#06b6d4] to-[#0ea5e9] text-white py-3 px-2 shadow-md z-40 rounded-b-2xl"
        style={{ minHeight: 40 }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-5xl mx-auto gap-2">
          <div className="flex items-center gap-2">
        <span className="font-bold text-lg sm:text-xl">🎉 Seasonal Offer: 25% OFF on All Branding Packages!</span>
        <span className="hidden sm:inline text-sm font-medium opacity-80 ml-3">Limited time only. Don't miss out!</span>
          </div>
          <button
        className="mt-2 sm:mt-0 bg-white text-[#14b8a6] font-bold px-4 py-2 rounded-lg shadow hover:bg-[#0f172a] hover:text-white transition-all text-base"
        onClick={() => setOfferOpen(o => !o)}
        aria-expanded={offerOpen}
        aria-controls="seasonal-offer-accordion"
          >
        {offerOpen ? 'Hide Offer' : 'Click Here'}
          </button>
        </div>
      </div>

      {/* Accordion Overlay - adjust top to match banner */}
      {offerOpen && (
        <div
          className="absolute left-0 right-0 z-40 flex items-start justify-center bg-black/60"
          style={{
            top: 88, // 56px banner + 32px (top-32)
            minHeight: 'calc(100vh - 88px)',
            backdropFilter: 'blur(2px)',
          }}
        >
          <div className="relative w-full max-w-5xl mx-auto px-2 mt-24">
            <div className="flex flex-col md:flex-row gap-8 bg-white rounded-2xl shadow-2xl p-6 md:p-10 border border-[#14b8a6]/20">
              {/* Left: Image & Info */}
              <div className="flex-1 flex flex-col items-center md:items-start justify-center mb-6 md:mb-0">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&w=400&q=60"
                  alt="Seasonal Offer"
                  className="w-40 h-40 object-cover rounded-xl mb-4 shadow-lg border-4 border-[#14b8a6]/20"
                />
                <h3 className="text-xl font-bold text-[#14b8a6] mb-2 text-center md:text-left">Unlock Your 25% Discount!</h3>
                <p className="text-[#334155] text-base mb-2 text-center md:text-left">
                  Fill out the form to claim your exclusive offer. Our team will contact you with a custom quote and details.
                </p>
                <ul className="text-[#0f172a] text-sm list-disc pl-5">
                  <li>Valid for all new branding, logo, and web packages</li>
                  <li>Free consultation included</li>
                  <li>Offer ends soon!</li>
                </ul>
              </div>
              {/* Right: Form */}
              <div className="flex-1 flex flex-col justify-center">
                {!offerSubmitted ? (
                  <form className="space-y-4" onSubmit={handleOfferSubmit} autoComplete="off">
                    <div>
                      <label className="block text-[#0f172a] font-semibold mb-1" htmlFor="offer-name">Name</label>
                      <input
                        id="offer-name"
                        name="name"
                        type="text"
                        required
                        className="w-full px-4 py-2 rounded-lg border border-[#14b8a6]/30 focus:border-[#14b8a6] outline-none"
                        value={offerForm.name}
                        onChange={handleOfferInput}
                      />
                    </div>
                    <div>
                      <label className="block text-[#0f172a] font-semibold mb-1" htmlFor="offer-phone">Phone</label>
                      <input
                        id="offer-phone"
                        name="phone"
                        type="tel"
                        required
                        className="w-full px-4 py-2 rounded-lg border border-[#14b8a6]/30 focus:border-[#14b8a6] outline-none"
                        value={offerForm.phone}
                        onChange={handleOfferInput}
                      />
                    </div>
                    <div>
                      <label className="block text-[#0f172a] font-semibold mb-1" htmlFor="offer-email">Email</label>
                      <input
                        id="offer-email"
                        name="email"
                        type="email"
                        required
                        className="w-full px-4 py-2 rounded-lg border border-[#14b8a6]/30 focus:border-[#14b8a6] outline-none"
                        value={offerForm.email}
                        onChange={handleOfferInput}
                      />
                    </div>
                    <div>
                      <label className="block text-[#0f172a] font-semibold mb-1" htmlFor="offer-service">Service</label>
                      <select
                        id="offer-service"
                        name="service"
                        required
                        className="w-full px-4 py-2 rounded-lg border border-[#14b8a6]/30 focus:border-[#14b8a6] outline-none"
                        value={offerForm.service}
                        onChange={handleOfferInput}
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map(opt => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-[#0f172a] font-semibold mb-1">Preferred Contact</label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="contactOption"
                            value="Phone"
                            checked={offerForm.contactOption === 'Phone'}
                            onChange={handleOfferInput}
                            required
                          />
                          <span>Phone</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="contactOption"
                            value="Email"
                            checked={offerForm.contactOption === 'Email'}
                            onChange={handleOfferInput}
                          />
                          <span>Email</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="contactOption"
                            value="WhatsApp"
                            checked={offerForm.contactOption === 'WhatsApp'}
                            onChange={handleOfferInput}
                          />
                          <span>WhatsApp</span>
                        </label>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#14b8a6] hover:bg-[#0f172a] text-white font-bold py-3 rounded-lg shadow transition-all"
                    >
                      Claim My Offer
                    </button>
                  </form>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full min-h-[220px]">
                    <span className="text-2xl text-[#14b8a6] font-bold mb-2">Thank you!</span>
                    <p className="text-[#0f172a] text-base text-center">Your request has been received.<br />Our team will contact you soon.</p>
                    <button
                      className="mt-6 bg-[#14b8a6] hover:bg-[#0f172a] text-white font-bold py-2 px-6 rounded-lg shadow transition-all"
                      onClick={() => { setOfferSubmitted(false); setOfferForm({ name: '', phone: '', email: '', service: '', contactOption: '' }); setOfferOpen(false); }}
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>
              {/* Close button (top right) */}
              <button
                className="absolute top-2 right-2 text-[#14b8a6] hover:text-[#0f172a] text-2xl font-bold bg-white rounded-full w-9 h-9 flex items-center justify-center shadow"
                onClick={() => setOfferOpen(false)}
                aria-label="Close"
                type="button"
              >
                ×
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main page content, adjust pt to match new banner position */}
      <div className="pt-[88px] bg-[#f1f5f9] min-h-screen font-sans">
        {/* Hero Section */}
        <motion.section
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&fit=crop&w=1200&q=80')`, // lighter, subtle background
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
          }}
          // Center content both vertically and horizontally
          className="relative min-h-[82vh] flex items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
        >
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/70 z-0 pointer-events-none</div>"></div>
          <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-8 md:gap-12 relative z-10">
            <motion.div
              className="w-full max-w-2xl flex flex-col items-center justify-center text-center"
              initial={{ opacity: 0, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="mb-6 flex flex-col gap-4 items-center">
                <span
                  className="inline-block text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-[#67e8f9] via-[#22d3ee] to-[#38bdf8] text-transparent bg-clip-text drop-shadow-lg pb-2"
                  style={{ textShadow: '0 2px 8px rgba(0,0,0,0.25)', whiteSpace: 'nowrap' }}
                >
                  VIP Branding Solutions
                </span>
                <span className="inline-block text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-snug" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.45)', marginTop: '0' }}>
                  Stand Out with a Premium, Cohesive Brand Identity
                </span>
                <div className="text-lg sm:text-xl md:text-2xl mb-4 text-white font-medium max-w-xl min-h-[60px]">
                  <span
                    className="inline-block px-2 py-2 rounded-lg bg-[#14b8a6]/10 border-l-4 border-[#14b8a6] shadow-sm sm:px-4"
                    style={{
                      whiteSpace: 'normal', // allow wrapping
                      wordBreak: 'break-word',
                      display: 'inline-block', // key: background only as wide as text
                      textAlign: 'center',
                      transition: 'width 0.2s', // smooth width change as text types
                    }}
                  >
                    <Typewriter
                      words={[
                        "We craft unique, memorable logos and brand identities.",
                        "Experience luxury branding for your business.",
                        "Stand out with a premium, cohesive brand identity."
                      ]}
                      loop={0}
                      cursor
                      cursorStyle="|"
                      typeSpeed={38}
                      deleteSpeed={25}
                      delaySpeed={2200}
                    />
                  </span>
                </div>
              </h1>
              <div className="mb-8" />
              {/* Remove the Typewriter below since the third line is now static above */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/get-quote"
                  className="bg-[#14b8a6] hover:bg-[#0f172a] text-white px-6 py-3 rounded-xl font-bold text-base shadow-lg transition-all text-center min-w-[180px]"
                >
                  Get Started
                </Link>
                <Link
                  to="/portfolio"
                  className="bg-white border border-[#14b8a6] hover:bg-[#14b8a6] hover:text-white text-[#14b8a6] px-6 py-3 rounded-xl font-bold text-base shadow-lg transition-all text-center min-w-[180px]"
                >
                  View Portfolio
                </Link>
              </div>
            </motion.div>
            {/* Removed the hero image */}
          </div>
        </motion.section>

        {/* Swiper directly after hero, no gap, with matching background */}
        <motion.div
          className="flex justify-center mb-0"
          style={{
            background: 'linear-gradient(rgb(239 239 239), rgb(255 255 255))',
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            direction="vertical"
            slidesPerView={1}
            spaceBetween={16}
            autoplay={{ delay: 2500, disableOnInteraction: false, reverseDirection: true }}
            loop
            speed={2200} // Slower slide transition (default is 300ms)
            style={{ width: 1170, height: 114 }}
            className="rounded-xl shadow-lg"
          >
            {sliderImages.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={img}
                  alt={`slider-${idx + 1}`}
                  style={{ width: '1170px', height: '114px', objectFit: 'cover', borderRadius: '12px' }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Pricing Section with Tabs */}
        <motion.section
          className="py-10 sm:py-16 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
        >
          <div className="container mx-auto px-2 sm:px-4">
            {/* Remove Swiper from here */}
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              {pricingTabs.map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-6 py-2 rounded-lg font-bold text-base transition-all border ${activeTab === tab.key
                    ? 'bg-[#14b8a6] text-white border-[#14b8a6]'
                    : 'bg-white text-[#14b8a6] border-[#14b8a6]/30 hover:bg-[#14b8a6]/10'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            {/* Plans for active tab  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {activePlans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  className={`bg-[#f1f5f9] rounded-xl overflow-hidden shadow-sm border-2 ${plan.popular ? 'border-[#14b8a6] scale-105' : 'border-[#14b8a6]/10'
                    } relative`}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariant}
                >
                  {plan.popular && (
                    <div className="bg-[#14b8a6] text-white py-1 px-5 absolute top-0 right-0 text-xs font-bold rounded-bl-lg">
                      Most Popular
                    </div>
                  )}
                  <div className="p-7 flex flex-col h-full">
                    <h3 className="text-lg sm:text-xl font-bold mb-1 text-[#0f172a]">{plan.name}</h3>
                    <div className="mb-6">
                      <span className="text-2xl sm:text-4xl font-extrabold text-[#14b8a6]">${plan.price}</span>
                      <span className="text-[#64748b] text-base font-medium"> one-time</span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-[#0f172a]">
                          <FaCheckCircle className="text-[#14b8a6] mr-2 flex-shrink-0" />
                          <span className="text-sm sm:text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/get-quote"
                      className={`block w-full text-center py-3 rounded-lg font-bold text-base transition-all min-w-[180px] mx-auto ${plan.popular ? 'bg-[#14b8a6] hover:bg-[#0f172a] text-white' : 'bg-white hover:bg-[#14b8a6]/10 text-[#0f172a]'
                        }`}
                      onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                    >
                      Select Plan
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          className="py-10 sm:py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
        >
          <div className="container mx-auto px-2 sm:px-4">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-2 tracking-tight text-[#0f172a]">
                Why Choose Us
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-[#334155] max-w-xl mx-auto">Luxury logo design services, tailored for ambitious brands.</p>
            </div>
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="relative bg-gradient-to-br from-[#f1f5f9] via-white to-[#e0f7fa] rounded-2xl shadow-lg border border-[#14b8a6]/10 p-8 flex flex-col items-center group hover:shadow-2xl transition-all duration-300"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariant}
                >
                  {/* Icon and Title */}
                  <div className="flex items-center gap-2 mb-3">
                    {featureIcons[index]}
                    <span className="text-lg sm:text-xl text-[#0f172a] font-bold text-center">{feature}</span>
                  </div>
                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#64748b] text-center mb-2 leading-relaxed">
                    {index === 0 && "We create every design from scratch, tailored to your business and industry. Your brand will always stand out with a unique, custom look that leaves a lasting impression and sets you apart from competitors."}
                    {index === 1 && "Your satisfaction is our top priority. We offer unlimited revisions so you can request changes until your logo or branding is exactly how you want it—no extra charges, no hassle."}
                    {index === 2 && "We know time is money. Our team delivers high-quality branding and logo designs quickly, so you can launch your business or campaign without unnecessary delays."}
                    {index === 3 && "We stand behind our work. If you’re not completely satisfied with the final result, we offer a full money-back guarantee for your peace of mind."}
                    {index === 4 && "Our dedicated support team is always available to answer your questions, provide updates, and guide you through every step of the design process."}
                    {index === 5 && "You’ll receive all original source files, giving you full ownership and flexibility to use your designs anywhere, anytime, and for any purpose."}
                  </p>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#14b8a6] via-[#06b6d4] to-[#0ea5e9] rounded-full opacity-40 group-hover:opacity-80 transition-all"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section
          className="py-10 sm:py-16 bg-gradient-to-br from-[#f1f5f9] via-white to-[#e0f7fa]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
        >
          <div className="container mx-auto px-2 sm:px-4">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-2 tracking-tight text-[#0f172a]">
                Our Services
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-[#334155] max-w-xl mx-auto">Premium design solutions to elevate your brand identity.</p>
            </div>
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="relative group bg-white/60 backdrop-blur-lg border border-[#14b8a6]/20 rounded-3xl shadow-xl p-8 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/80"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariant}
                  style={{ minHeight: 340 }}
                >
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition">
                    <FaGem className="text-6xl text-[#14b8a6]" />
                  </div>
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#14b8a6] via-[#67e8f9] to-[#0ea5e9] flex items-center justify-center shadow-lg mb-6 border-4 border-white">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-16 h-16 object-cover rounded-full border-2 border-[#14b8a6]/30"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#0f172a] text-center drop-shadow">{service.title}</h3>
                  <p className="text-[#64748b] mb-5 text-center text-base font-medium">{service.description}</p>
                  <Link
                    to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-[#14b8a6] text-white font-bold shadow hover:bg-[#0f172a] transition"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                  >
                    Learn More <FaArrowRight />
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-8 sm:mt-12">
              <Link
                to="/services"
                className="inline-block bg-[#0f172a] hover:bg-[#14b8a6] text-white px-6 py-3 rounded-xl font-bold text-base shadow-lg transition-all min-w-[180px] text-center"
                onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
              >
                View All Services
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Portfolio Section */}
        <motion.section
          className="py-10 sm:py-16 bg-gradient-to-tr from-[#e0f7fa] via-white to-[#f1f5f9]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
        >
          <div className="container mx-auto px-2 sm:px-4">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-2 tracking-tight text-[#0f172a]">
                Our Portfolio
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-[#334155] max-w-xl mx-auto">Explore our recent logo and branding projects.</p>
            </div>
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
              {portfolioItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="relative group rounded-3xl overflow-hidden shadow-xl border border-[#14b8a6]/20 bg-white/70 backdrop-blur-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariant}
                  style={{ minHeight: 320 }}
                >
                  <div className="h-48 w-full overflow-hidden relative">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14b8a6]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 flex flex-col items-center">
                    <span className="text-xs sm:text-sm font-bold text-[#14b8a6] uppercase tracking-wider mb-1">{item.category}</span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0f172a] text-center mb-2">{item.title}</h3>
                    {/* View Details button removed as per request */}
                  </div>
                  {/* Overlay on hover  */}
                  <div className="absolute inset-0 bg-[#14b8a6]/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <span className="text-white text-lg font-bold mb-2">{item.title}</span>
                    <span className="text-white text-xs font-medium">{item.category}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-8 sm:mt-12">
              <Link
                to="/portfolio"
                className="inline-block bg-[#0f172a] hover:bg-[#14b8a6] text-white px-6 py-3 rounded-xl font-bold text-base shadow-lg transition-all min-w-[180px] text-center"
                onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
              >
                View Full Portfolio
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          className="py-10 sm:py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
        >
          <div className="container mx-auto px-2 sm:px-4">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 tracking-tight text-[#0f172a]">
                What Our Clients Say
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-[#334155] max-w-xl mx-auto">Hear from businesses who trusted us with their brand.</p>
            </div>
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              className="testimonial-swiper"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={testimonial.id}>
                  <motion.div
                    className="bg-white p-7 rounded-xl shadow-sm h-full flex flex-col border border-[#14b8a6]/10"
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardVariant}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#14b8a6]/30 mr-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0f172a] text-lg">{testimonial.name}</h4>
                        <p className="text-[#64748b] text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                    <div className="flex mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-[#14b8a6] text-lg" />
                      ))}
                    </div>
                    <p className="text-[#0f172a] flex-grow text-base">{testimonial.content}</p>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="py-6 sm:py-10 bg-gradient-to-r from-[#14b8a6] via-[#06b6d4] to-[#0ea5e9] text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
        >
          <div className="container mx-auto px-2 sm:px-4 flex flex-col items-center justify-center">
            <div className="max-w-xl w-full text-center mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-2 drop-shadow-lg tracking-tight">
                Ready to Get Started?
              </h2>
              <p className="text-sm sm:text-base md:text-lg font-medium mb-4 sm:mb-6 opacity-90">
                Let's create your brand identity.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full max-w-md">
              <Link
                to="/get-quote"
                className="flex-1 bg-white text-[#14b8a6] hover:bg-[#0f172a] hover:text-white px-6 py-3 rounded-xl font-bold text-base shadow-lg transition-all text-center border-2 border-white"
              >
                Get a Free Quote
              </Link>
              <Link
                to="/contact"
                className="flex-1 bg-transparent border-2 border-white hover:bg-white hover:text-[#14b8a6] text-white px-6 py-3 rounded-xl font-bold text-base shadow-lg transition-all text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
};