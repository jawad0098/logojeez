export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-[#f1f5f9] py-8 mt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-bold text-lg text-[#14b8a6]">VIP Branding</div>
        <div className="flex gap-6 text-sm">
          <a href="/services" className="hover:text-[#14b8a6] transition-colors">Services</a>
          <a href="/portfolio" className="hover:text-[#14b8a6] transition-colors">Portfolio</a>
          <a href="/get-quote" className="hover:text-[#14b8a6] transition-colors">Get Quote</a>
          <a href="/contact" className="hover:text-[#14b8a6] transition-colors">Contact</a>
        </div>
        <div className="text-xs text-[#f1f5f9]/70">&copy; {new Date().getFullYear()} VIP Branding. All rights reserved.</div>
      </div>
    </footer>
  );
}
