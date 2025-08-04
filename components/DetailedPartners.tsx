
'use client';

export default function DetailedPartners() {
  const partners = [
    {
      name: 'Tony F. Chan',
      title: 'Mathematician. University Leader. Global Innovation Strategist.',
      description: 'President of King Abdullah University of Science and Technology (KAUST), former President of HKUST, Tony brings global academic and innovation leadership. He has spearheaded cross-border research partnerships and continues to shape the future of science, education, and deep tech in Asia and beyond.',
      wikipedia: 'https://en.m.wikipedia.org/wiki/Tony_F._Chan',
      image: 'https://static.readdy.ai/image/8b42f51d86df85f19e4c8e1d8749312d/641bb57b85f5ed9a9dc05658f5ad27fa.jfif'
    },
    {
      name: 'James Kong',
      title: 'Investor. Global Strategist. Financial Architect.',
      description: 'James is an experienced private equity and capital markets investor with a focus on cross-border transactions, growth equity, and capital strategy. He brings a strong track record in high-impact investments and building strategic partnerships across Asia and North America.',
      linkedin: 'https://www.linkedin.com/in/james-kong-808a511b',
      image: 'https://static.readdy.ai/image/8b42f51d86df85f19e4c8e1d8749312d/ac0a10e7d97dc5ebe967f97f57c41a12.jfif'
    },
    {
      name: 'Richard Du',
      title: 'Global Automotive Leader. Supply Chain & Marketing Expert.',
      description: 'Graduated from Shanghai Jiao Tong University, Richard brings over two decades of experience in the international automotive industry. He has held leadership positions at PwC, General Motors, Siemens, Jaguar Land Rover, and SAIC Group. He has overseen overseas supply chains, brand communication, and marketing networks for global vehicle brands including Land Rover, Jaguar, Cadillac, Chevrolet, MG, Roewe, and Opel. With deep expertise in new energy vehicles and autonomous driving, Richard manages cross-border teams and brings strategic insight into global mobility trends.',
      image: 'https://static.readdy.ai/image/8b42f51d86df85f19e4c8e1d8749312d/c2fd64129a24dc25b66ff11052ca8106.jfif'
    },
    {
      name: 'Vivian Zhang',
      title: 'Investor. AI Strategist. VC & Growth Advisor.',
      description: 'Vivian is a seasoned investor and growth strategist with a strong background in AI, frontier technologies, and early-stage venture capital. She brings experience from multiple leading funds and has served as an advisor to startups at the intersection of deep tech and global expansion. Vivian is passionate about empowering founders and bridging innovation between China and the U.S.',
      linkedin: 'https://www.linkedin.com/in/vivianszhang/',
      image: 'https://static.readdy.ai/image/8b42f51d86df85f19e4c8e1d8749312d/1e5a9322945da0e36586355de991fe5b.jfif'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our General Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Leaders with proven track records and deep expertise across global markets
          </p>
        </div>

        <div className="space-y-12">
          {partners.map((partner, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-shrink-0">
                <div className="w-64 h-72 rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src={partner.image} 
                    alt={partner.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              <div className="flex-1 lg:max-w-2xl">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  {partner.name}
                </h3>
                <p className="text-lg text-blue-600 font-semibold mb-4 italic">
                  {partner.title}
                </p>

                {partner.location && (
                  <div className="flex items-center space-x-2 text-gray-600 mb-2">
                    <i className="ri-map-pin-line w-4 h-4 flex items-center justify-center"></i>
                    <span>{partner.location}</span>
                    {partner.email && (
                      <>
                        <span>|</span>
                        <a href={`mailto:${partner.email}`} className="text-blue-600 hover:text-blue-800 cursor-pointer">
                          {partner.email}
                        </a>
                      </>
                    )}
                  </div>
                )}

                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  {partner.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {partner.wikipedia && (
                    <a 
                      href={partner.wikipedia}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap text-sm"
                    >
                      <i className="ri-wikipedia-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                      Wikipedia Profile
                    </a>
                  )}
                  {partner.linkedin && (
                    <a 
                      href={partner.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors cursor-pointer whitespace-nowrap text-sm"
                    >
                      <i className="ri-linkedin-fill mr-2 w-4 h-4 flex items-center justify-center"></i>
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
