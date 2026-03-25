import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FiShield, FiNavigation, FiAward, FiHeadphones } from 'react-icons/fi'

const stats = [
  { number: 500, suffix: '+', label: 'Deliveries Every Month', icon: '📦' },
  { number: 98, suffix: '%', label: 'On-Time Rate', icon: '⏱️' },
  { number: 5, suffix: '★', label: 'Client Rating', icon: '⭐' },
  { number: 60, suffix: 'min', label: 'Avg Collection', icon: '🚀' },
]

const pillars = [
  {
    icon: <FiShield className="text-xl" />,
    title: 'Every Parcel, Fully Protected',
    description: 'Handled with care and covered by comprehensive insurance.',
  },
  {
    icon: <FiNavigation className="text-xl" />,
    title: 'Live GPS From Pickup to Drop',
    description: 'Track your delivery live from pickup to doorstep.',
  },
  {
    icon: <FiAward className="text-xl" />,
    title: 'Ship With Total Confidence',
    description: 'Complete coverage for your goods, every single time.',
  },
  {
    icon: <FiHeadphones className="text-xl" />,
    title: 'Always On, Day or Night',
    description: 'Our team is available 24/7, every day of the year.',
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
    <span ref={ref} className="font-heading font-extrabold text-2xl sm:text-3xl text-accent tracking-tight">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function WhyChooseUs() {
  return (
    <div id="why-choose-us" className="overflow-hidden">
      {/* === STATS === */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-5 py-2 bg-accent/8 border border-accent/15 rounded-full mb-6"
            >
              <span className="text-accent font-bold text-[11px] uppercase tracking-[0.2em] block leading-none">
                Why Businesses Trust Us
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading font-extrabold text-3xl sm:text-4xl text-text-primary tracking-[-0.03em]"
            >
              The Numbers Speak <span className="text-accent">For Themselves.</span>
            </motion.h2>
          </div>

          {/* Compact Stat Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-[#FAFAF8] border border-border-subtle rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-400"
              >
                <div className="text-xl sm:text-2xl mb-2">{stat.icon}</div>
                <div className="mb-1">
                  <AnimatedNumber target={stat.number} suffix={stat.suffix} />
                </div>
                <p className="text-text-muted font-medium text-[10px] sm:text-xs uppercase tracking-[0.08em] sm:tracking-[0.1em]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === FEATURE PILLARS === */}
      <section className="bg-surface-light py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-white p-7 rounded-2xl border border-border-subtle hover:border-accent/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-400"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  {pillar.icon}
                </div>
                <h3 className="font-heading font-bold text-base text-text-primary mb-2 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed font-body">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
