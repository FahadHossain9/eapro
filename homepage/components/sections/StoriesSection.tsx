export default function StoriesSection() {
  const testimonials = [
    {
      quote: "When my daughter was preparing for JEE, power cuts were our biggest worry. EAPRO solved that completely. She got into IIT, and we credit our reliable power backup!",
      name: 'Meera Krishnamurthy',
      role: 'Homemaker',
      location: 'Chennai, Tamil Nadu',
      image: '👩',
      rating: 5
    },
    {
      quote: "Running a home-based business, I can't afford power interruptions. EAPRO's solar system pays for itself — my electricity bill dropped from ₹5000 to ₹800!",
      name: 'Rajendra Patel',
      role: 'Entrepreneur',
      location: 'Ahmedabad, Gujarat',
      image: '👨',
      rating: 5
    },
    {
      quote: "As a doctor doing teleconsultations from home, uninterrupted power is critical. EAPRO hasn't let me down once in 3 years. Truly made in India, made for India.",
      name: 'Dr. Priya Sharma',
      role: 'Physician',
      location: 'Jaipur, Rajasthan',
      image: '👩‍⚕️',
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#d4a039]/5 to-[#0d3b1a]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#d4a039]/10 text-[#d4a039] rounded-full text-sm font-semibold mb-4">
            Real Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0d3b1a] mb-6">
            Voices from
            <br />
            <span className="text-[#1a5c2e]/60">Indian Homes</span>
          </h2>
          <p className="text-xl text-gray-600">
            10 million+ families trust EAPRO. Here's what some of them say.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-[#fdfcf8] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="text-5xl text-[#d4a039]/20 mb-4">"</div>
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#d4a039]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-[#0d3b1a] to-[#1a5c2e] rounded-full flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-semibold text-[#0d3b1a]">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <p className="text-xs text-[#d4a039]">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-8 mt-16 pt-16 border-t border-gray-100">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#0d3b1a]">10M+</div>
            <div className="text-sm text-gray-500 mt-1">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#0d3b1a]">4.8/5</div>
            <div className="text-sm text-gray-500 mt-1">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#0d3b1a]">98%</div>
            <div className="text-sm text-gray-500 mt-1">Recommend Us</div>
          </div>
        </div>
      </div>
    </section>
  );
}
