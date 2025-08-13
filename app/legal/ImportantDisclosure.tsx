
'use client';

export default function ImportantDisclosure() {
  return (
    <section className="py-16 bg-red-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ri-error-warning-line text-2xl text-white w-6 h-6 flex items-center justify-center"></i>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Important Disclosure
          </h2>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-red-200">
          <div className="space-y-6">
            <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
              <p className="text-gray-700 leading-relaxed">
                The materials on this website are for <strong>informational purposes only</strong> and do not constitute an offer to sell or a solicitation of an offer to buy any securities.
              </p>
            </div>
            
            <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
              <p className="text-gray-700 leading-relaxed">
                Nothing herein should be relied upon as <strong>legal, tax, or investment advice</strong>.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
              <p className="text-gray-700 leading-relaxed">
                <strong>Extelligence Invest</strong> does not solicit investments from the general public.
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Please consult with qualified legal, tax, and investment professionals before making any investment decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
