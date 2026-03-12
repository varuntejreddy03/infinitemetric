import { motion } from 'framer-motion'
import { FiClock, FiGlobe, FiTruck, FiPackage, FiArrowRight } from 'react-icons/fi'
import { HiOutlineLocationMarker } from 'react-icons/hi'

const services = [
  {
    icon: <FiClock className="text-3xl" />,
    title: 'Same Day Courier',
    description: 'Collected & delivered within hours. Urgent parcels handled with priority care across UK cities.',
    gradient: 'from-blue-500 to-electric',
    delay: 0,
  },
  {
    icon: <HiOutlineLocationMarker className="text-3xl" />,
    title: 'UK Next Day Delivery',
    description: 'Reliable next-day service to any UK address. Tracked from pickup to doorstep delivery.',
    gradient: 'from-electric to-blue-400',
    delay: 0.1,
  },
  {
    icon: <FiGlobe className="text-3xl" />,
    title: 'International Delivery',
    description: 'Ship worldwide with confidence. Door-to-door international courier with full customs support.',
    gradient: 'from-purple-500 to-electric',
    delay: 0.2,
  },
  {
    icon: <FiTruck className="text-3xl" />,
    title: 'Movers & Packers',
    description: 'Professional moving service for homes and offices. We pack, load, transport, and unpack with care.',
    gradient: 'from-accent to-orange-400',
    delay: 0.3,
  },
]

export default function Services() {
  return (
    <section id="services" className="pt-[60px] pb-[60px] lg:pb-[80px] bg-white relative overflow-visible w-full">
      {/* Precision Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-electric/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-royal/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-electric/10 text-electric rounded-full text-[9px] sm:text-[10px] font-black mb-4 sm:mb-6 tracking-[0.3em] uppercase"
          >
            Logistics Infrastructure
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-black text-3xl sm:text-5xl lg:text-7xl text-navy mb-6 sm:mb-8 tracking-tighter"
          >
            Specialized Delivery<br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal to-electric">
              Verticals
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-medium"
          >
            From high-velocity urban document delivery to complex international freight, we provide the backbone for your global supply chain.
          </motion.p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: service.delay }}
              className="group relative h-full"
            >
              <div className="relative h-full p-8 sm:p-10 bg-white rounded-[24px] sm:rounded-[32px] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-royal/5 transition-all duration-500 overflow-hidden flex flex-col cursor-pointer">
                {/* Visual Accent */}
                <div className={`absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-bl-full`} />
                
                {/* Icon Container */}
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-8 sm:mb-10 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                  {service.icon}
                </div>

                <h3 className="font-heading font-black text-xl sm:text-2xl text-navy mb-3 sm:mb-4 tracking-tight group-hover:text-royal transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 font-medium">
                  {service.description}
                </p>

                <div className="mt-auto pt-5 sm:pt-6 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-royal font-black text-[9px] sm:text-[10px] tracking-widest uppercase">Explore Service</span>
                  <div className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-royal group-hover:text-white flex items-center justify-center transition-all duration-300">
                    <FiArrowRight className="text-xs sm:text-sm group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

