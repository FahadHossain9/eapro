import Link from 'next/link';

export default function BlogSection() {
  const blogs = [
    {
      title: 'How to Choose the Right Inverter for Your Home',
      category: 'Home Energy Guide',
      date: 'Dec 15, 2024',
      excerpt: 'A simple guide to selecting the perfect inverter for your home\'s power needs...',
      image: '🏠'
    },
    {
      title: 'Solar Power: Is It Right for Your Home?',
      category: 'Solar Solutions',
      date: 'Dec 10, 2024',
      excerpt: 'Everything you need to know about going solar and reducing your electricity bills...',
      image: '☀️'
    },
    {
      title: '5 Ways to Reduce Your Electricity Bill',
      category: 'Energy Tips',
      date: 'Dec 5, 2024',
      excerpt: 'Practical tips to save money on electricity while maintaining comfort at home...',
      image: '💰'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f5f5dc]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a4d2e] mb-4">
            Learn About Home Energy
          </h2>
          <p className="text-lg text-gray-600">
            Tips, guides, and insights for Indian homeowners
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <Link
              key={index}
              href="/blog"
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition group"
            >
              <div className="bg-gradient-to-br from-[#1a4d2e] to-[#2d5a3d] p-12 aspect-[4/3] flex items-center justify-center">
                <div className="text-6xl">{blog.image}</div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-[#d4af37] uppercase">
                    {blog.category}
                  </span>
                  <span className="text-xs text-gray-500">{blog.date}</span>
                </div>
                <h3 className="text-xl font-bold text-[#1a4d2e] mb-3 group-hover:text-[#d4af37] transition">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {blog.excerpt}
                </p>
                <span className="text-[#1a4d2e] font-semibold text-sm group-hover:text-[#d4af37] transition">
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

