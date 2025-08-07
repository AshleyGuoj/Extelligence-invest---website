import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PortfolioPage() {
  const portfolio = [
    {
      id: 1,
      name: 'Tech Growth Fund',
      shares: 100,
      avgPrice: 42.50,
      currentPrice: 45.67,
      totalValue: 4567.00,
      gainLoss: 317.00,
      gainLossPercent: 7.5,
    },
    {
      id: 2,
      name: 'Global Index Fund',
      shares: 25,
      avgPrice: 125.00,
      currentPrice: 128.90,
      totalValue: 3222.50,
      gainLoss: 97.50,
      gainLossPercent: 3.1,
    },
    {
      id: 3,
      name: 'Bond Portfolio',
      shares: 50,
      avgPrice: 88.00,
      currentPrice: 89.45,
      totalValue: 4472.50,
      gainLoss: 72.50,
      gainLossPercent: 1.6,
    },
  ]

  const totalValue = portfolio.reduce((sum, item) => sum + item.totalValue, 0)
  const totalGainLoss = portfolio.reduce((sum, item) => sum + item.gainLoss, 0)
  const totalGainLossPercent = (totalGainLoss / (totalValue - totalGainLoss)) * 100

  return (
    <main>
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Your Portfolio
          </h1>
          <p className="text-gray-600">
            Track your investments and performance
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Value</h3>
            <p className="text-3xl font-bold text-gray-900">
              ${totalValue.toLocaleString()}
            </p>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Gain/Loss</h3>
            <p className={`text-3xl font-bold ${totalGainLoss >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {totalGainLoss >= 0 ? '+' : ''}${totalGainLoss.toLocaleString()}
            </p>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance</h3>
            <p className={`text-3xl font-bold ${totalGainLossPercent >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {totalGainLossPercent >= 0 ? '+' : ''}{totalGainLossPercent.toFixed(1)}%
            </p>
          </div>
        </div>
        
        <div className="space-y-4">
          {portfolio.map((item) => (
            <div key={item.id} className="card">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-gray-600">
                    {item.shares} shares @ ${item.avgPrice.toFixed(2)} avg
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900">
                    ${item.totalValue.toLocaleString()}
                  </p>
                  <p className={`text-sm ${item.gainLoss >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {item.gainLoss >= 0 ? '+' : ''}${item.gainLoss.toFixed(2)} ({item.gainLossPercent.toFixed(1)}%)
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </main>
  )
} 