import { motion } from 'framer-motion'
import { FiArrowRight, FiPhone } from 'react-icons/fi'

export default function CTABanner() {
  return (
    <section className="bg-[#0A0A0A] py-24 lg:py-32 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[150px] -translate-y-1/3 translate-x-1/3" />
      
      <div className="max-w-[900px] mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-5 py-2 bg-white/5 border border-white/8 rounded-full mb-8">
            <span className="text-white font-bold text-[11px] uppercase tracking-[0.2em] block leading-none">
              Start Your First Delivery
            </span>
          </div>
          
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-6 tracking-[-0.03em] leading-tight">
            Ready to Ship <span className="text-white">at the Speed of Business?</span>
          </h2>
          
          <p className="text-white/40 text-base sm:text-lg max-w-lg mx-auto mb-12 font-body leading-relaxed">
            Nationwide units on standby. Get your delivery quote today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#booking"
              className="btn-sheen group h-14 px-10 bg-white text-black border border-white/60 flex items-center justify-center gap-3 rounded-full font-bold uppercase tracking-[0.1em] text-sm glow-orange hover:bg-white/90 hover:scale-[1.03] transition-all duration-400 active:scale-95"
            >
              START MY DELIVERY <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+447896656811"
              className="group h-14 px-10 flex items-center justify-center gap-3 rounded-full font-bold uppercase tracking-[0.1em] text-sm hover:text-accent transition-all duration-400"
              style={{ border: '2px solid rgba(255,255,255,0.3)', color: '#FFFFFF' }}
            >
              <FiPhone className="text-white" /> CALL US +44 7896 656811
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
