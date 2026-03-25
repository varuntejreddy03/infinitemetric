import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { FiPhone, FiArrowRight, FiMapPin } from 'react-icons/fi'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'How it Works', href: '#how-it-works' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [showAddress, setShowAddress] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close address popup when clicking outside
  useEffect(() => {
    const handleClick = () => setShowAddress(false)
    if (showAddress) {
      setTimeout(() => document.addEventListener('click', handleClick), 100)
      return () => document.removeEventListener('click', handleClick)
    }
  }, [showAddress])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 py-3`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className={`relative w-full px-4 sm:px-6 lg:px-8 rounded-[20px] border transition-all duration-700 flex items-center justify-between h-[64px] sm:h-[72px] ${
            scrolled || mobileOpen
              ? 'bg-white border-border-subtle shadow-[0_4px_30px_rgba(0,0,0,0.08)]'
              : 'bg-white border-border-subtle/60 shadow-sm'
          }`}>
            {/* Logo with address popup */}
            <div className="flex-shrink-0 relative">
              <button
                onClick={(e) => { e.stopPropagation(); setShowAddress(!showAddress) }}
                className="relative group focus:outline-none flex items-center"
              >
                <img 
                  src="/logo.png" 
                  alt="Infinite Metric"
                  className="h-9 sm:h-11 lg:h-14 w-auto object-contain"
                />
              </button>

              {/* Address Popup */}
              <AnimatePresence>
                {showAddress && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 8 }}
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-full mt-3 left-0 w-72 p-5 bg-white rounded-2xl border border-border-subtle shadow-[0_20px_60px_rgba(0,0,0,0.12)] z-50 text-left"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                        <FiMapPin className="text-lg" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-text-muted">UK Headquarters</p>
                        <p className="text-text-primary font-bold text-sm leading-snug">Regal House, 70 London Road,<br/>Twickenham, TW1 3QS</p>
                        <p className="text-accent text-[9px] font-bold uppercase tracking-[0.2em] pt-1">United Kingdom</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Central Navigation */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.14em] transition-all duration-400 rounded-lg relative group text-text-primary/80 hover:text-accent"
                >
                  {link.name}
                  <div className="absolute bottom-1 left-5 right-5 h-[2px] bg-accent rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </a>
              ))}
            </div>

            {/* Action Group */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="flex flex-col items-end">
                <p className="text-[8px] font-bold uppercase tracking-[0.2em] leading-none mb-1.5 text-text-muted/60">Contact Number</p>
                <a 
                  href="tel:+447896656811" 
                  className="font-bold text-sm tracking-tight flex items-center gap-2 text-text-primary hover:text-accent transition-colors duration-300"
                >
                  <FiPhone className="text-accent text-sm" /> +44 7896 656811
                </a>
              </div>
              
              <a
                href="#booking"
                className="btn-sheen group px-7 py-3 font-bold text-[11px] uppercase tracking-[0.12em] rounded-full transition-all duration-500 active:scale-95 flex items-center gap-2.5 bg-accent text-white hover:scale-[1.03] glow-orange"
              >
                GET A QUOTE <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl transition-colors border bg-surface-light text-text-primary border-border-subtle overflow-hidden group"
            >
              <div className="relative z-10 transition-transform duration-500 group-active:scale-90">
                {mobileOpen ? <HiX size={20} /> : <HiMenu size={20} />}
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-white lg:hidden flex flex-col"
          >
            <div className="h-24" />
            
            <div className="flex-1 flex flex-col items-center justify-center gap-8 px-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="text-2xl sm:text-3xl font-bold text-text-primary hover:text-accent transition-colors duration-300 tracking-tight"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 space-y-3"
            >
              <a href="tel:+447896656811" className="w-full py-4 flex items-center justify-center gap-3 bg-surface-light border border-border-subtle rounded-2xl text-text-primary">
                <FiPhone className="text-accent text-lg" />
                <span className="text-base font-bold tracking-tight">+44 7896 656811</span>
              </a>
              <a href="#booking" onClick={() => setMobileOpen(false)} className="btn-sheen w-full py-4 bg-accent text-white flex items-center justify-center gap-3 rounded-2xl font-bold uppercase tracking-[0.1em] text-sm glow-orange active:scale-95 transition-all">
                GET A QUOTE <FiArrowRight />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
