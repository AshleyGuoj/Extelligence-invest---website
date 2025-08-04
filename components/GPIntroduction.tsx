
'use client';

import Link from 'next/link';

export default function GPIntroduction() {
  const partners = [
    {
      name: 'Tony F. Chan',
      role: 'Former university president and science leader',
      description: 'Distinguished academic leader with extensive experience in science policy and international education.',
      image: 'https://static.readdy.ai/image/8b42f51d86df85f19e4c8e1d8749312d/641bb57b85f5ed9a9dc05658f5ad27fa.jfif'
    },
    {
      name: 'James Kong',
      role: 'Cross-border PE investor with Asia/US experience',
      description: 'Seasoned private equity professional with deep expertise in cross-border investments and market expansion.',
      image: 'https://static.readdy.ai/image/8b42f51d86df85f19e4c8e1d8749312d/ac0a10e7d97dc5ebe967f97f57c41a12.jfif'
    },
    {
      name: 'Richard Du',
      role: 'Automotive and global market operator',
      description: 'Industry veteran with operational expertise in automotive technology and global market development.',
      image: 'https://static.readdy.ai/image/8b42f51d86df85f19e4c8e1d8749312d/c2fd64129a24dc25b66ff11052ca8106.jfif'
    },
    {
      name: 'Vivian Zhang',
      role: 'Investor, advisor, and founder with AI & product focus',
      description: 'Multi-faceted professional combining investment expertise with product development and AI specialization.',
      image: 'https://static.readdy.ai/image/8b42f51d86df85f19e4c8e1d8749312d/1e5a9322945da0e36586355de991fe5b.jfif'
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Meet Our General Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experienced leaders bringing diverse expertise and global perspectives
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
          {partners.map((partner, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src={partner.image} 
                  alt={partner.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {partner.name}
              </h3>
              <p className="text-blue-600 font-medium mb-3 text-sm">
                {partner.role}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            href="/about"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            Meet the Partners
            <i className="ri-arrow-right-line ml-2 w-4 h-4 flex items-center justify-center"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
