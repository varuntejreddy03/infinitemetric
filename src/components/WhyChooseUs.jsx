import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FiShield, FiNavigation, FiAward, FiHeadphones } from 'react-icons/fi'

const stats = [
  { number: 500, suffix: '+', label: 'Deliveries/Month' },
  { number: 98, suffix: '%', label: 'On-Time Rate' },
  { number: 5, suffix: '★', label: 'Customer Rating' },
  { number: 2018, suffix: '', label: 'Established' },
]

const pillars = [
  {
    icon: <FiShield className="text-2xl" />,
    title: 'Safety First',
    description: 'Every parcel is handled with care and covered by comprehensive insurance.',
  },
  {
    icon: <FiNavigation className="text-2xl" />,
    title: 'Real-Time Tracking',
    description: 'Track your delivery live from pickup to doorstep with GPS updates.',
  },
  {
    icon: <FiAward className="text-2xl" />,
    title: 'Fully Insured',
    description: 'Complete coverage for your goods. Ship with confidence, always.',
  },
  {
    icon: <FiHeadphones className="text-2xl" />,
    title: '24/7 Support',
    description: 'Our team is always available to help, day or night, every day of the year.',
  },
]

function AnimatedNumber({ target, suffix }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 2000
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <span ref={ref} className="font-heading font-black text-white stat-number">
      {count.toLocaleString()}{suffix}
    </span>
  )
}
export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative section-padding bg-[#05081a] overflow-visible w-full">
      {/* Precision Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />
      
      {/* Cinematic Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-royal/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 sm:px-5 py-1.5 sm:py-2 glass border border-white/5 rounded-full mb-6 sm:mb-8"
          >
            <span className="text-electric text-[9px] sm:text-[10px] font-black tracking-[0.2em] sm:tracking-[0.3em] uppercase">Built on Trust, Driven by Data</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-black text-3xl sm:text-5xl lg:text-7xl text-white mb-6 sm:mb-8 tracking-tighter"
          >
            Logistics for the<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal via-electric to-blue-300">
              Modern Enterprise
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/40 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-medium"
          >
            We've redefined courier services by combining traditional reliability with cutting-edge technology for businesses across the globe.
          </motion.p>
        </div>

        {/* Premium Stats Row */}
        <div className="relative mb-20 sm:mb-40">
          <div className="absolute -inset-4 glass rounded-[40px] opacity-20 hidden sm:block" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/5 bg-white/[0.02] backdrop-blur-sm rounded-[24px] sm:rounded-[32px] border border-white/5 shadow-2xl overflow-hidden"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`p-6 sm:p-12 text-center sm:text-left group hover:bg-white/[0.02] transition-colors ${i % 2 === 0 ? 'border-r border-white/5 sm:border-0' : ''}`}
              >
                <div className="flex flex-col gap-1 items-center sm:items-start">
                  <span className="font-heading font-black text-white text-3xl sm:text-4xl lg:text-[clamp(2rem,4vw,3.5rem)]">
                    <AnimatedNumber target={stat.number} suffix={stat.suffix} />
                  </span>
                  <p className="text-white/30 text-[8px] sm:text-[10px] font-black uppercase tracking-[0.1em] sm:tracking-[0.2em] group-hover:text-electric transition-colors mt-1 sm:mt-0 text-center sm:text-left">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Value Pillars - SaaS Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] glass hover:bg-white/[0.05] border border-white/5 hover:border-electric/20 transition-all group items-center sm:items-start text-center sm:text-left"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-royal to-electric flex items-center justify-center text-white mb-6 sm:mb-8 group-hover:rotate-[10deg] transition-transform shadow-lg">
                {pillar.icon}
              </div>
              <h3 className="font-heading font-black text-lg sm:text-xl text-white mb-3 sm:mb-4 tracking-tight">{pillar.title}</h3>
              <p className="text-white/40 text-xs sm:text-sm leading-relaxed font-medium">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
