import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

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
					'2 Logo Concepts',
					'2 Revisions',
					'JPG & PNG Files',
					'3 Day Delivery',
				],
				popular: false,
			},
			{
				id: 2,
				name: 'Standard',
				price: 199,
				features: [
					'4 Logo Concepts',
					'Unlimited Revisions',
					'All File Formats',
					'Business Card Design',
					'2 Day Delivery',
				],
				popular: true,
			},
			{
				id: 3,
				name: 'Premium',
				price: 299,
				features: [
					'6 Logo Concepts',
					'Unlimited Revisions',
					'All File Formats',
					'Business Card & Stationery',
					'Social Media Kit',
					'1 Day Delivery',
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
					'3 Page Website',
					'Responsive Design',
					'Basic SEO',
					'5 Day Delivery',
				],
				popular: false,
			},
			{
				id: 2,
				name: 'Business',
				price: 599,
				features: [
					'7 Page Website',
					'Responsive Design',
					'SEO Optimization',
					'CMS Integration',
					'3 Day Delivery',
				],
				popular: true,
			},
			{
				id: 3,
				name: 'Enterprise',
				price: 999,
				features: [
					'15+ Page Website',
					'Custom Features',
					'Advanced SEO',
					'E-commerce',
					'Priority Support',
					'7 Day Delivery',
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
					'Logo Design',
					'Color Palette',
					'Basic Brand Guide',
					'3 Day Delivery',
				],
				popular: false,
			},
			{
				id: 2,
				name: 'Pro',
				price: 299,
				features: [
					'Logo & Stationery',
					'Brand Guidelines',
					'Social Media Kit',
					'5 Day Delivery',
				],
				popular: true,
			},
			{
				id: 3,
				name: 'Elite',
				price: 499,
				features: [
					'Full Brand Identity',
					'Brand Book',
					'Marketing Collateral',
					'10 Day Delivery',
				],
				popular: false,
			},
		],
	},
];

export default function Pricing() {
	const [activeTab, setActiveTab] = useState('logo');
	const activePlans =
		pricingTabs.find((tab) => tab.key === activeTab)?.plans || [];

	return (
		<div className="pt-20 min-h-screen bg-[#f8fafc] font-sans">
			{/* Section Header */}
			<section
				className="relative pt-32 pb-16 px-4 bg-gradient-to-br from-[#101828] via-[#16213e] to-[#14b8a6] text-white shadow-lg overflow-hidden"
				style={{
					minHeight: "340px",
				}}
			>
				<div className="max-w-2xl mt-3 mx-auto text-center relative z-10">
					<motion.h1
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-lg"
					>
						Our Pricing
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.15 }}
						className="text-lg md:text-xl text-gray-200 font-medium"
					>
						Select the perfect plan for your business. No hidden charges, no surprises—just value.
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

			{/* Tabs */}
			<section className="py-8">
				<div className="max-w-3xl mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="flex flex-wrap justify-center gap-4 mb-10"
					>
						{pricingTabs.map((tab) => (
							<motion.button
								key={tab.key}
								onClick={() => setActiveTab(tab.key)}
								whileTap={{ scale: 0.97 }}
								className={`px-7 py-2.5 rounded-full font-semibold text-base shadow-sm transition-all border ${
									activeTab === tab.key
										? 'bg-[#14b8a6] text-white border-[#14b8a6] shadow'
										: 'bg-white text-[#14b8a6] border-[#14b8a6]/30 hover:bg-[#14b8a6]/10'
								}`}
								style={{ minWidth: 120 }}
							>
								{tab.label}
							</motion.button>
						))}
					</motion.div>
				</div>
			</section>

			{/* Pricing Cards */}
			<section className="pb-16">
				<div className="max-w-6xl mx-auto px-4">
					<AnimatePresence mode="wait">
						<motion.div
							key={activeTab}
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 40 }}
							transition={{ duration: 0.5 }}
							className="grid grid-cols-1 md:grid-cols-3 gap-8"
						>
							{activePlans.map((plan, index) => (
								<motion.div
									key={plan.id}
									initial={{ opacity: 0, scale: 0.96, y: 30 }}
									animate={{ opacity: 1, scale: 1, y: 0 }}
									transition={{ duration: 0.5, delay: index * 0.10 }}
									whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(20,184,166,0.13)" }}
									className={`relative flex flex-col bg-white ${
										plan.popular
											? 'border-2 border-[#14b8a6] shadow-xl scale-105 z-10'
											: 'border border-[#e2e8f0] shadow'
									} rounded-2xl overflow-hidden`}
									style={{ transition: 'transform 0.2s' }}
								>
									{plan.popular && (
										<div className="bg-[#14b8a6] text-white py-1.5 px-6 absolute top-0 right-0 text-xs font-bold rounded-bl-lg shadow z-20">
											Most Popular
										</div>
									)}
									<div className="p-8 flex flex-col h-full">
										<h3 className="text-2xl font-bold mb-2 text-[#0f172a]">
											{plan.name}
										</h3>
										<div className="mb-6">
											<span className="text-4xl font-extrabold text-[#14b8a6]">
												${plan.price}
											</span>
											<span className="text-[#64748b] text-base font-medium ml-1">
												one-time
											</span>
										</div>
										<ul className="space-y-3 mb-8">
											{plan.features.map((feature, idx) => (
												<li key={idx} className="flex items-center text-[#0f172a]">
													<FaCheckCircle className="text-[#14b8a6] mr-2 flex-shrink-0" />
													<span className="text-base">{feature}</span>
												</li>
											))}
										</ul>
										<a
											href="/get-quote"
											className={`block w-full text-center py-3 rounded-lg font-bold text-base transition-all ${
												plan.popular
													? 'bg-[#14b8a6] hover:bg-[#0f172a] text-white'
													: 'bg-white hover:bg-[#14b8a6]/10 text-[#0f172a] border border-[#14b8a6]/10'
											}`}
										>
											Select Plan
										</a>
									</div>
								</motion.div>
							))}
						</motion.div>
					</AnimatePresence>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-12 bg-[#14b8a6] text-white">
				<div className="max-w-2xl mx-auto px-4 text-center">
					<motion.h2
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
					>
						Ready to Get Started?
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-base sm:text-lg max-w-xl mx-auto mb-6 font-medium"
					>
						Let's create a stunning logo and brand identity for your business.
					</motion.p>
					<div className="flex flex-col sm:flex-row flex-wrap gap-5 justify-center">
						<motion.a
							initial={{ opacity: 0, scale: 0.96 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.3 }}
							href="/get-quote"
							className="bg-white text-[#14b8a6] hover:bg-[#0f172a] hover:text-white px-8 py-3 rounded-lg font-bold text-lg transition-all text-center"
						>
							Get a Free Quote
						</motion.a>
						<motion.a
							initial={{ opacity: 0, scale: 0.96 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.4 }}
							href="/contact"
							className="bg-transparent border-2 border-white hover:bg-white hover:text-[#14b8a6] text-white px-8 py-3 rounded-lg font-bold text-lg transition-all text-center"
						>
							Contact Us
						</motion.a>
					</div>
				</div>
			</section>
		</div>
	);
}
