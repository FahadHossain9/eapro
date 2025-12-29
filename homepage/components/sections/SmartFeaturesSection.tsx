export default function SmartFeaturesSection() {
  const features = [
    {
      icon: '📱',
      title: 'Smart App Control',
      description: 'Control your power system from anywhere with our mobile app'
    },
    {
      icon: '⚙️',
      title: 'Auto Power Management',
      description: 'Intelligent system that optimizes power usage automatically'
    },
    {
      icon: '🌦️',
      title: 'Weather Resistant',
      description: 'Built to withstand Indian monsoons, summers, and all weather conditions'
    },
    {
      icon: '🛡️',
      title: 'Long Warranty',
      description: 'Comprehensive warranty and after-sales support across India'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a4d2e] mb-4">
            Smart Technology, Simple to Use
          </h2>
          <p className="text-lg text-gray-600">
            Advanced features that make life easier
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#f5f5dc] to-white rounded-xl p-6 text-center hover:shadow-lg transition border border-[#1a4d2e]/10"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[#1a4d2e] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

