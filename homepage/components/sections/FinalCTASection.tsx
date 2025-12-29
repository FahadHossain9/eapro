import Link from 'next/link';

export default function FinalCTASection() {
  return (
    <section className="py-32 bg-gradient-to-br from-[#0d3b1a] via-[#0f4420] to-[#0d3b1a] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d4a039]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#d4a039] rounded-full mb-8">
            <span className="text-4xl">⚡</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Ready to Power
            <br />
            <span className="text-[#d4a039]">Your Future?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto">
            Join 10 million+ Indian families who chose energy independence. 
            Your journey to reliable, clean power starts with one click.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#d4a039] text-[#0d3b1a] rounded-full font-bold text-lg hover:bg-[#e8b54d] transition-all hover:shadow-2xl hover:scale-105"
            >
              Get Free Consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="tel:+91"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all"
            >
              <span>📞</span>
              Call Us Now
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-white/60">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#d4a039]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free Home Survey</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#d4a039]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No Obligation Quote</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#d4a039]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Financing Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
