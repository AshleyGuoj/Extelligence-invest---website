
'use client';

export default function MissionStatement() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Trusted Stewards of Capital
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We are committed to transparent communication, rigorous due diligence, and delivering outsized outcomes for our partners.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-eye-line text-xl text-blue-600 w-5 h-5 flex items-center justify-center"></i>
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">Transparent Communication</h3>
                <p className="text-gray-600 text-sm">Clear, honest dialogue with all stakeholders</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-search-line text-xl text-purple-600 w-5 h-5 flex items-center justify-center"></i>
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">Rigorous Due Diligence</h3>
                <p className="text-gray-600 text-sm">Comprehensive analysis and evaluation processes</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-trophy-line text-xl text-green-600 w-5 h-5 flex items-center justify-center"></i>
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">Outsized Outcomes</h3>
                <p className="text-gray-600 text-sm">Delivering exceptional returns for our partners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
