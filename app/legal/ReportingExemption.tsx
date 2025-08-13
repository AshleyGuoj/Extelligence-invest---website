
'use client';

export default function ReportingExemption() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ri-file-list-3-line text-2xl text-white w-6 h-6 flex items-center justify-center"></i>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Reporting Exemption
          </h2>
        </div>

        <div className="bg-white rounded-2xl p-8">
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            <strong className="text-blue-600">Extelligence Invest</strong> qualifies as an ERA by meeting all of the following:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                  <i className="ri-check-line text-white w-4 h-4 flex items-center justify-center"></i>
                </div>
                <p className="text-gray-700">We advise exclusively private funds</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                  <i className="ri-check-line text-white w-4 h-4 flex items-center justify-center"></i>
                </div>
                <p className="text-gray-700">We do not manage public products or retail investor assets</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                  <i className="ri-check-line text-white w-4 h-4 flex items-center justify-center"></i>
                </div>
                <p className="text-gray-700">We do not hold client funds or custody</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                  <i className="ri-check-line text-white w-4 h-4 flex items-center justify-center"></i>
                </div>
                <p className="text-gray-700">Our U.S. AUM is under $150 million</p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-6">
            <p className="text-gray-700 leading-relaxed">
              All reporting is submitted via the SEC's IARD system, including <strong>Form ADV Part 1A</strong> and applicable schedules.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
