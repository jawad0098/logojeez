import { useParams, Link } from 'react-router-dom';

const services = [
  {
    slug: 'logo-design',
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
    slug: 'brand-identity',
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
    slug: 'business-cards',
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
    slug: 'stationery-design',
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
    slug: 'website-design',
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
    slug: 'social-media-branding',
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

export default function ServiceDetail() {
  const { serviceSlug } = useParams();
  const service = services.find(
    s => s.slug === serviceSlug
  );

  if (!service) {
    return (
      <div className="pt-16 min-h-screen bg-[#f1f5f9] flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow border border-[#14b8a6]/10 text-center">
          <h2 className="text-2xl font-bold mb-2 text-[#0f172a]">Service Not Found</h2>
          <p className="mb-4 text-gray-600">Sorry, the requested service does not exist.</p>
          <Link to="/services" className="text-[#14b8a6] font-bold hover:underline">Back to Services</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-[#f1f5f9]">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-lg border border-[#14b8a6]/10">
          <img src={service.imageUrl} alt={service.title} className="w-full h-52 object-cover rounded-xl mb-4" />
          <h1 className="text-2xl font-bold text-[#0f172a] mb-1">{service.title}</h1>
          <p className="text-gray-700 mb-4 text-base">{service.description}</p>
          <h2 className="text-lg font-semibold text-[#14b8a6] mb-2">Features</h2>
          <ul className="list-disc pl-6 mb-5 text-gray-700 text-sm">
            {service.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          <div className="flex gap-3">
            <Link to="/get-quote" className="bg-[#14b8a6] hover:bg-[#0f172a] text-white px-5 py-2 rounded-lg font-bold transition-all text-sm">
              Get a Free Quote
            </Link>
            <Link to="/services" className="bg-white border border-[#14b8a6] text-[#14b8a6] hover:bg-[#14b8a6] hover:text-white px-5 py-2 rounded-lg font-bold transition-all text-sm">
              Back to Services
            </Link>
            {/* <Link to="/about" className="bg-transparent border-2 border-[#14b8a6] text-[#14b8a6] hover:bg-[#14b8a6] hover:text-white px-6 py-3 rounded-lg font-bold transition-all">
              About Us
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
