import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaPaperPlane } from 'react-icons/fa';
import { collection, addDoc, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export default function GetQuote() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastStatus, setLastStatus] = useState(null);
  const [lastStatusLoading, setLastStatusLoading] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
  const selectedService = watch('service') || '';

  const services = [
    { id: 'logo-design', name: 'Logo Design', price: 'From $99' },
    { id: 'brand-identity', name: 'Brand Identity', price: 'From $299' },
    { id: 'business-cards', name: 'Business Cards', price: 'From $49' },
    { id: 'stationery', name: 'Stationery Design', price: 'From $149' },
    { id: 'website-design', name: 'Website Design', price: 'From $499' },
    { id: 'social-media', name: 'Social Media Branding', price: 'From $199' },
  ];

  const budgetRanges = [
    { id: 'under-100', name: 'Under $100' },
    { id: '100-300', name: '$100 - $300' },
    { id: '300-500', name: '$300 - $500' },
    { id: '500-1000', name: '$500 - $1,000' },
    { id: 'over-1000', name: 'Over $1,000' },
  ];

  // Watch email input
  useEffect(() => {
    setUserEmail(watch('email'));
  }, [watch('email')]);

  // Fetch last quote status for this email
  useEffect(() => {
    if (!userEmail) {
      setLastStatus(null);
      return;
    }
    setLastStatusLoading(true);
    (async () => {
      try {
        const q = query(
          collection(db, 'quoteRequests'),
          orderBy('createdAt', 'desc')
        );
        const snapshot = await getDocs(q);
        const found = snapshot.docs
          .map(doc => ({ id: doc.id, ...doc.data() }))
          .find(q => q.email === userEmail);
        setLastStatus(found?.status || null);
      } catch {
        setLastStatus(null);
      }
      setLastStatusLoading(false);
    })();
  }, [userEmail, isSubmitted]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Save quote request to Firestore
      await addDoc(collection(db, 'quoteRequests'), {
        ...data,
        createdAt: new Date()
      });
      
      // Show success message and reset form
      setIsSubmitted(true);
      reset();
      
      // Scroll to top of page
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-16 bg-[#f1f5f9] min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#101828] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get a Free Quote
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Fill out the form below to receive a custom quote for your project.
          </motion.p>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Show last status if available */}
            {userEmail && (
              <div className="mb-6">
                {lastStatusLoading ? (
                  <div className="text-gray-500 text-center">Checking request status...</div>
                ) : lastStatus === 'accepted' ? (
                  <div className="bg-green-50 text-green-700 p-3 rounded text-center font-bold">
                    Your last quote request has been <span className="text-green-800">Accepted</span>.
                  </div>
                ) : lastStatus === 'rejected' ? (
                  <div className="bg-red-50 text-red-700 p-3 rounded text-center font-bold">
                    Your last quote request has been <span className="text-red-800">Rejected</span>.
                  </div>
                ) : lastStatus === null ? null : (
                  <div className="bg-yellow-50 text-yellow-700 p-3 rounded text-center font-bold">
                    Your last quote request is <span className="text-yellow-800">Pending</span>.
                  </div>
                )}
              </div>
            )}

            {isSubmitted && (
              <motion.div 
                className="bg-green-50 border-l-4 border-green-500 p-4 mb-8 rounded-md"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3 text-lg" />
                  <div>
                    <h3 className="font-bold">Quote Request Submitted Successfully!</h3>
                    <p className="text-green-700">Thank you for your interest. Our team will review your project details and get back to you within 24 hours with a custom quote.</p>
                  </div>
                </div>
              </motion.div>
            )}

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#14b8a6]/10">
              <h2 className="text-2xl font-bold mb-6 text-[#0f172a]">Tell Us About Your Project</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Personal Information */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4 pb-2 border-b text-[#14b8a6]">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="firstName" className="block text-gray-700 mb-1">First Name *</label>
                      <input
                        type="text"
                        id="firstName"
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#14b8a6] ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                        {...register('firstName', { required: 'First name is required' })}
                      />
                      {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-gray-700 mb-1">Last Name *</label>
                      <input
                        type="text"
                        id="lastName"
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#14b8a6] ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                        {...register('lastName', { required: 'Last name is required' })}
                      />
                      {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-1">Email *</label>
                      <input
                        type="email"
                        id="email"
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#14b8a6] ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14b8a6]"
                        {...register('phone')}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-gray-700 mb-1">Company/Business Name</label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14b8a6]"
                      {...register('company')}
                    />
                  </div>
                </div>
                {/* Project Information */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4 pb-2 border-b text-[#14b8a6]">Project Information</h3>
                  <div className="mb-4">
                    <label htmlFor="service" className="block text-gray-700 mb-1">Service Required *</label>
                    <select
                      id="service"
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#14b8a6] ${errors.service ? 'border-red-500' : 'border-gray-300'}`}
                      {...register('service', { required: 'Please select a service' })}
                    >
                      <option value="">Select a service</option>
                      {services.map(service => (
                        <option key={service.id} value={service.id}>{service.name}</option>
                      ))}
                    </select>
                    {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>}
                    {selectedService && (
                      <p className="text-[#14b8a6] mt-2 font-medium">
                        Typical pricing: {services.find(s => s.id === selectedService)?.price}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label htmlFor="budget" className="block text-gray-700 mb-1">Budget Range *</label>
                    <select
                      id="budget"
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#14b8a6] ${errors.budget ? 'border-red-500' : 'border-gray-300'}`}
                      {...register('budget', { required: 'Please select a budget range' })}
                    >
                      <option value="">Select your budget</option>
                      {budgetRanges.map(range => (
                        <option key={range.id} value={range.id}>{range.name}</option>
                      ))}
                    </select>
                    {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>}
                  </div>
                  <div className="mb-4">
                    <label htmlFor="timeline" className="block text-gray-700 mb-1">Project Timeline</label>
                    <select
                      id="timeline"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14b8a6]"
                      {...register('timeline')}
                    >
                      <option value="">Select timeline</option>
                      <option value="urgent">Urgent (1-3 days)</option>
                      <option value="standard">Standard (1-2 weeks)</option>
                      <option value="flexible">Flexible (2+ weeks)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="description" className="block text-gray-700 mb-1">Project Description *</label>
                    <textarea
                      id="description"
                      rows="5"
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#14b8a6] ${errors.description ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Please describe your project, your business, and any specific requirements or ideas you have for your logo/design..."
                      {...register('description', { required: 'Project description is required' })}
                    ></textarea>
                    {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
                  </div>
                </div>
                {/* How did you hear about us */}
                <div className="mb-8">
                  <label htmlFor="referral" className="block text-gray-700 mb-1">How did you hear about us?</label>
                  <select
                    id="referral"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14b8a6]"
                    {...register('referral')}
                  >
                    <option value="">Select an option</option>
                    <option value="google">Google Search</option>
                    <option value="social">Social Media</option>
                    <option value="friend">Friend or Colleague</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="bg-[#14b8a6] hover:bg-[#0f172a] text-white px-6 py-3 rounded-lg font-bold transition-all w-full flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></span>
                  ) : (
                    <FaPaperPlane className="mr-2" />
                  )}
                  {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}