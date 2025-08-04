
'use client';

export default function ContactInfo() {
  const contactInfo = [
    { purpose: 'General Inquiries', email: 'contact@extelligence.vc', icon: 'ri-mail-line' },
    { purpose: 'Founder Pitches', email: 'founders@extelligence.vc', icon: 'ri-rocket-line' },
    { purpose: 'Media & Press', email: 'media@extelligence.vc', icon: 'ri-news-line' },
    { purpose: 'Legal & Compliance', email: 'azhou@rc.com', icon: 'ri-shield-check-line' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <i className="ri-mail-send-line w-12 h-12 flex items-center justify-center text-blue-600 text-4xl"></i>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Information
          </h2>
        </div>

        {/* Contact Table */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid gap-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-4">
                    <i className={`${item.icon} w-8 h-8 flex items-center justify-center text-blue-600 text-xl`}></i>
                    <span className="text-lg font-medium text-gray-900">{item.purpose}</span>
                  </div>
                  <a 
                    href={`mailto:${item.email}`}
                    className="text-blue-600 hover:text-blue-800 font-medium transition-colors cursor-pointer"
                  >
                    {item.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Address and Social */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <i className="ri-map-pin-line w-8 h-8 flex items-center justify-center text-blue-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Mailing Address</h3>
            <p className="text-gray-600">
              New York, NY, USA
            </p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <i className="ri-links-line w-8 h-8 flex items-center justify-center text-blue-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://www.linkedin.com/company/extelligence-invest" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors cursor-pointer"
              >
                <i className="ri-linkedin-fill w-5 h-5 flex items-center justify-center"></i>
              </a>
              <a 
                href="https://twitter.com/extelligence" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors cursor-pointer"
              >
                <i className="ri-twitter-x-fill w-5 h-5 flex items-center justify-center"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
