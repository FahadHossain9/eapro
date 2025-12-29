import Link from 'next/link';

export default function SupportSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Installation */}
          <div className="bg-gradient-to-br from-[#f0f7f2] to-white rounded-3xl p-10 hover:shadow-xl transition-all border border-[#0d3b1a]/10">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-[#0d3b1a] rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="text-3xl">🔧</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0d3b1a] mb-3">
                  Professional Installation
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  10,000+ certified installers across India. Quick, professional installation with warranty. Most homes are powered up the same day.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-3 py-1 bg-[#0d3b1a]/5 rounded-full text-sm text-[#0d3b1a]">Same-day Install</span>
                  <span className="px-3 py-1 bg-[#0d3b1a]/5 rounded-full text-sm text-[#0d3b1a]">Trained Experts</span>
                  <span className="px-3 py-1 bg-[#0d3b1a]/5 rounded-full text-sm text-[#0d3b1a]">Pan-India</span>
                </div>
                <Link
                  href="/installer"
                  className="inline-flex items-center gap-2 text-[#0d3b1a] font-semibold hover:text-[#d4a039] transition"
                >
                  Find Installer Near You
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="bg-gradient-to-br from-[#0d3b1a] to-[#1a5c2e] rounded-3xl p-10 text-white hover:shadow-xl transition-all">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="text-3xl">💬</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">
                  24/7 Customer Care
                </h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Questions? Issues? We're always here. Call, WhatsApp, or chat with our support team anytime, in your language.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Hindi</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">English</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Regional</span>
                </div>
                <Link
                  href="/support"
                  className="inline-flex items-center gap-2 text-[#d4a039] font-semibold hover:text-white transition"
                >
                  Contact Support
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Warranty Banner */}
        <div className="mt-8 bg-gradient-to-r from-[#d4a039]/10 via-[#d4a039]/5 to-[#d4a039]/10 rounded-3xl p-8 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🛡️</span>
              <div className="text-left">
                <p className="font-bold text-[#0d3b1a]">Up to 25 Years Warranty</p>
                <p className="text-sm text-gray-600">On solar panels</p>
              </div>
            </div>
            <div className="h-12 w-px bg-[#d4a039]/30 hidden md:block"></div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">🔄</span>
              <div className="text-left">
                <p className="font-bold text-[#0d3b1a]">Free Replacement</p>
                <p className="text-sm text-gray-600">Within warranty period</p>
              </div>
            </div>
            <div className="h-12 w-px bg-[#d4a039]/30 hidden md:block"></div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">📞</span>
              <div className="text-left">
                <p className="font-bold text-[#0d3b1a]">Lifetime Support</p>
                <p className="text-sm text-gray-600">Always here for you</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
