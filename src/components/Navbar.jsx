import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { FiPhone, FiMail, FiInstagram, FiTwitter, FiFacebook } from 'react-icons/fi'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Coverage', href: '#coverage' },
  { name: 'Reviews', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
]

const socials = [
  { icon: <FiInstagram />, href: '#', label: 'Instagram' },
  { icon: <FiTwitter />, href: '#', label: 'Twitter' },
  { icon: <FiFacebook />, href: '#', label: 'Facebook' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [mobileOpen])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? 'bg-[#0A0F2C]/90 backdrop-blur-[20px] shadow-2xl py-3 border-b border-white/5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group relative z-[60]">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#1A3CFF] to-[#4F8EF7] flex items-center justify-center overflow-hidden shadow-lg shadow-royal/20">
            <span className="text-white font-heading font-black text-lg leading-none">IM</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-heading font-bold text-lg leading-tight tracking-tight">
              Infinite Metric
            </span>
            <span className="text-[#4F8EF7] text-[10px] font-black tracking-widest uppercase">
              Limited
            </span>
          </div>
        </a>

        {/* Nav Links - Desktop */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-[0.9rem] font-black !text-white hover:text-[#FF6B2B] transition-colors duration-200 group uppercase tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF6B2B] group-hover:w-full transition-all duration-300 rounded-full" />
            </a>
          ))}
        </div>

        {/* CTA + Phone - Desktop */}
        <div className="hidden xl:flex items-center gap-8">
          <a href="tel:+441234567890" className="flex items-center gap-2 !text-white hover:text-[#FF6B2B] transition-all duration-200 text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            <FiPhone className="text-[#4F8EF7] scale-110" />
            <span className="font-black tracking-tight">0123 456 7890</span>
          </a>
          <a
            href="#booking"
            className="group relative inline-flex items-center justify-center px-8 py-3 bg-[#FF6B2B] !text-white font-black text-xs uppercase tracking-widest rounded-xl hover:bg-orange-600 shadow-[0_15px_30px_rgba(255,107,43,0.3)] transition-all duration-300 active:scale-95"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-[60] lg:hidden w-12 h-12 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all active:scale-90"
          id="mobile-menu-toggle"
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
        </button>
      </div>

      {/* Premium Full-Screen Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[#0A0F2C]/98 backdrop-blur-3xl lg:hidden flex flex-col pt-32 pb-12 px-8 overflow-y-auto"
          >
            {/* Background Grain/Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
            
            {/* Navigation Links */}
            <nav className="flex flex-col space-y-4 mb-16">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.2 }}
                  className="group flex flex-col"
                >
                  <span className="text-white/20 font-black text-xs uppercase tracking-[0.3em] mb-1">0{i + 1}</span>
                  <span className="text-4xl sm:text-5xl font-black text-white hover:text-[#4F8EF7] transition-colors tracking-tighter">
                    {link.name}
                  </span>
                </motion.a>
              ))}
            </nav>

            {/* Bottom Section: Info + Socials */}
            <div className="mt-auto pt-10 border-t border-white/5 space-y-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <p className="text-white/30 font-black text-[10px] uppercase tracking-[0.2em] mb-4">Operations Center</p>
                  <a href="tel:+441234567890" className="flex items-center gap-3 text-white text-xl font-bold hover:text-[#4F8EF7] transition-colors mb-2">
                    <FiPhone className="text-[#4F8EF7]" /> 0123 456 7890
                  </a>
                  <a href="mailto:info@infinitemetric.co.uk" className="flex items-center gap-3 text-white/60 text-sm font-semibold hover:text-white transition-colors">
                    <FiMail className="text-[#4F8EF7]" /> info@infinitemetric.co.uk
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <p className="text-white/30 font-black text-[10px] uppercase tracking-[0.2em] mb-4">Social Network</p>
                  <div className="flex gap-4">
                    {socials.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white text-xl hover:bg-[#4F8EF7] hover:border-[#4F8EF7] transition-all"
                      >
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="w-full"
              >
                <a
                  href="#booking"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full py-6 bg-[#FF6B2B] text-white font-black text-lg uppercase tracking-widest rounded-2xl shadow-2xl shadow-accent/20"
                >
                  Instantiate Booking
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
