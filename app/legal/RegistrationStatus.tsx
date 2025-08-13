
'use client';

export default function RegistrationStatus() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ri-shield-check-line text-2xl text-blue-600 w-6 h-6 flex items-center justify-center"></i>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Registration Status
          </h2>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 mb-8">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            <strong className="text-blue-600">Extelligence Invest</strong> is a private investment firm and operates as an <strong>Exempt Reporting Adviser (ERA)</strong> under the Investment Advisers Act of 1940.
          </p>
          
          <div className="bg-white rounded-lg p-6 mb-6">
            <p className="text-gray-700 mb-4">
              We are registered with the U.S. Securities and Exchange Commission (SEC) under <strong>CRD Number: [insert your CRD #]</strong>.
            </p>
            <p className="text-gray-600">
              You can view our public adviser profile on the SEC's Investment Adviser Public Disclosure (IAPD) system.
            </p>
          </div>

          <div className="text-center">
            <a 
              href="https://adviserinfo.sec.gov/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              👉 View Our Profile on SEC IAPD
              <i className="ri-external-link-line ml-2 w-5 h-5 flex items-center justify-center"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
