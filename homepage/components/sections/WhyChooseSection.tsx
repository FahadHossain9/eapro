export default function WhyChooseSection() {
  const features = [
    {
      icon: '🇮🇳',
      title: 'Made in India, For India',
      description: 'Every product is designed keeping Indian homes, weather conditions, and power needs in mind. Supporting local innovation.',
      highlight: '100% Indigenous'
    },
    {
      icon: '⚡',
      title: 'Smart & Reliable',
      description: 'AI-powered systems that automatically manage power, ensuring your family never faces an outage.',
      highlight: '99.9% Uptime'
    },
    {
      icon: '🌿',
      title: 'Clean Energy Future',
      description: 'Join the green revolution. Our solutions help reduce carbon footprint while saving on electricity bills.',
      highlight: '40% Cost Savings'
    },
    {
      icon: '💝',
      title: 'Trusted by Families',
      description: 'Over 10 million Indian families rely on us daily. Your trust is our greatest achievement.',
      highlight: '10M+ Families'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#d4a039]/10 text-[#d4a039] rounded-full text-sm font-semibold mb-4">
            Why EAPRO?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0d3b1a] mb-6">
            Powering Dreams,
            <br />
            <span className="text-[#1a5c2e]/60">One Home at a Time</span>
          </h2>
          <p className="text-xl text-gray-600">
            We understand Indian families. Our solutions are built on trust, quality, and a commitment to keep your home powered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#d4a039]/30"
            >
              <div className="absolute top-0 right-0 px-3 py-1 bg-[#0d3b1a] text-white text-xs font-semibold rounded-bl-xl rounded-tr-3xl">
                {feature.highlight}
              </div>
              
              <div className="w-16 h-16 bg-gradient-to-br from-[#f0f7f2] to-[#e0efe3] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">{feature.icon}</span>
              </div>
              
              <h3 className="text-xl font-bold text-[#0d3b1a] mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
