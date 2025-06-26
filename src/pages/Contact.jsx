import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mapSrc, setMapSrc] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.858911964448!2d-74.0059412845937!3d40.71277597933013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQyJzQ2LjAiTiA3NMKwMDAnMjAuMCJX!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
  );
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setMapSrc(
            `https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`
          );
        },
        () => {
          // If user denies or error, keep default map
        }
      );
    }
  }, []);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Save contact message to Firestore
      await addDoc(collection(db, 'contactMessages'), {
        ...data,
        createdAt: new Date()
      });
      
      // Show success message and reset form
      setIsSubmitted(true);
      reset();
      
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
            Contact Us
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We'd love to hear from you. Get in touch with our team.
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

      {/* Contact Info & Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg border border-[#14b8a6]/10 p-8 flex flex-col justify-center"
            >
              <h2 className="text-3xl font-bold mb-6 text-[#0f172a]">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our services or want to discuss your project? Reach out to us using any of the methods below or fill out the contact form.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#14b8a6]/10 p-3 rounded-full mr-4">
                    <FaPhone className="text-[#14b8a6]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#0f172a]">Phone</h3>
                    <p className="text-gray-600">+1 (234) 567-8901</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#14b8a6]/10 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-[#14b8a6]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#0f172a]">Email</h3>
                    <p className="text-gray-600">info@logojeez.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#14b8a6]/10 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-[#14b8a6]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#0f172a]">Location</h3>
                    <p className="text-gray-600">123 Design Street<br />Creative City, 10001</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-3 text-[#0f172a]">Business Hours</h3>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </motion.div>
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg border border-[#14b8a6]/10 p-8"
            >
              <h2 className="text-2xl font-bold mb-6 text-[#0f172a]">Send Us a Message</h2>
              {isSubmitted ? (
                <div className="bg-green-50 text-green-700 p-4 rounded-md flex items-center mb-6">
                  <FaCheckCircle className="mr-3 text-green-500" />
                  <p>Thank you for your message! We'll get back to you soon.</p>
                </div>
              ) : null}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 mb-1">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#14b8a6] ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                      {...register('firstName', { required: 'First name is required' })}
                    />
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 mb-1">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#14b8a6] ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                      {...register('lastName', { required: 'Last name is required' })}
                    />
                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
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
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#14b8a6] ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
                    {...register('subject', { required: 'Subject is required' })}
                  />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#14b8a6] ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                    {...register('message', { required: 'Message is required' })}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
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
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center overflow-hidden">
            {/* Embedded Google Map */}
            <iframe
              title="Location Map"
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '100%', minWidth: '100%' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg w-full h-96"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-[#f1f5f9] via-[#e0f7fa] to-[#f1f5f9]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-3 text-[#14b8a6] drop-shadow">Frequently Asked Questions</h2>
            <p className="text-[#334155] max-w-2xl mx-auto text-lg font-medium">Find answers to some of our most commonly asked questions.</p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-[#14b8a6]/10 flex items-start gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#14b8a6]/10">
                <svg className="w-7 h-7 text-[#14b8a6]" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.93 6.36l-4.24 4.24a1 1 0 01-1.42 0l-2.12-2.12a1 1 0 111.42-1.42l1.41 1.41 3.53-3.53a1 1 0 111.42 1.42z"/></svg>
              </span>
              <div>
                <h3 className="font-bold text-lg mb-2 text-[#0f172a]">How long does the logo design process take?</h3>
                <p className="text-[#64748b]">Typically, our logo design process takes 7-10 business days from the initial consultation to the final delivery. However, the timeline may vary based on the complexity of the project and the number of revisions required.</p>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-[#14b8a6]/10 flex items-start gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#14b8a6]/10">
                <svg className="w-7 h-7 text-[#14b8a6]" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a1 1 0 000 2h12a1 1 0 100-2H4zm0 5a1 1 0 000 2h12a1 1 0 100-2H4zm0 5a1 1 0 000 2h12a1 1 0 100-2H4z"/></svg>
              </span>
              <div>
                <h3 className="font-bold text-lg mb-2 text-[#0f172a]">Do you offer unlimited revisions?</h3>
                <p className="text-[#64748b]">Yes, we offer unlimited revisions until you're completely satisfied with your logo design. We want to ensure that your final logo perfectly represents your brand vision.</p>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-[#14b8a6]/10 flex items-start gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#14b8a6]/10">
                <svg className="w-7 h-7 text-[#14b8a6]" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-1h2v1zm0-3H9V7h2v3z"/></svg>
              </span>
              <div>
                <h3 className="font-bold text-lg mb-2 text-[#0f172a]">What file formats will I receive?</h3>
                <p className="text-[#64748b]">You'll receive your logo in all standard formats including AI, EPS, PDF, JPG, and PNG files. This ensures that you have the right format for any application, whether print or digital.</p>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-[#14b8a6]/10 flex items-start gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#14b8a6]/10">
                <svg className="w-7 h-7 text-[#14b8a6]" fill="currentColor" viewBox="0 0 20 20"><path d="M8 2a2 2 0 00-2 2v2H5a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2v-8a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H8zm0 2h4v2H8V4zm8 4v8H4V8h12z"/></svg>
              </span>
              <div>
                <h3 className="font-bold text-lg mb-2 text-[#0f172a]">Do I own the copyright to my logo?</h3>
                <p className="text-[#64748b]">Absolutely. Once the project is completed and final payment is made, you own full copyright to the logo design and can use it however you wish.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}