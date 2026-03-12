import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMapPin, FiPackage, FiTruck, FiPhone, FiArrowRight } from 'react-icons/fi'

export default function BookingWidget() {
  const [form, setForm] = useState({
    pickup: '',
    delivery: '',
    parcelSize: '',
    serviceType: 'same-day',
    phone: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!form.pickup.trim()) newErrors.pickup = 'Pickup location is required'
    if (!form.delivery.trim()) newErrors.delivery = 'Delivery location is required'
    if (!form.parcelSize) newErrors.parcelSize = 'Please select parcel size'
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required'
    else if (!/^[\d\s+()-]{7,15}$/.test(form.phone)) newErrors.phone = 'Enter a valid phone number'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 4000)
      setForm({ pickup: '', delivery: '', parcelSize: '', serviceType: 'same-day', phone: '' })
    }
  }

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  return (
    <section id="booking" className="relative -mt-8 sm:-mt-12 lg:-mt-16 z-30 px-4 sm:px-6 lg:px-8 overflow-visible w-full min-h-[400px] mb-0">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-6xl mx-auto"
      >
        <div className="relative group">
          {/* Animated Glow Border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-royal via-electric to-accent rounded-[32px] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
          
          <div className="relative glass shadow-2xl rounded-[28px] p-1">
            <div className="bg-navy/80 backdrop-blur-2xl rounded-[26px] p-6 sm:p-12">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
                <div className="text-left">
                  <span className="text-electric font-bold text-[10px] sm:text-xs uppercase tracking-widest mb-2 sm:mb-3 block">Instant Logistics Solutions</span>
                  <h2 className="font-heading font-black text-2xl sm:text-4xl lg:text-5xl text-white">
                    Start Your{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-blue-300">
                      Booking
                    </span>
                  </h2>
                </div>
                <p className="text-white/40 text-xs sm:text-sm max-w-xs md:text-right mt-2 md:mt-0">Enter your details for an instant quote and immediate collection across the UK.</p>
              </div>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-8 p-4 sm:p-6 rounded-2xl bg-[#059669]/10 border border-[#059669]/30 text-center"
                >
                  <span className="text-[#10b981] font-bold text-sm sm:text-lg flex items-center justify-center gap-2">
                    <HiCheckCircle className="text-xl sm:text-2xl" /> Request Received! We're preparing your quote.
                  </span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {/* Pickup */}
                  <div className="space-y-2 sm:space-y-3">
                    <label className="flex items-center gap-2 text-white/50 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em]">
                      <FiMapPin className="text-electric" /> Pickup Address
                    </label>
                    <div className="relative group/field">
                      <input
                        type="text"
                        placeholder="e.g. London W1"
                        value={form.pickup}
                        onChange={(e) => handleChange('pickup', e.target.value)}
                        className={`w-full px-5 py-3 sm:px-6 sm:py-4 bg-white/5 border-2 ${
                          errors.pickup ? 'border-red-500/50' : 'border-white/10'
                        } rounded-xl sm:rounded-2xl text-white text-sm sm:text-base font-medium focus:border-electric transition-all outline-none placeholder:text-white/20`}
                      />
                      {errors.pickup && <span className="text-red-500 text-[9px] sm:text-[10px] font-bold mt-1 block">{errors.pickup}</span>}
                    </div>
                  </div>

                  {/* Delivery */}
                  <div className="space-y-2 sm:space-y-3">
                    <label className="flex items-center gap-2 text-white/50 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em]">
                      <FiMapPin className="text-accent" /> Delivery Address
                    </label>
                    <div className="relative group/field">
                      <input
                        type="text"
                        placeholder="e.g. Manchester M1"
                        value={form.delivery}
                        onChange={(e) => handleChange('delivery', e.target.value)}
                        className={`w-full px-5 py-3 sm:px-6 sm:py-4 bg-white/5 border-2 ${
                          errors.delivery ? 'border-red-500/50' : 'border-white/10'
                        } rounded-xl sm:rounded-2xl text-white text-sm sm:text-base font-medium focus:border-accent transition-all outline-none placeholder:text-white/20`}
                      />
                      {errors.delivery && <span className="text-red-500 text-[9px] sm:text-[10px] font-bold mt-1 block">{errors.delivery}</span>}
                    </div>
                  </div>

                  {/* Parcel Details */}
                  <div className="space-y-2 sm:space-y-3">
                    <label className="flex items-center gap-2 text-white/50 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em]">
                      <FiPackage className="text-electric" /> Parcel Type
                    </label>
                    <div className="relative group/field">
                      <select
                        value={form.parcelSize}
                        onChange={(e) => handleChange('parcelSize', e.target.value)}
                        className={`w-full px-5 py-3 sm:px-6 sm:py-4 bg-white/5 border-2 ${
                          errors.parcelSize ? 'border-red-500/50' : 'border-white/10'
                        } rounded-xl sm:rounded-2xl text-white text-sm sm:text-base font-medium focus:border-electric transition-all outline-none appearance-none cursor-pointer`}
                      >
                        <option value="" className="bg-navy">Select Type</option>
                        <option value="small" className="bg-navy">Small (Under 5kg)</option>
                        <option value="medium" className="bg-navy">Medium (5-20kg)</option>
                        <option value="large" className="bg-navy">Large (20-50kg)</option>
                        <option value="pallet" className="bg-navy">Pallet / Heavy</option>
                      </select>
                      <div className="absolute right-5 sm:right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                        <FiArrowRight className="text-white/30 rotate-90" />
                      </div>
                      {errors.parcelSize && <span className="text-red-500 text-[9px] sm:text-[10px] font-bold mt-1 block">{errors.parcelSize}</span>}
                    </div>
                  </div>

                  {/* Service */}
                  <div className="space-y-2 sm:space-y-3">
                    <label className="flex items-center gap-2 text-white/50 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em]">
                      <FiTruck className="text-electric" /> Service Speed
                    </label>
                    <div className="relative group/field">
                      <select
                        value={form.serviceType}
                        onChange={(e) => handleChange('serviceType', e.target.value)}
                        className="w-full px-5 py-3 sm:px-6 sm:py-4 bg-white/5 border-2 border-white/10 rounded-xl sm:rounded-2xl text-white text-sm sm:text-base font-medium focus:border-electric transition-all outline-none appearance-none cursor-pointer"
                      >
                        <option value="same-day" className="bg-navy">Same Day Express</option>
                        <option value="next-day" className="bg-navy">Standard Next Day</option>
                        <option value="international" className="bg-navy">Global Shipping</option>
                      </select>
                      <div className="absolute right-5 sm:right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                        <FiArrowRight className="text-white/30 rotate-90" />
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-2 sm:space-y-3">
                    <label className="flex items-center gap-2 text-white/50 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em]">
                      <FiPhone className="text-electric" /> Phone Number
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        placeholder="+44 7XXX XXXXXX"
                        value={form.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className={`w-full px-5 py-3 sm:px-6 sm:py-4 bg-white/5 border-2 ${
                          errors.phone ? 'border-red-500/50' : 'border-white/10'
                        } rounded-xl sm:rounded-2xl text-white text-sm sm:text-base font-medium focus:border-electric transition-all outline-none placeholder:text-white/20`}
                      />
                      {errors.phone && <span className="text-red-500 text-[9px] sm:text-[10px] font-bold mt-1 block">{errors.phone}</span>}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex items-end mt-2 sm:mt-0">
                    <button
                      type="submit"
                      className="w-full px-6 py-4 sm:px-8 bg-[#FF6B2B] text-white font-black text-sm sm:text-lg rounded-xl sm:rounded-2xl hover:bg-orange-600 shadow-[0_15px_30px_rgba(255,107,43,0.3)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 active:scale-95"
                    >
                      BOOK NOW <FiArrowRight className="text-lg sm:text-xl" />
                    </button>
                  </div>
                </div>
              </form>

              {/* Bottom Trust Line */}
              <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                <div className="text-center group/icon cursor-default">
                  <p className="text-white font-bold text-[10px] sm:text-xs mb-1 group-hover:text-electric transition-colors">FULLY INSURED</p>
                  <p className="text-white/20 text-[8px] sm:text-[9px] uppercase tracking-widest font-bold">Standard Protection</p>
                </div>
                <div className="text-center group/icon cursor-default">
                  <p className="text-white font-bold text-[10px] sm:text-xs mb-1 group-hover:text-electric transition-colors">TRACKED LIVE</p>
                  <p className="text-white/20 text-[8px] sm:text-[9px] uppercase tracking-widest font-bold">GPS Real-Time</p>
                </div>
                <div className="text-center group/icon cursor-default">
                  <p className="text-white font-bold text-[10px] sm:text-xs mb-1 group-hover:text-electric transition-colors">24/7 SUPPORT</p>
                  <p className="text-white/20 text-[8px] sm:text-[9px] uppercase tracking-widest font-bold">Always Available</p>
                </div>
                <div className="text-center group/icon cursor-default">
                  <p className="text-white font-bold text-[10px] sm:text-xs mb-1 group-hover:text-electric transition-colors">DATA SECURE</p>
                  <p className="text-white/20 text-[8px] sm:text-[9px] uppercase tracking-widest font-bold">SSL Encrypted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
