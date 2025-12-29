export default function IndianEmotionSection() {
  const moments = [
    {
      image: '📺',
      title: 'Family Movie Night',
      description: 'No more interruptions during your favorite shows. Power that keeps entertainment going.',
      bg: 'from-purple-500/10 to-purple-500/5'
    },
    {
      image: '📚',
      title: 'Exam Preparation',
      description: 'Your child\'s studies never stop. Reliable power for those crucial late-night study sessions.',
      bg: 'from-blue-500/10 to-blue-500/5'
    },
    {
      image: '👩‍💻',
      title: 'Work From Home',
      description: 'Important meetings and deadlines met. Uninterrupted power for your professional success.',
      bg: 'from-emerald-500/10 to-emerald-500/5'
    },
    {
      image: '🎉',
      title: 'Festival Celebrations',
      description: 'Diwali lights, wedding decorations, family gatherings — all powered without worry.',
      bg: 'from-amber-500/10 to-amber-500/5'
    }
  ];

  return (
    <section className="py-24 bg-[#fdfcf8] relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 indian-pattern opacity-40"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-[#d4a039]/20 text-[#d4a039] rounded-full text-sm font-semibold mb-6">
              For Indian Families
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#0d3b1a] mb-6 leading-tight">
              Every Moment
              <br />
              <span className="text-[#d4a039]">Matters</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We understand the rhythm of Indian homes. From early morning poojas to late-night studies, 
              from summer afternoons to monsoon evenings — EAPRO keeps your family connected.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0d3b1a] rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0d3b1a] mb-1">Built for Indian Weather</h4>
                  <p className="text-gray-600">Performs in extreme heat, monsoons, and cold winters</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0d3b1a] rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0d3b1a] mb-1">Handles Power Fluctuations</h4>
                  <p className="text-gray-600">Smart voltage regulation for Indian power grid conditions</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0d3b1a] rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0d3b1a] mb-1">Local Service Network</h4>
                  <p className="text-gray-600">10,000+ service partners across India, always nearby</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Moment Cards */}
          <div className="grid grid-cols-2 gap-4">
            {moments.map((moment, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${moment.bg} rounded-2xl p-6 hover:shadow-lg transition-all hover:scale-[1.02] border border-white/50`}
              >
                <div className="text-4xl mb-4">{moment.image}</div>
                <h4 className="font-semibold text-[#0d3b1a] mb-2">{moment.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{moment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

