
'use client';

export default function EthosSection() {
  return (
    <section className="py-12 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Our Ethos
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <i className="ri-lightbulb-line w-6 h-6 flex items-center justify-center text-blue-600 text-xl"></i>
              </div>
            </div>
            
            <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
              We invest in defensible businesses across AI, deeptech, data infrastructure, and healthcare, and are proud to partner with some of the world's most visionary technical founders.
            </blockquote>
            
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <i className="ri-brain-line w-5 h-5 flex items-center justify-center text-white"></i>
                </div>
                <h4 className="text-sm font-semibold text-gray-900">AI</h4>
              </div>
              
              <div className="text-center">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <i className="ri-cpu-line w-5 h-5 flex items-center justify-center text-white"></i>
                </div>
                <h4 className="text-sm font-semibold text-gray-900">Deeptech</h4>
              </div>
              
              <div className="text-center">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <i className="ri-database-2-line w-5 h-5 flex items-center justify-center text-white"></i>
                </div>
                <h4 className="text-sm font-semibold text-gray-900">Data Infrastructure</h4>
              </div>
              
              <div className="text-center">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <i className="ri-heart-pulse-line w-5 h-5 flex items-center justify-center text-white"></i>
                </div>
                <h4 className="text-sm font-semibold text-gray-900">Healthcare</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
