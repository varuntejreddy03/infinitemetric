import { motion } from 'framer-motion'
import { FiMousePointer, FiTruck, FiCheckCircle, FiArrowRight } from 'react-icons/fi'

const steps = [
  {
    id: '01',
    icon: <FiMousePointer className="text-xl" />,
    title: 'Enter Your Details',
    description: "Tell us where you're sending from, where it's going, and what size parcel — get a price in seconds.",
  },
  {
    id: '02',
    icon: <FiTruck className="text-xl" />,
    title: 'Driver at Your Door',
    description: "We assign the nearest driver to your pickup. Expect a knock within 60 minutes of booking.",
  },
  {
    id: '03',
    icon: <FiCheckCircle className="text-xl" />,
    title: 'Delivered With Proof',
    description: "Your parcel is tracked live the entire journey. You get digital proof the moment it's delivered.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#0A0A0A] py-24 lg:py-32 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2 bg-white/5 border border-white/20 rounded-full mb-6"
          >
            <span className="text-white font-bold text-[11px] uppercase tracking-[0.2em] block leading-none">
              How It Works
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-[-0.03em] mb-4"
          >
            From Booking to <span className="text-white">Doorstep in 3 Steps.</span>
          </motion.h2>
          <p className="text-white/40 max-w-lg mx-auto text-base leading-relaxed font-body">
            Simple, fast, and transparent — that's how we operate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 backdrop-blur-sm hover:bg-white/[0.06] hover:border-white/25 transition-all duration-400 group"
            >
              {/* Step Number */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/25 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                  {step.icon}
                </div>
                <span className="text-white/10 font-heading font-extrabold text-5xl tracking-tighter">{step.id}</span>
              </div>
              
              <h3 className="font-heading font-bold text-lg text-white mb-3 tracking-tight">
                {step.title}
              </h3>
              <p className="text-white/40 text-sm leading-[1.7] font-body">
                {step.description}
              </p>

              {/* Arrow connector */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white/15 border border-white/30 items-center justify-center">
                  <FiArrowRight className="text-white text-xs" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
