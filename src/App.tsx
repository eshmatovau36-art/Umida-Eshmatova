import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Smartphone, 
  Battery, 
  Cpu, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight, 
  Star, 
  CheckCircle2,
  Menu,
  X,
  Wrench
} from 'lucide-react';

const SERVICES = [
  {
    id: 1,
    title: "Ekran almashtirish",
    description: "Barcha turdagi smartfonlar uchun original va sifatli ekranlar.",
    icon: <Smartphone className="w-6 h-6" />,
    price: "150,000 so'mdan"
  },
  {
    id: 2,
    title: "Batareya almashtirish",
    description: "Telefoningiz quvvati tez tugayaptimi? Biz yordam beramiz.",
    icon: <Battery className="w-6 h-6" />,
    price: "80,000 so'mdan"
  },
  {
    id: 3,
    title: "Dasturiy ta'minot",
    description: "Proshivka, blokdan chiqarish va tizimni yangilash.",
    icon: <Cpu className="w-6 h-6" />,
    price: "50,000 so'mdan"
  },
  {
    id: 4,
    title: "Suvdan zarar ko'rgan",
    description: "Suv tushgan telefonlarni qayta tiklash va tozalash.",
    icon: <Wrench className="w-6 h-6" />,
    price: "100,000 so'mdan"
  }
];

const REVIEWS = [
  {
    id: 1,
    name: "Azizbek",
    text: "Xizmat juda tez va sifatli. iPhone ekranini 30 daqiqada almashtirib berishdi.",
    stars: 5
  },
  {
    id: 2,
    name: "Malika",
    text: "Narxlari hamyonbop, ustalari esa o'z ishining ustalari ekan.",
    stars: 5
  },
  {
    id: 3,
    name: "Jasur",
    text: "Kafolat berishgani juda ma'qul keldi. Rahmat!",
    stars: 4
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Smartphone className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold text-slate-900 font-display tracking-tight">PhoneFix</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Xizmatlar</a>
              <a href="#about" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Biz haqimizda</a>
              <a href="#reviews" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Sharhlar</a>
              <a href="#contact" className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">Bog'lanish</a>
            </div>

            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                <a href="#services" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Xizmatlar</a>
                <a href="#about" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Biz haqimizda</a>
                <a href="#reviews" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Sharhlar</a>
                <a href="#contact" className="block bg-blue-600 text-white text-center py-3 rounded-xl font-bold" onClick={() => setIsMenuOpen(false)}>Bog'lanish</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6">
                  Professional Telefon Servis
                </span>
                <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-[1.1]">
                  Telefoningizni <br />
                  <span className="text-blue-600">Yangi kabi</span> qiling
                </h1>
                <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                  Barcha turdagi smartfonlarni tezkor va sifatli ta'mirlaymiz. 
                  Original ehtiyot qismlar va 6 oygacha kafolat beramiz.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-2 group">
                    Xizmatga buyurtma berish
                    <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                    Narxlarni ko'rish
                  </button>
                </div>
                
                <div className="mt-12 flex items-center gap-6">
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                      <img 
                        key={i}
                        src={`https://picsum.photos/seed/user${i}/100/100`} 
                        className="w-10 h-10 rounded-full border-2 border-white"
                        alt="User"
                        referrerPolicy="no-referrer"
                      />
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="flex text-yellow-400 mb-0.5">
                      {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                    <p className="text-slate-500 font-medium">1,200+ mamnun mijozlar</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                  <img 
                    src="https://picsum.photos/seed/repair/800/1000" 
                    alt="Phone Repair" 
                    className="w-full h-auto object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl z-20 flex items-center gap-4 border border-slate-100">
                  <div className="bg-green-100 p-3 rounded-2xl">
                    <Clock className="text-green-600 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Tezkor Xizmat</p>
                    <p className="text-lg font-bold text-slate-900">30 daqiqadan boshlab</p>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-1/2 -right-12 w-64 h-64 bg-blue-400/20 blur-3xl rounded-full -z-10" />
                <div className="absolute -top-12 -left-12 w-48 h-48 bg-purple-400/20 blur-3xl rounded-full -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: <ShieldCheck className="text-blue-600" />, label: "Kafolatli ta'mirlash" },
                { icon: <CheckCircle2 className="text-blue-600" />, label: "Original qismlar" },
                { icon: <Clock className="text-blue-600" />, label: "Tezkor yetkazish" },
                { icon: <Star className="text-blue-600" />, label: "Professional ustalar" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 bg-blue-50 rounded-2xl">
                    {item.icon}
                  </div>
                  <p className="font-bold text-slate-900 text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Bizning Xizmatlar</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Telefoningizdagi har qanday muammoni hal qilamiz. Bizning asosiy xizmatlarimiz bilan tanishing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICES.map((service) => (
                <motion.div 
                  key={service.id}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-500 text-sm mb-6 leading-relaxed">{service.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-blue-600 font-bold">{service.price}</span>
                    <button className="p-2 hover:bg-blue-50 rounded-full transition-colors">
                      <ChevronRight size={20} className="text-blue-600" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Mijozlarimiz nima deydi?</h2>
              <p className="text-slate-600">Minglab mamnun mijozlar bizga ishonishadi.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {REVIEWS.map((review) => (
                <div key={review.id} className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                  <div className="flex text-yellow-400 mb-4">
                    {Array.from({ length: review.stars }).map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-6">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center font-bold text-blue-700">
                      {review.name[0]}
                    </div>
                    <span className="font-bold text-slate-900">{review.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-3xl -z-0" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8">Biz bilan bog'laning</h2>
                <p className="text-slate-400 mb-12 text-lg">
                  Savollaringiz bormi? Bizga qo'ng'iroq qiling yoki xabar qoldiring. 
                  Biz sizga imkon qadar tezroq javob beramiz.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="bg-white/10 p-4 rounded-2xl">
                      <Phone className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 font-bold uppercase tracking-wider mb-1">Telefon</p>
                      <p className="text-xl font-bold">+998 90 123 45 67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="bg-white/10 p-4 rounded-2xl">
                      <MapPin className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 font-bold uppercase tracking-wider mb-1">Manzil</p>
                      <p className="text-xl font-bold">Toshkent sh., Chilonzor tumani, 1-mavze</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="bg-white/10 p-4 rounded-2xl">
                      <Mail className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 font-bold uppercase tracking-wider mb-1">Email</p>
                      <p className="text-xl font-bold">info@phonefix.uz</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Ismingiz</label>
                      <input 
                        type="text" 
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        placeholder="Ali"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Telefon raqamingiz</label>
                      <input 
                        type="tel" 
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        placeholder="+998"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Xabaringiz</label>
                    <textarea 
                      rows={4}
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="Muammo haqida qisqacha..."
                    />
                  </div>
                  <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200">
                    Xabar yuborish
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Smartphone className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white font-display tracking-tight">PhoneFix</span>
            </div>
            
            <p className="text-slate-500 text-sm">
              © 2026 PhoneFix. Barcha huquqlar himoyalangan.
            </p>

            <div className="flex gap-6">
              <a href="#" className="text-slate-500 hover:text-white transition-colors">Telegram</a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
