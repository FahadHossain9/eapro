import Link from 'next/link';

export default function ProductsSection() {
  const products = [
    {
      title: 'Home Inverters',
      subtitle: 'Uninterrupted Power',
      description: 'Smart inverters that silently keep your home running during outages. Perfect for work from home, studies, and family time.',
      features: ['Silent Operation', 'Smart Charging', 'LCD Display', '5+ Year Life'],
      image: '⚡',
      color: 'from-emerald-500 to-emerald-700',
      bgColor: 'bg-gradient-to-br from-emerald-50 to-white',
      link: '/products/inverters'
    },
    {
      title: 'Solar Systems',
      subtitle: 'Harness the Sun',
      description: 'Complete solar solutions for your roof. Generate your own electricity and reduce bills by up to 80%.',
      features: ['40W - 800W Panels', 'Easy Installation', 'Subsidy Support', '25 Year Warranty'],
      image: '☀️',
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-gradient-to-br from-amber-50 to-white',
      link: '/products/solar'
    },
    {
      title: 'Smart Batteries',
      subtitle: 'Long-lasting Power',
      description: 'Advanced battery technology that stores more power and lasts longer. Built for Indian conditions.',
      features: ['Deep Cycle', 'Low Maintenance', 'Weather Resistant', '10+ Year Life'],
      image: '🔋',
      color: 'from-sky-500 to-blue-700',
      bgColor: 'bg-gradient-to-br from-sky-50 to-white',
      link: '/products/batteries'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#fdfcf8]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#0d3b1a]/5 text-[#0d3b1a] rounded-full text-sm font-semibold mb-4">
            Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0d3b1a] mb-6">
            Perfect Power for
            <br />
            <span className="text-[#d4a039]">Every Indian Home</span>
          </h2>
          <p className="text-xl text-gray-600">
            Whether you need backup power, want to go solar, or looking for reliable storage — we have the perfect solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${product.bgColor}`}
            >
              {/* Product Visual */}
              <div className={`h-56 bg-gradient-to-br ${product.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>
                <span className="text-8xl group-hover:scale-110 transition-transform duration-300 relative z-10">
                  {product.image}
                </span>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <div className="text-sm font-semibold text-[#d4a039] mb-2">{product.subtitle}</div>
                <h3 className="text-2xl font-bold text-[#0d3b1a] mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-[#d4a039] rounded-full"></span>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Link
                  href={product.link}
                  className="group/btn inline-flex items-center gap-2 text-[#0d3b1a] font-semibold hover:text-[#d4a039] transition"
                >
                  Learn More
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#0d3b1a] text-white rounded-full font-semibold hover:bg-[#1a5c2e] transition-all hover:shadow-lg"
          >
            View All Products
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
