
'use client';

export default function ValuePropositions() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our Value Propositions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Three pillars that drive our investment philosophy and approach
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="ri-global-line text-2xl text-blue-600 w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Global Perspective
              </h3>
            </div>
            <p className="text-gray-600 text-center leading-relaxed text-sm">
              East-West cross-border reach with deep networks spanning multiple continents, enabling unique access to global opportunities and partnerships.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="ri-dna-line text-2xl text-purple-600 w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Technological Rigor
              </h3>
            </div>
            <p className="text-gray-600 text-center leading-relaxed text-sm">
              Investing in frontier technologies: AI, data infrastructure, health technology, and transformative innovations that shape tomorrow.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="ri-briefcase-line text-2xl text-green-600 w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Trusted Stewardship
              </h3>
            </div>
            <p className="text-gray-600 text-center leading-relaxed text-sm">
              Disciplined capital allocation, complete LP transparency, and strict regulatory compliance ensuring responsible investment management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
