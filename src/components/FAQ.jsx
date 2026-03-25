import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown, FiArrowRight, FiMessageCircle } from 'react-icons/fi'

const faqs = [
  {
    q: 'What areas do you cover for same-day delivery?',
    a: 'We cover all major UK cities for same-day delivery including London, Birmingham, Manchester, Leeds, Edinburgh, and Glasgow. For other areas, please contact us and we\'ll arrange the fastest possible service.',
  },
  {
    q: 'How can I track my delivery?',
    a: 'Once your parcel is collected, you\'ll receive a unique tracking link via SMS and email. Our real-time GPS tracking allows you to see your parcel\'s exact location at any time.',
  },
  {
    q: 'Are my items insured during transit?',
    a: 'Yes, all shipments are fully insured. Standard coverage is included in every booking. For high-value items, we offer enhanced insurance options.',
  },
  {
    q: 'What size parcels can you deliver?',
    a: 'We handle everything from small envelopes and documents to large furniture and pallets. Our fleet includes cars and vans to accommodate any size requirement.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="bg-white py-24 lg:py-32 relative">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Side — Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-5 py-2 bg-accent/8 border border-accent/15 rounded-full mb-6"
            >
              <span className="text-accent font-bold text-[11px] uppercase tracking-[0.2em] block leading-none">
                Got Questions?
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading font-extrabold text-3xl sm:text-4xl text-text-primary tracking-[-0.03em] mb-5"
            >
              Everything You <span className="text-accent">Need to Know.</span>
            </motion.h2>
            <p className="text-text-muted text-base leading-relaxed font-body mb-8">
              Can't find what you're looking for? Get in touch with our team directly.
            </p>
            <a
              href="https://wa.me/447896656811?text=Hi%20Infinite%20Metric%2C%20I%20have%20a%20question."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-[#25D366] text-white rounded-full font-bold text-sm hover:bg-[#20bd5a] transition-all duration-300"
            >
              <FiMessageCircle className="text-lg" /> Chat on WhatsApp
            </a>
          </div>

          {/* Right Side — Accordion */}
          <div className="lg:col-span-8 space-y-3">
            {faqs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`bg-surface-light border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === i ? 'border-accent/20 shadow-md' : 'border-transparent hover:border-border-subtle'}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full p-6 flex items-center justify-between text-left outline-none group"
                >
                  <span className={`font-heading font-bold text-base sm:text-lg pr-6 tracking-tight transition-colors duration-300 ${openIndex === i ? 'text-accent' : 'text-text-primary'}`}>
                    {item.q}
                  </span>
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    openIndex === i 
                      ? 'bg-accent text-white rotate-180' 
                      : 'bg-white border border-border-subtle text-text-muted group-hover:border-accent/30'
                  }`}>
                    <FiChevronDown className="text-sm" />
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-text-muted text-sm leading-[1.7] font-body">
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
