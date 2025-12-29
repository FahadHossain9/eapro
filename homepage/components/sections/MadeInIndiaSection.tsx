import Link from 'next/link';

export default function MadeInIndiaSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0d3b1a] via-[#0f4420] to-[#0d3b1a] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#d4a039]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl"></div>
      
      {/* Indian pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="text-5xl">🇮🇳</span>
              <div>
                <div className="text-[#d4a039] font-semibold tracking-widest text-sm">PROUDLY</div>
                <div className="text-3xl font-bold">MADE IN INDIA</div>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Designed by Indians,
              <br />
              <span className="text-[#d4a039]">For Indian Homes</span>
            </h2>
            
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              From our R&D labs in Uttarakhand to your home, every EAPRO product is a testament to Indian engineering excellence. 
              We're not just making products — we're building India's energy independence.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-white/5 rounded-2xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-[#d4a039]">700+</div>
                <div className="text-sm text-white/60 mt-1">Indian Engineers</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-2xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-[#d4a039]">4</div>
                <div className="text-sm text-white/60 mt-1">Patents Granted</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-2xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-[#d4a039]">2012</div>
                <div className="text-sm text-white/60 mt-1">Since</div>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#d4a039] text-[#0d3b1a] rounded-full font-semibold hover:bg-[#e8b54d] transition-all hover:shadow-lg"
            >
              Our India Story
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-white/10 to-white/5 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                <div className="text-center p-8">
                  <div className="w-40 h-40 mx-auto mb-6 relative">
                    {/* India Map placeholder */}
                    <div className="absolute inset-0 bg-[#d4a039]/20 rounded-full animate-pulse"></div>
                    <div className="absolute inset-4 bg-gradient-to-br from-[#ff9933] via-white to-[#138808] rounded-full flex items-center justify-center">
                      <span className="text-6xl">🏭</span>
                    </div>
                  </div>
                  <p className="text-xl font-semibold">Manufacturing Hub</p>
                  <p className="text-white/60 mt-2">Roorkee, Uttarakhand</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-2xl p-4 animate-float">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎖️</span>
                <div>
                  <p className="text-sm font-semibold text-[#0d3b1a]">ISO Certified</p>
                  <p className="text-xs text-gray-500">Quality Assured</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-2xl p-4" style={{ animation: 'float 3s ease-in-out infinite 1s' }}>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🌍</span>
                <div>
                  <p className="text-sm font-semibold text-[#0d3b1a]">20+ Countries</p>
                  <p className="text-xs text-gray-500">Global Reach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
