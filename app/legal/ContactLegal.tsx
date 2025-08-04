
'use client';

export default function ContactLegal() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ri-customer-service-2-line text-2xl text-white w-6 h-6 flex items-center justify-center"></i>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contact & Legal Notices
          </h2>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-white mb-6">
              Compliance Contact
            </h3>
            
            <div className="bg-white/5 rounded-lg p-6 max-w-md mx-auto">
              <div className="flex items-center justify-center mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-mail-line text-white w-5 h-5 flex items-center justify-center"></i>
                </div>
                <div className="text-left">
                  <p className="text-blue-300 text-sm">Email</p>
                  <a href="mailto:azhou@rc.com" className="text-white font-semibold hover:text-blue-300 transition-colors cursor-pointer">
                    azhou@rc.com
                  </a>
                </div>
              </div>
              
              <p className="text-blue-200 text-sm">
                For compliance, regulatory filings, or legal inquiries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
