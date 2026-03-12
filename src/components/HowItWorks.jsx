import { motion } from 'framer-motion'
import { FiMousePointer, FiTruck, FiCheckCircle } from 'react-icons/fi'

const steps = [
  {
    step: '01',
    icon: <FiMousePointer className="text-3xl" />,
    title: 'Book Online',
    description: 'Fill in our quick booking form with your pickup, delivery, and parcel details.',
    color: 'from-royal to-electric',
  },
  {
    step: '02',
    icon: <FiTruck className="text-3xl" />,
    title: 'We Collect',
    description: 'Our driver arrives at your door to collect and securely handle your items.',
    color: 'from-electric to-blue-400',
  },
  {
    step: '03',
    icon: <FiCheckCircle className="text-3xl" />,
    title: 'Delivered & Tracked',
    description: 'Your parcel is delivered safely. Track every step with real-time GPS updates.',
    color: 'from-accent to-orange-400',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-visible w-full">
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="inline-block px-4 py-1.5 bg-electric/10 text-electric rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 tracking-wide uppercase">
            How It Works
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-navy mb-4 sm:mb-6 tracking-tight">
            Three Simple{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal to-electric">
              Steps
            </span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base sm:text-lg font-medium">
            Getting your parcel delivered is as easy as 1-2-3
          </p>
        </motion.div>

        {/* Steps - Horizontal/Vertical Stepper */}
        <div className="relative overflow-visible w-full">
          {/* Connector Line (desktop) */}
          <div className="hidden lg:block absolute top-[40px] left-[15%] right-[15%] h-0.5">
            <div className="w-full h-0.5 border-t-2 border-dashed border-gray-200" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-royal via-electric to-accent origin-left"
            />
          </div>

          {/* Connector Line (mobile - vertical) */}
          <div className="lg:hidden absolute top-[10%] bottom-[10%] left-[50%] -translate-x-[50%] w-0.5 border-l-2 border-dashed border-gray-200 hidden sm:block" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 sm:gap-16 lg:gap-8 px-4 sm:px-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="relative text-center group bg-white lg:bg-transparent rounded-3xl p-6 lg:p-0 shadow-lg lg:shadow-none border border-gray-100 lg:border-none"
              >
                {/* Step Number Circle */}
                <div className="relative mx-auto mb-6 sm:mb-8 w-max">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300`}>
                    {step.icon}
                  </div>
                  <div className="absolute top-[-8px] right-[-8px] sm:top-[-12px] sm:left-[-12px] sm:right-auto w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-accent z-20">
                    <span className="text-accent font-heading font-black text-xs">{step.step}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-heading font-black text-lg sm:text-xl text-navy mb-3 tracking-tight">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto font-medium">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
