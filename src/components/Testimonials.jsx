import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { HiStar } from 'react-icons/hi'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    company: 'Mitchell & Co. Solicitors',
    text: "Absolutely brilliant service. We needed urgent legal documents delivered same-day across London and Infinite Metric handled it flawlessly. They're our go-to courier now.",
  },
  {
    name: 'James Henderson',
    company: 'TechFlow Solutions',
    text: "We ship hardware to clients weekly and IM has never let us down. Real-time tracking, professional drivers, and genuinely helpful customer support. Highly recommended.",
  },
  {
    name: 'Priya Sharma',
    company: 'HomeStyle Interiors',
    text: "Used their service for our office relocation. Everything was packed with care, delivered on time, and the team was incredibly professional. Will use again!",
  },
  {
    name: 'David Clarke',
    company: 'Clarke Family',
    text: "Sent a birthday gift to my mum in Edinburgh from London. Next-day delivery, beautifully handled, and I could track it the whole way. Exceeded all expectations.",
  },
  {
    name: 'Emily Watson',
    company: 'Watson E-Commerce Ltd',
    text: "As an e-commerce business, reliable delivery is everything. Infinite Metric's consistency and speed have helped us maintain our 5-star seller rating.",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(next, 7000)
    return () => clearInterval(interval)
  }, [next])

  return (
    <section id="testimonials" className="bg-surface-light py-24 lg:py-32 relative">
      <div className="max-w-[1000px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2 bg-accent/8 border border-accent/15 rounded-full mb-6"
          >
            <span className="text-accent font-bold text-[11px] uppercase tracking-[0.2em] block leading-none">
              Trusted by Enterprises
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-extrabold text-3xl sm:text-4xl text-text-primary tracking-[-0.03em]"
          >
            What Our Clients <span className="text-accent">Say About Us.</span>
          </motion.h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-3xl border border-border-subtle p-10 sm:p-14 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
            >
              {/* Stars */}
              <div className="flex gap-1 text-accent text-lg mb-6">
                <HiStar /><HiStar /><HiStar /><HiStar /><HiStar />
              </div>

              {/* Quote */}
              <blockquote className="mb-10">
                <p className="text-text-primary text-xl sm:text-2xl font-heading font-bold leading-[1.4] tracking-tight italic">
                  "{testimonials[current].text}"
                </p>
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold text-lg">
                    {testimonials[current].name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary text-base">
                      {testimonials[current].name}
                    </h4>
                    <p className="text-accent text-sm font-medium">
                      {testimonials[current].company}
                    </p>
                  </div>
                </div>

                {/* Nav Arrows */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prev}
                    className="w-10 h-10 rounded-full border border-border-subtle flex items-center justify-center text-text-muted hover:border-accent hover:text-accent transition-all duration-300"
                  >
                    <FiChevronLeft className="text-base" />
                  </button>
                  <button
                    onClick={next}
                    className="w-10 h-10 rounded-full border border-border-subtle flex items-center justify-center text-text-muted hover:border-accent hover:text-accent transition-all duration-300"
                  >
                    <FiChevronRight className="text-base" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${current === i ? 'bg-accent w-6' : 'bg-border-subtle hover:bg-text-muted/30'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
