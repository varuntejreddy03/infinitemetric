import { motion } from 'framer-motion'
import { FiArrowRight, FiPhone } from 'react-icons/fi'

export default function CTABanner() {
  return (
    <section className="relative py-24 lg:py-40 overflow-hidden w-full bg-[#0A0F2C]">
      {/* Cinematic Background Infrastructure */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#FF6B2B]/10 rounded-full blur-[120px] rotate-12" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#1A3CFF]/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[32px] sm:rounded-[48px] p-8 sm:p-12 lg:p-24 overflow-hidden relative">
          
          {/* Internal Accents */}
          <div className="absolute top-0 right-0 p-6 sm:p-8">
            <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full border border-white/5 flex items-center justify-center opacity-20">
              <FiArrowRight className="text-4xl sm:text-6xl text-white -rotate-45" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 sm:gap-12"
          >
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-block px-4 py-1.5 bg-[#FF6B2B]/10 text-[#FF6B2B] rounded-full text-[9px] sm:text-[10px] font-black tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-6 sm:mb-8 border border-[#FF6B2B]/20">
                Final Call to Action
              </div>
              <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-7xl xl:text-8xl text-white mb-6 sm:mb-8 tracking-tighter leading-[1.1] sm:leading-[0.95]">
                Ready to move<br className="hidden sm:block" />
                <span className="text-white/40">at the speed of</span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B2B] to-orange-300">
                  Precision?
                </span>
              </h2>
              <p className="text-white/40 text-base sm:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Bridge the gap between point A and B with the UK's most advanced logistical infrastructure. No distance too far, no parcel too small.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:flex-col xl:flex-row w-full lg:w-auto mt-4 lg:mt-0">
              <a
                href="#booking"
                className="group relative flex items-center justify-center gap-3 w-full sm:w-auto px-8 sm:px-10 lg:px-12 py-5 sm:py-6 bg-[#FF6B2B] text-white font-black text-base sm:text-lg lg:text-xl rounded-2xl hover:bg-orange-600 shadow-[0_25px_50px_rgba(255,107,43,0.3)] hover:-translate-y-1.5 transition-all duration-500 overflow-hidden active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative z-10 flex items-center gap-3">
                  Initiate Booking <FiArrowRight className="group-hover:translate-x-1.5 transition-transform" />
                </span>
              </a>
              <a
                href="tel:+441234567890"
                className="group flex items-center justify-center gap-4 w-full sm:w-auto px-8 sm:px-10 lg:px-12 py-5 sm:py-6 bg-white/5 border border-white/10 backdrop-blur-xl text-white font-black text-base sm:text-lg lg:text-xl rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer active:scale-95"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#1A3CFF] transition-colors shrink-0">
                  <FiPhone className="text-white text-base sm:text-lg" />
                </div>
                <span>Call Center</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
