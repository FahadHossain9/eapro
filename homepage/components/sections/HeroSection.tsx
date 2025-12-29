import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-white via-[#fdfcf8] to-[#f0f7f2]">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 indian-pattern opacity-30"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-[#d4a039]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#0d3b1a]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d3b1a]/5 rounded-full">
              <span className="text-[#d4a039]">🇮🇳</span>
              <span className="text-sm font-medium text-[#0d3b1a]">Proudly Made in India</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0d3b1a] leading-[1.1]">
              Power That
              <span className="block mt-2">
                <span className="relative">
                  Empowers
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path d="M2 8C50 2 150 2 198 8" stroke="#d4a039" strokeWidth="4" strokeLinecap="round"/>
                  </svg>
                </span>
              </span>
              <span className="block text-[#1a5c2e]/70 mt-2">Your Family</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
              Join 10 million+ Indian families who trust EAPRO for reliable, clean energy. 
              <span className="text-[#0d3b1a] font-medium"> From sunrise to starlight, we keep your home powered.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/get-started"
                className="group inline-flex items-center justify-center gap-3 bg-[#0d3b1a] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1a5c2e] transition-all hover:shadow-xl hover:scale-105"
              >
                Start Your Journey
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/story"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-[#0d3b1a] border-2 border-[#0d3b1a]/20 hover:border-[#0d3b1a] hover:bg-[#0d3b1a]/5 transition-all"
              >
                <svg className="w-5 h-5 text-[#d4a039]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                Watch Our Story
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-[#0d3b1a]">10M+</div>
                <div className="text-sm text-gray-500">Happy Families</div>
              </div>
              <div className="h-12 w-px bg-gray-200"></div>
              <div>
                <div className="text-3xl font-bold text-[#0d3b1a]">10K+</div>
                <div className="text-sm text-gray-500">Service Partners</div>
              </div>
              <div className="h-12 w-px bg-gray-200"></div>
              <div>
                <div className="text-3xl font-bold text-[#0d3b1a]">20+</div>
                <div className="text-sm text-gray-500">Countries</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#f0f7f2] to-white p-1">
                <div className="aspect-[4/5] rounded-[22px] overflow-hidden bg-gradient-to-br from-[#e8f4eb] to-[#f8f9f8] flex items-center justify-center">
                  {/* Placeholder for lifestyle image */}
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-[#0d3b1a] to-[#1a5c2e] rounded-full flex items-center justify-center">
                      <span className="text-6xl">🏠</span>
                    </div>
                    <p className="text-[#0d3b1a] font-semibold text-lg">Modern Indian Home</p>
                    <p className="text-gray-500 text-sm mt-2">Lifestyle Image Placeholder</p>
                    <p className="text-gray-400 text-xs mt-4">Happy family enjoying power backup</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Card - Top Right */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#d4a039]/10 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">☀️</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0d3b1a]">Solar Powered</p>
                    <p className="text-xs text-gray-500">Clean & Green</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Card - Bottom Left */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4" style={{ animation: 'float 3s ease-in-out infinite 1.5s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#0d3b1a]/10 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">✓</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0d3b1a]">24/7 Power</p>
                    <p className="text-xs text-gray-500">Always Connected</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
