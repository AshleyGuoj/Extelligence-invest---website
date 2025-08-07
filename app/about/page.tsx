import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <main>
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About Extelligence
            </h1>
            <p className="text-xl text-gray-600">
              Building the future of intelligent investing
            </p>
          </div>
          
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-700 mb-6">
              Extelligence is a modern investment platform designed to help individuals make informed 
              financial decisions. Our mission is to democratize access to sophisticated investment 
              tools and strategies that were previously available only to institutional investors.
            </p>
            
            <p className="text-gray-700 mb-6">
              Founded in 2024, we combine cutting-edge technology with proven investment principles 
              to create a platform that is both powerful and easy to use. Our team of financial 
              experts and technology professionals work together to provide you with the tools you 
              need to build and manage your investment portfolio.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Our Values
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-primary-600 text-4xl mb-2">🔒</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Security</h3>
                <p className="text-gray-600">
                  Bank-level security to protect your investments and personal data
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-primary-600 text-4xl mb-2">📊</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Transparency</h3>
                <p className="text-gray-600">
                  Clear, honest communication about fees, risks, and performance
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-primary-600 text-4xl mb-2">🎯</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">
                  Continuous improvement through technology and research
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Contact Us
            </h2>
            
            <p className="text-gray-700 mb-4">
              Have questions or need support? We're here to help.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">support@extelligence.com</p>
              </div>
              
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
} 