import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export default function HomeV2() {
  return (
    <main className="min-h-screen bg-[#fffdf8]">
      <Navbar />
      
      {/* Hero V2 - Premium Heritage */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#fffdf8] via-[#fff8ed] to-[#f0e6d3]"></div>
        
        {/* Decorative mandala pattern */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-5">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx="100" cy="100" r="80" fill="none" stroke="#d4a039" strokeWidth="0.5"/>
            <circle cx="100" cy="100" r="60" fill="none" stroke="#d4a039" strokeWidth="0.5"/>
            <circle cx="100" cy="100" r="40" fill="none" stroke="#d4a039" strokeWidth="0.5"/>
            {[...Array(12)].map((_, i) => (
              <line key={i} x1="100" y1="20" x2="100" y2="180" stroke="#d4a039" strokeWidth="0.3" transform={`rotate(${i * 30} 100 100)`}/>
            ))}
          </svg>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              {/* Heritage Badge */}
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-[#d4a039]/20 to-[#d4a039]/10 rounded-full border border-[#d4a039]/30">
                <div className="w-8 h-8 bg-gradient-to-br from-[#ff9933] via-white to-[#138808] rounded-full flex items-center justify-center">
                  <span className="text-sm">🇮🇳</span>
                </div>
                <span className="text-[#8b6914] font-semibold text-sm tracking-wide">Since 2012 | Made in Bharat</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-[#1a1a1a] leading-[1.1]">
                <span className="block text-[#0d3b1a]">घर की रोशनी,</span>
                <span className="block text-[#d4a039] mt-2">हमारी जिम्मेदारी</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-[#0d3b1a]/60 font-light italic">
                "The light of your home, our responsibility"
              </p>
              
              <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                For over a decade, EAPRO has been the silent guardian of 10 million+ Indian homes. 
                When you choose us, you choose a legacy of trust, quality, and unwavering commitment.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/get-started"
                  className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#0d3b1a] to-[#1a5c2e] text-white px-10 py-5 rounded-full font-semibold hover:shadow-2xl transition-all"
                >
                  Begin Your Journey
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/story"
                  className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full font-semibold text-[#0d3b1a] border-2 border-[#0d3b1a]/10 hover:border-[#d4a039] transition-all"
                >
                  Our Heritage
                </Link>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden bg-gradient-to-br from-[#0d3b1a] to-[#1a5c2e] shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
                      <span className="text-7xl">🪔</span>
                    </div>
                    <p className="text-xl font-semibold">Traditional Indian Home</p>
                    <p className="text-white/60 mt-2">With Modern Power Solutions</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative corner */}
              <div className="absolute -top-6 -right-6 w-24 h-24 border-t-4 border-r-4 border-[#d4a039] rounded-tr-3xl"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-4 border-l-4 border-[#d4a039] rounded-bl-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-12 h-px bg-[#d4a039]"></div>
              <span className="text-[#d4a039] font-semibold tracking-widest uppercase text-sm">Our Values</span>
              <div className="w-12 h-px bg-[#d4a039]"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0d3b1a] mb-6">
              Built on Indian Values
            </h2>
            <p className="text-xl text-gray-600">
              Trust, quality, and family — the pillars of every Indian home
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                icon: '🙏', 
                title: 'विश्वास (Trust)', 
                subtitle: 'Vishwas',
                description: 'Like a family promise, our word is our bond. 10 million+ families trust us.'
              },
              { 
                icon: '🏆', 
                title: 'गुणवत्ता (Quality)', 
                subtitle: 'Gunvatta',
                description: 'Excellence is not an option — it\'s our tradition. Every product is tested 47 times.'
              },
              { 
                icon: '❤️', 
                title: 'परिवार (Family)', 
                subtitle: 'Parivar',
                description: 'You\'re not just a customer, you\'re family. We treat your home like ours.'
              }
            ].map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#fff8ed] to-[#fffdf8] rounded-full flex items-center justify-center border-2 border-[#d4a039]/20 group-hover:border-[#d4a039] transition-all group-hover:scale-110">
                  <span className="text-5xl">{value.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0d3b1a] mb-1">{value.title}</h3>
                <p className="text-[#d4a039] text-sm font-medium mb-4">{value.subtitle}</p>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Family Scenarios - Emotional */}
      <section className="py-24 bg-gradient-to-b from-white to-[#fffdf8]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0d3b1a] mb-6">
              In Every Moment,
              <span className="text-[#d4a039]"> We're There</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji: '🪔', title: 'Diwali Celebrations', desc: 'Every diya glows bright' },
              { emoji: '📖', title: 'Late Night Studies', desc: 'Dreams never stop' },
              { emoji: '👶', title: 'Baby\'s First Steps', desc: 'Captured without worry' },
              { emoji: '🎂', title: 'Birthday Parties', desc: 'Celebrations uninterrupted' },
              { emoji: '👴', title: 'Elderly Care', desc: 'Comfort always ensured' },
              { emoji: '🏠', title: 'Work From Home', desc: 'Productivity maintained' },
              { emoji: '🎬', title: 'Movie Nights', desc: 'Entertainment continues' },
              { emoji: '🙏', title: 'Morning Poojas', desc: 'Traditions honored' }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-center group hover:-translate-y-1">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{item.emoji}</div>
                <h4 className="font-semibold text-[#0d3b1a] mb-1">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Stats */}
      <section className="py-24 bg-gradient-to-r from-[#0d3b1a] via-[#0f4420] to-[#0d3b1a] text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-8 text-center">
            {[
              { number: '12+', label: 'Years of Excellence' },
              { number: '10M+', label: 'Happy Families' },
              { number: '10K+', label: 'Service Partners' },
              { number: '20+', label: 'Countries' },
              { number: '700+', label: 'Engineers' }
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl md:text-5xl font-bold text-[#d4a039] mb-2">{stat.number}</div>
                <div className="text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-24 bg-[#fffdf8]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0d3b1a] mb-6">
              Solutions That <span className="text-[#d4a039]">Serve</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Inverters',
                tagline: 'Silent Guardians',
                description: 'Like a mother\'s care — always there, never noticed until you need it.',
                color: 'from-emerald-500 to-emerald-700',
                icon: '⚡'
              },
              {
                title: 'Solar Systems',
                tagline: 'Gift of the Sun',
                description: 'Harness the same sun that blessed our ancestors. Clean, eternal power.',
                color: 'from-amber-500 to-orange-600',
                icon: '☀️'
              },
              {
                title: 'Batteries',
                tagline: 'Strength That Lasts',
                description: 'Built to endure Indian summers, monsoons, and winters. Reliable always.',
                color: 'from-blue-500 to-blue-700',
                icon: '🔋'
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group">
                <div className={`h-48 bg-gradient-to-br ${product.color} flex items-center justify-center`}>
                  <span className="text-7xl group-hover:scale-110 transition-transform">{product.icon}</span>
                </div>
                <div className="p-8">
                  <p className="text-[#d4a039] font-semibold text-sm mb-2">{product.tagline}</p>
                  <h3 className="text-2xl font-bold text-[#0d3b1a] mb-3">{product.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>
                  <Link href="/products" className="text-[#0d3b1a] font-semibold hover:text-[#d4a039] transition inline-flex items-center gap-2">
                    Explore
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial - Premium */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-[#fffdf8] to-white rounded-3xl p-12 shadow-xl border border-[#d4a039]/10">
              <div className="absolute -top-6 left-12 text-8xl text-[#d4a039]/20">"</div>
              
              <div className="relative z-10">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-[#d4a039]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-2xl text-[#0d3b1a] leading-relaxed mb-8">
                  "When my father was on oxygen support at home, power cuts terrified us. EAPRO gave us peace of mind. 
                  Now Papa is healthy, and our EAPRO system is still running strong after 5 years. 
                  <span className="text-[#d4a039] font-semibold"> They didn't just sell us a product — they gave us hope.</span>"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0d3b1a] to-[#1a5c2e] rounded-full flex items-center justify-center text-2xl">
                    👩
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0d3b1a]">Sunita Devi Agarwal</h4>
                    <p className="text-gray-500">Homemaker, Varanasi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Heritage Style */}
      <section className="py-32 bg-gradient-to-br from-[#0d3b1a] to-[#1a5c2e] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px]">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle cx="100" cy="100" r="80" fill="none" stroke="white" strokeWidth="0.3"/>
              <circle cx="100" cy="100" r="60" fill="none" stroke="white" strokeWidth="0.3"/>
              <circle cx="100" cy="100" r="40" fill="none" stroke="white" strokeWidth="0.3"/>
            </svg>
          </div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-6xl mb-8">🪔</div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Let Us Be Part of
              <br />
              <span className="text-[#d4a039]">Your Family</span>
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Join the EAPRO परिवार today. Because when it comes to your home, you deserve the best.
            </p>
            <Link
              href="/get-started"
              className="inline-flex items-center gap-3 px-12 py-5 bg-[#d4a039] text-[#0d3b1a] rounded-full font-bold text-lg hover:bg-[#e8b54d] transition-all hover:shadow-2xl"
            >
              Start Today
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}

