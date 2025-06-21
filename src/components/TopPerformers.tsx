import React from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'

const TopPerformers: React.FC = () => {
  const performers = [
    {
      symbol: 'NVDA',
      name: 'NVIDIA Corp.',
      change: '+24.8%',
      value: '$875.32',
      trend: 'up'
    },
    {
      symbol: 'AAPL',
      name: 'Apple Inc.',
      change: '+12.4%',
      value: '$166.67',
      trend: 'up'
    },
    {
      symbol: 'MSFT',
      name: 'Microsoft Corp.',
      change: '+8.9%',
      value: '$320.15',
      trend: 'up'
    },
    {
      symbol: 'TSLA',
      name: 'Tesla Inc.',
      change: '-5.2%',
      value: '$225.00',
      trend: 'down'
    },
    {
      symbol: 'AMZN',
      name: 'Amazon.com Inc.',
      change: '-2.1%',
      value: '$142.85',
      trend: 'down'
    }
  ]

  return (
    <div className="chart-container">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Top Performers</h3>
          <p className="text-sm text-gray-500">Best and worst performing assets</p>
        </div>
      </div>

      <div className="space-y-4">
        {performers.map((stock, index) => (
          <div key={stock.symbol} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-xs font-medium text-gray-600">
                  {index + 1}
                </span>
              </div>
              <div>
                <p className="font-medium text-gray-900">{stock.symbol}</p>
                <p className="text-sm text-gray-500">{stock.name}</p>
              </div>
            </div>

            <div className="text-right">
              <p className="font-medium text-gray-900">{stock.value}</p>
              <div className="flex items-center justify-end space-x-1">
                {stock.trend === 'up' ? (
                  <TrendingUp className="w-4 h-4 text-success-600" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-danger-600" />
                )}
                <span className={`text-sm font-medium ${
                  stock.trend === 'up' ? 'text-success-600' : 'text-danger-600'
                }`}>
                  {stock.change}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopPerformers