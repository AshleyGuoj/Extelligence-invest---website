
'use client';

export default function WhyPartner() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Why Partner With Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Strategic advantages that set us apart in the investment landscape
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <i className="ri-team-line text-blue-600 w-5 h-5 flex items-center justify-center"></i>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Experienced Leadership
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                General partners with global reach and deep operational backgrounds across multiple industries and markets.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <i className="ri-rocket-line text-purple-600 w-5 h-5 flex items-center justify-center"></i>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Early Access
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Priority access to high-potential, technically defensible startups through our extensive network and industry relationships.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <i className="ri-eye-line text-green-600 w-5 h-5 flex items-center justify-center"></i>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Transparent Approach
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Clear communication, rigorous diligence processes, and long-term value orientation in all our partnerships.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <i className="ri-shield-check-line text-orange-600 w-5 h-5 flex items-center justify-center"></i>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                SEC Registered
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Fully registered as an Exempt Reporting Adviser (ERA) with the U.S. SEC, ensuring regulatory compliance and professional standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
