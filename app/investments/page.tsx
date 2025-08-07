import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function InvestmentsPage() {
  const investments = [
    {
      id: 1,
      name: 'Tech Growth Fund',
      type: 'ETF',
      price: 45.67,
      change: 2.34,
      changePercent: 5.4,
    },
    {
      id: 2,
      name: 'Global Index Fund',
      type: 'Index',
      price: 128.90,
      change: -1.23,
      changePercent: -0.9,
    },
    {
      id: 3,
      name: 'Bond Portfolio',
      type: 'Bond',
      price: 89.45,
      change: 0.67,
      changePercent: 0.8,
    },
  ]

  return (
    <main>
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Investment Opportunities
          </h1>
          <p className="text-gray-600">
            Discover and invest in carefully selected opportunities
          </p>
        </div>
        
        <div className="grid gap-6">
          {investments.map((investment) => (
            <div key={investment.id} className="card">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {investment.name}
                  </h3>
                  <p className="text-gray-600">{investment.type}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900">
                    ${investment.price.toFixed(2)}
                  </p>
                  <p className={`text-sm ${investment.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {investment.change >= 0 ? '+' : ''}{investment.change.toFixed(2)} ({investment.changePercent.toFixed(1)}%)
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <button className="btn-primary w-full">
                  Invest Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </main>
  )
} 