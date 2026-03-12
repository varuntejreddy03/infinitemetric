import { FiMail, FiPhone, FiMapPin, FiArrowUpRight } from 'react-icons/fi'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const serviceLinks = [
  { name: 'Same Day Courier', href: '#services' },
  { name: 'UK Next Day', href: '#services' },
  { name: 'International', href: '#services' },
  { name: 'Movers & Packers', href: '#services' },
]

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Book Online', href: '#booking' },
  { name: 'Our Services', href: '#services' },
  { name: 'Why Choose Us', href: '#why-us' },
  { name: 'Coverage Area', href: '#coverage' },
  { name: 'FAQ', href: '#faq' },
]

const socials = [
  { icon: <FaFacebookF />, href: '#', label: 'Facebook' },
  { icon: <FaTwitter />, href: '#', label: 'Twitter' },
  { icon: <FaInstagram />, href: '#', label: 'Instagram' },
  { icon: <FaLinkedinIn />, href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0A0F2C] relative overflow-hidden w-full mb-0 pb-[40px] text-white">
      {/* Top gradient line */}
      <div className="h-1 bg-gradient-to-r from-[#1A3CFF] via-[#4F8EF7] to-[#FF6B2B]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8 sm:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-10 mb-12 sm:mb-14">
          {/* Brand */}
          <div className="lg:col-span-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1A3CFF] to-[#4F8EF7] flex items-center justify-center shadow-lg shadow-royal/20">
                <span className="text-white font-heading font-black text-lg">IM</span>
              </div>
              <div className="text-left">
                <span className="text-white font-heading font-bold text-lg block leading-tight">
                  Infinite Metric
                </span>
                <span className="text-[#4F8EF7] text-[10px] font-black tracking-widest uppercase">
                  Limited
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-8 font-medium">
              UK's most trusted premium courier, movers & packers service. Redefining precision logistics through speed, safety, and scale.
            </p>
            {/* Social Icons */}
            <div className="flex justify-center sm:justify-start gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-[#4F8EF7] hover:scale-110 hover:-translate-y-1 transition-all duration-300 border border-white/5"
                >
                  <span className="scale-110">{s.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="font-heading font-black text-white text-[10px] mb-6 sm:mb-8 uppercase tracking-[0.2em]">
              Navigation
            </h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Book Online', href: '#booking' },
                { name: 'Why Choose Us', href: '#why-us' },
                { name: 'Coverage', href: '#coverage' },
                { name: 'FAQ', href: '#faq' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/50 text-sm hover:text-white transition-all duration-300 flex items-center justify-center sm:justify-start gap-2 group font-semibold"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4F8EF7] opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h4 className="font-heading font-black text-white text-[10px] mb-6 sm:mb-8 uppercase tracking-[0.2em]">
              Our Verticals
            </h4>
            <ul className="space-y-4">
              {[
                { name: 'Same Day Courier', href: '#services' },
                { name: 'UK Next Day', href: '#services' },
                { name: 'International', href: '#services' },
                { name: 'Movers & Packers', href: '#services' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/50 text-sm hover:text-white transition-all duration-300 flex items-center justify-center sm:justify-start gap-2 group font-semibold"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B2B] opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h4 className="font-heading font-black text-white text-[10px] mb-6 sm:mb-8 uppercase tracking-[0.2em]">
              Headquarters
            </h4>
            <ul className="space-y-6">
              <li>
                <a href="tel:+441234567890" className="flex items-center justify-center sm:justify-start gap-4 text-white/50 hover:text-white transition-all duration-300 group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#4F8EF7]/20 transition-colors hidden sm:flex">
                    <FiPhone className="text-[#4F8EF7]" />
                  </div>
                  <span className="text-sm font-bold">0123 456 7890</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@infinitemetric.co.uk" className="flex items-center justify-center sm:justify-start gap-4 text-white/50 hover:text-white transition-all duration-300 group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#4F8EF7]/20 transition-colors hidden sm:flex">
                    <FiMail className="text-[#4F8EF7]" />
                  </div>
                  <span className="text-sm font-bold">info@infinitemetric.co.uk</span>
                </a>
              </li>
              <li className="flex items-center sm:items-start justify-center sm:justify-start gap-4 text-white/50">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 hidden sm:flex">
                  <FiMapPin className="text-[#4F8EF7]" />
                </div>
                <span className="text-sm font-medium leading-relaxed">
                  123 Logistics Lane<br />
                  London, EC1A 1BB<br />
                  United Kingdom
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 sm:pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-white/40 text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-center sm:text-left">
            © {new Date().getFullYear()} Infinite Metric Limited. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            <a href="#" className="text-white/40 text-[10px] sm:text-[11px] font-bold hover:text-white transition-colors uppercase tracking-widest">
              Privacy
            </a>
            <a href="#" className="text-white/40 text-[10px] sm:text-[11px] font-bold hover:text-white transition-colors uppercase tracking-widest">
              Terms
            </a>
            <a href="#" className="text-white/40 text-[10px] sm:text-[11px] font-bold hover:text-white transition-colors uppercase tracking-widest">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
