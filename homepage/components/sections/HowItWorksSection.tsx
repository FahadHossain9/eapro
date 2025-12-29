export default function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      icon: '💬',
      title: 'Tell Us About Your Home',
      description: 'Share your home size, power needs, and goals. We listen carefully to understand your family\'s requirements.'
    },
    {
      number: '02',
      icon: '📐',
      title: 'Get Your Custom Plan',
      description: 'Our experts design the perfect solution — right-sized and budget-friendly, tailored just for you.'
    },
    {
      number: '03',
      icon: '🔧',
      title: 'Expert Installation',
      description: 'Certified local installers handle everything professionally. Usually done in just a few hours.'
    },
    {
      number: '04',
      icon: '⚡',
      title: 'Enjoy Reliable Power',
      description: 'Welcome to uninterrupted power! Plus, get lifelong support from our 10,000+ service network.'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#fdfcf8]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#0d3b1a]/5 text-[#0d3b1a] rounded-full text-sm font-semibold mb-4">
            Simple Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0d3b1a] mb-6">
            Getting Started is
            <br />
            <span className="text-[#d4a039]">Easy</span>
          </h2>
          <p className="text-xl text-gray-600">
            From first call to powered home — a seamless experience
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-[#d4a039] to-[#d4a039]/30 z-0"></div>
                )}
                
                <div className="relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 z-10">
                  {/* Step Number */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-[#0d3b1a] rounded-xl flex items-center justify-center text-white text-sm font-bold">
                    {step.number}
                  </div>
                  
                  <div className="text-4xl mb-4">{step.icon}</div>
                  
                  <h3 className="text-xl font-bold text-[#0d3b1a] mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="/get-started"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#d4a039] text-white rounded-full font-semibold hover:bg-[#c99832] transition-all hover:shadow-lg text-lg"
          >
            Start Your Journey Today
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
