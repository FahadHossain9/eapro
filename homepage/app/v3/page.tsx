import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export default function HomeV3() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero V3 - Modern Emotional Storytelling */}
      <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(#0d3b1a 1px, transparent 1px), linear-gradient(90deg, #0d3b1a 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#0d3b1a] text-white rounded-full mb-8 animate-fadeIn">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4a039] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4a039]"></span>
              </span>
              <span className="text-sm font-medium">Powering 10 Million+ Indian Homes</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-[#0d3b1a] leading-[1.05] mb-8">
              Power Cuts?
              <br />
              <span className="relative inline-block">
                <span className="text-[#d4a039]">Not Anymore.</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 8C75 2 225 2 298 8" stroke="#d4a039" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
              Your kids' exams. Your work deadlines. Your elderly parents' comfort. 
              <span className="text-[#0d3b1a] font-semibold"> We protect what matters most.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                href="/get-started"
                className="group inline-flex items-center justify-center gap-3 bg-[#0d3b1a] text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-[#1a5c2e] transition-all hover:shadow-2xl"
              >
                Protect My Home
                <svg className="w-6 h-6 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full font-semibold text-[#0d3b1a] border-2 border-gray-200 hover:border-[#0d3b1a] transition-all"
              >
                Calculate Savings
              </Link>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement - Emotional */}
      <section className="py-24 bg-[#fafafa]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#d4a039] font-semibold text-sm tracking-wider uppercase mb-4 block">The Reality</span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#0d3b1a] mb-6 leading-tight">
                  Power cuts don't just stop your lights.
                  <span className="text-gray-400"> They stop lives.</span>
                </h2>
              </div>
              <div className="space-y-6">
                {[
                  { icon: '📉', text: 'Work presentations lost mid-meeting' },
                  { icon: '😰', text: 'Kids\' online classes disrupted' },
                  { icon: '😓', text: 'Elderly parents suffering in heat' },
                  { icon: '🏥', text: 'Medical equipment without power' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution - Clean Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#d4a039] font-semibold text-sm tracking-wider uppercase mb-4 block">The Solution</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0d3b1a] mb-6">
              One Choice.
              <span className="text-[#d4a039]"> Complete Protection.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: '⚡',
                title: 'Smart Inverters',
                description: 'Instant backup. Zero interruption. Your family stays connected.',
                stat: '99.9%',
                statLabel: 'Uptime'
              },
              {
                icon: '☀️',
                title: 'Solar Power',
                description: 'Generate your own electricity. Slash bills by up to 80%.',
                stat: '₹5L+',
                statLabel: 'Lifetime Savings'
              },
              {
                icon: '🔋',
                title: 'Power Storage',
                description: 'Store energy for when you need it most. Always prepared.',
                stat: '10+',
                statLabel: 'Year Life'
              }
            ].map((product, index) => (
              <div key={index} className="group p-8 rounded-3xl border-2 border-gray-100 hover:border-[#0d3b1a] transition-all hover:shadow-xl">
                <div className="text-5xl mb-6">{product.icon}</div>
                <h3 className="text-2xl font-bold text-[#0d3b1a] mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                <div className="pt-6 border-t border-gray-100">
                  <div className="text-3xl font-bold text-[#d4a039]">{product.stat}</div>
                  <div className="text-sm text-gray-500">{product.statLabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof - Modern Cards */}
      <section className="py-24 bg-[#0d3b1a] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real Families.
              <span className="text-[#d4a039]"> Real Stories.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote: "My son cleared JEE with AIR 847. Late night studies were never interrupted thanks to EAPRO.",
                name: "Ramesh Kumar",
                location: "Lucknow, UP",
                emoji: "👨"
              },
              {
                quote: "Our electricity bill went from ₹8000 to ₹1200. Best investment we ever made for our home.",
                name: "Priya Reddy",
                location: "Hyderabad, Telangana",
                emoji: "👩"
              },
              {
                quote: "Papa's oxygen concentrator never stops now. EAPRO literally saved his life during a power cut.",
                name: "Arjun Singh",
                location: "Jaipur, Rajasthan",
                emoji: "👨"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#d4a039]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/90 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#d4a039] rounded-full flex items-center justify-center">
                    {testimonial.emoji}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-white/60 text-sm">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Made in India - Bold Statement */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-[#ff9933]/10 via-white to-[#138808]/10 rounded-full border mb-8">
                  <span className="text-2xl">🇮🇳</span>
                  <span className="font-semibold text-[#0d3b1a]">100% Made in India</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-[#0d3b1a] mb-6 leading-tight">
                  Indian Engineering.
                  <br />
                  <span className="text-[#d4a039]">World-Class Quality.</span>
                </h2>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  From our R&D center in Uttarakhand to your home — every EAPRO product is designed, 
                  manufactured, and tested in India. When you choose us, you support Indian innovation.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: '700+', label: 'Indian Engineers' },
                    { number: '4', label: 'Patents' },
                    { number: '47', label: 'Quality Tests' },
                    { number: '2012', label: 'Since' }
                  ].map((stat, index) => (
                    <div key={index}>
                      <div className="text-3xl font-bold text-[#0d3b1a]">{stat.number}</div>
                      <div className="text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#f5f5f5] to-white flex items-center justify-center border-2 border-gray-100">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#ff9933] via-white to-[#138808] flex items-center justify-center">
                      <span className="text-5xl">🏭</span>
                    </div>
                    <p className="text-xl font-semibold text-[#0d3b1a]">Manufacturing Hub</p>
                    <p className="text-gray-500">Roorkee, Uttarakhand</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process - Horizontal Steps */}
      <section className="py-24 bg-[#fafafa]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0d3b1a] mb-6">
              3 Steps to
              <span className="text-[#d4a039]"> Freedom</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connector line */}
              <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-[#d4a039]"></div>
              
              {[
                { step: '01', title: 'Free Consultation', description: 'Tell us about your home. We listen and understand.' },
                { step: '02', title: 'Custom Solution', description: 'Get a tailored plan that fits your needs and budget.' },
                { step: '03', title: 'Expert Installation', description: 'Our certified team handles everything. Done in hours.' }
              ].map((item, index) => (
                <div key={index} className="relative text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-white rounded-full border-4 border-[#d4a039] flex items-center justify-center relative z-10">
                    <span className="text-2xl font-bold text-[#0d3b1a]">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0d3b1a] mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Bold and Simple */}
      <section className="py-32 bg-[#0d3b1a] text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Your Family Deserves
              <br />
              <span className="text-[#d4a039]">Uninterrupted Power.</span>
            </h2>
            <p className="text-xl text-white/80 mb-10">
              10 million families already made the choice. Now it's your turn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-[#d4a039] text-[#0d3b1a] rounded-full font-bold text-lg hover:bg-[#e8b54d] transition-all hover:shadow-2xl"
              >
                Get Free Quote
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="tel:+91"
                className="inline-flex items-center justify-center gap-3 px-12 py-5 border-2 border-white/30 rounded-full font-bold text-lg hover:bg-white/10 transition"
              >
                📞 Call Now
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}

