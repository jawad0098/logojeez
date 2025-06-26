import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="pt-16 bg-[#f1f5f9] min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 bg-gradient-to-br from-[#101828] via-[#16213e] to-[#14b8a6] text-white shadow-lg overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We are passionate about helping businesses stand out with unique,
            memorable branding.
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

      {/* About Content Section */}
      <section className="py-20 bg-gradient-to-br from-[#f1f5f9] via-[#e0f7fa] to-[#f1f5f9]">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-[#14b8a6]/20 px-6 py-10 sm:px-14 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Left: About Text */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14b8a6] mb-4 tracking-tight drop-shadow text-left">
                Who We Are
              </h2>
              <p className="text-lg sm:text-xl text-[#334155] mb-7 font-medium text-left">
                VIP Branding is a creative agency specializing in logo design, brand identity, and digital solutions for ambitious businesses.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-4 bg-[#f8fafc]/80 rounded-xl p-5 shadow border border-[#14b8a6]/10">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#14b8a6]/10">
                    <svg className="w-7 h-7 text-[#14b8a6]" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.93 6.36l-4.24 4.24a1 1 0 01-1.42 0l-2.12-2.12a1 1 0 111.42-1.42l1.41 1.41 3.53-3.53a1 1 0 111.42 1.42z"/></svg>
                  </span>
                  <div>
                    <div className="font-bold text-[#0f172a] mb-1">Custom Designs</div>
                    <div className="text-[#64748b] text-sm">100% unique, tailored for every client</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-[#f8fafc]/80 rounded-xl p-5 shadow border border-[#14b8a6]/10">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#14b8a6]/10">
                    <svg className="w-7 h-7 text-[#14b8a6]" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a1 1 0 000 2h12a1 1 0 100-2H4zm0 5a1 1 0 000 2h12a1 1 0 100-2H4zm0 5a1 1 0 000 2h12a1 1 0 100-2H4z"/></svg>
                  </span>
                  <div>
                    <div className="font-bold text-[#0f172a] mb-1">Unlimited Revisions</div>
                    <div className="text-[#64748b] text-sm">We work until you’re 100% satisfied</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-[#f8fafc]/80 rounded-xl p-5 shadow border border-[#14b8a6]/10">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#14b8a6]/10">
                    <svg className="w-7 h-7 text-[#14b8a6]" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-1h2v1zm0-3H9V7h2v3z"/></svg>
                  </span>
                  <div>
                    <div className="font-bold text-[#0f172a] mb-1">Fast Turnaround</div>
                    <div className="text-[#64748b] text-sm">Quick delivery & responsive support</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-[#f8fafc]/80 rounded-xl p-5 shadow border border-[#14b8a6]/10">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#14b8a6]/10">
                    <svg className="w-7 h-7 text-[#14b8a6]" fill="currentColor" viewBox="0 0 20 20"><path d="M8 2a2 2 0 00-2 2v2H5a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2v-8a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H8zm0 2h4v2H8V4zm8 4v8H4V8h12z"/></svg>
                  </span>
                  <div>
                    <div className="font-bold text-[#0f172a] mb-1">Full Ownership</div>
                    <div className="text-[#64748b] text-sm">All source files delivered to you</div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <span className="inline-block bg-gradient-to-r from-[#14b8a6] to-[#0ea5e9] text-white font-semibold px-8 py-4 rounded-xl shadow-lg text-lg">
                  Ready to elevate your brand? Let’s work together!
                </span>
              </div>
            </div>
            {/* Right: Image or Illustration */}
            <div className="flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&w=600&q=80"
                alt="VIP Branding Team"
                className="rounded-3xl shadow-2xl border-4 border-[#14b8a6]/10 max-w-full h-auto object-cover"
                style={{ minHeight: 320, maxHeight: 420 }}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
