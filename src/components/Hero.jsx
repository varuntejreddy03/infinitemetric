import { motion } from 'framer-motion'
import { FiArrowRight, FiMapPin, FiTruck, FiShield, FiClock } from 'react-icons/fi'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden w-full bg-[#0A0A0A]">
      {/* === BACKGROUND === */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-dark.png"
          alt=""
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/95 via-[#0A0A0A]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/40" />
      </div>

      {/* === SUBTLE GRID === */}
      <div 
        className="absolute inset-0 z-[1] opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      {/* === AMBIENT GLOW === */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-accent/8 rounded-full blur-[200px] z-[1]" />

      {/* === CONTENT === */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-0 lg:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center min-h-screen">
          
          {/* LEFT — HEADLINE + CTA (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Company Name */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white tracking-[-0.03em] leading-[0.95] mb-6"
            >
              Infinite{' '}
              <span className="text-white">Metric</span>{' '}
              Logistics.
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-white/45 max-w-[520px] text-lg sm:text-xl leading-[1.7] font-body font-medium mb-12"
            >
              Nationwide reach with a multi-model fleet designed for high-velocity business demands.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <a
                href="#booking"
                className="btn-sheen group h-[58px] px-10 bg-white text-black border border-white/60 flex items-center justify-center gap-3 rounded-full font-bold uppercase tracking-[0.1em] text-[13px] glow-orange hover:bg-white/90 hover:scale-[1.03] transition-all duration-400 active:scale-95 whitespace-nowrap"
              >
                GET A QUOTE <FiArrowRight className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>
              <a
                href="#services"
                className="group h-[58px] px-10 bg-white text-[#0A0A0A] flex items-center justify-center gap-3 rounded-full font-bold uppercase tracking-[0.1em] text-[13px] hover:bg-white/90 transition-all duration-400 whitespace-nowrap"
              >
                See Our Fleet
              </a>
            </motion.div>
          </div>

          {/* RIGHT — ABOUT COMPANY (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="p-8 bg-white/[0.04] backdrop-blur-md border border-white/[0.08] rounded-3xl">
              {/* About Text */}
              <p className="text-white/50 text-sm leading-[1.8] font-body font-medium mb-8">
                Infinite Metric Logistics is a UK-based logistics company specialising in same-day and next-day delivery services. From small parcels to heavy haulage, we provide reliable, fully insured, and GPS-tracked courier solutions for businesses and individuals across the United Kingdom.
              </p>

              {/* Key Points */}
              <div className="grid grid-cols-2 gap-5">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FiMapPin className="text-white text-sm" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">UK-Wide Coverage</h4>
                    <p className="text-white/30 text-xs mt-0.5">Every major city and town</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FiClock className="text-white text-sm" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">Same-Day Delivery</h4>
                    <p className="text-white/30 text-xs mt-0.5">Collection within 60 mins</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FiShield className="text-white text-sm" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">Fully Insured</h4>
                    <p className="text-white/30 text-xs mt-0.5">Every parcel, every time</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FiTruck className="text-white text-sm" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">Multi-Model Fleet</h4>
                    <p className="text-white/30 text-xs mt-0.5">Small parcels, Small vans & heavy trucks</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Dark fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none z-20" />
    </section>
  )
}
