import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { HiCheckCircle } from 'react-icons/hi'

const trustBadges = [
  { icon: '⚡', label: 'Same-Day' },
  { icon: '📍', label: 'Tracked' },
  { icon: '🛡️', label: 'Insured' },
  { icon: '🇬🇧', label: 'UK-Wide' },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-visible w-full pb-32 sm:pb-40 lg:pb-48">
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-premium.png"
          alt="Logistics fleet"
          className="w-full h-full object-cover"
        />
        {/* Cinematic Backdrop */}
        <div className="absolute inset-0 bg-navy/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
      </div>

      {/* Floating Orbs - More intense for premium feel */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-royal/30 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-electric/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-4xl">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/20 mb-8"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse shadow-[0_0_10px_#10b981]" />
            <span className="text-white/90 text-sm font-bold tracking-wide uppercase">UK's Premier Logistics Partner</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-none tracking-tight mb-6 sm:mb-8"
          >
            Fast. Reliable.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-blue-300">
              Delivered Right.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-2xl text-white/80 max-w-2xl mb-10 sm:mb-12 leading-relaxed font-medium"
          >
            Premium courier, movers & packers services across the UK and internationally.
            Experience logistics excellence — driven by precision and care.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 mb-12 sm:mb-16 w-full"
          >
            <a
              href="#booking"
              className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-[#FF6B2B] text-white font-black text-base sm:text-lg rounded-2xl hover:bg-orange-600 shadow-[0_20px_40px_rgba(255,107,43,0.3)] hover:-translate-y-1 transition-all duration-500 active:scale-95 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book a Courier <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </a>
            <a
              href="#booking"
              className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-white/10 backdrop-blur-md text-white border border-white/20 font-black text-base sm:text-lg rounded-2xl hover:bg-white/20 hover:border-white/40 shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-500 active:scale-95 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative z-10">Get a Free Quote</span>
            </a>
          </motion.div>

          {/* Optimized Trust Infrastructure */}
          <div className="flex flex-wrap items-center gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-wrap gap-4 sm:gap-8"
            >
              {trustBadges.map((badge, i) => (
                <div key={badge.label} className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-electric/20 flex items-center justify-center group-hover:bg-electric/40 transition-colors">
                    <HiCheckCircle className="text-electric group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-white/40 text-[10px] font-black tracking-[0.3em] uppercase group-hover:text-white transition-colors">{badge.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="py-3 px-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center gap-4 group cursor-default hover:bg-white/10 transition-all"
            >
              <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#1A3CFF] bg-gradient-to-br from-gray-700 to-navy overflow-hidden">
                    <div className="w-full h-full bg-[#111640] flex items-center justify-center text-[10px] font-bold text-white/40">U{i}</div>
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                  <span className="text-white font-black text-xs tracking-tight">1,248 Live Deliveries</span>
                </div>
                <p className="text-white/30 text-[9px] font-bold uppercase tracking-widest">Active UK & Global Network</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Moved up to avoid widget collision */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-40 sm:bottom-48 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hidden lg:flex"
      >
        <span className="text-white/40 text-xs font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-electric"
          />
        </div>
      </motion.div>
    </section>
  )
}
