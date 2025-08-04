
'use client';

export default function LegalHero() {
  return (
    <section 
      className="relative py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.8)), url('https://readdy.ai/api/search-image?query=Professional%20legal%20documents%20and%20regulatory%20compliance%20materials%20arranged%20on%20a%20modern%20desk%20with%20scales%20of%20justice%20symbol%2C%20clean%20minimal%20background%20with%20blue%20and%20white%20corporate%20colors%2C%20professional%20lighting%2C%20high-end%20business%20photography%20style&width=1200&height=600&seq=legal-hero&orientation=landscape')`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8">
          <i className="ri-file-shield-line text-3xl text-white w-8 h-8 flex items-center justify-center"></i>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Legal & Disclosures
        </h1>
        
        <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
          Regulatory compliance, transparency, and professional standards in investment management
        </p>
      </div>
    </section>
  );
}
