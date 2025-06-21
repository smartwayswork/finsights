import React from 'react'
import { TrendingUp, TrendingDown, MoreHorizontal } from 'lucide-react'

const HoldingsTable: React.FC = () => {
  const holdings = [
    {
      symbol: 'AAPL',
      name: 'Apple Inc.',
      shares: 15,
      avgCost: '$155.20',
      currentPrice: '$166.67',
      marketValue: '$2,500.05',
      dayChange: '+$171.05',
      dayChangePercent: '+7.34%',
      totalReturn: '+$171.05',
      totalReturnPercent: '+7.34%',
      trend: 'up'
    },
    {
      symbol: 'MSFT',
      name: 'Microsoft Corporation',
      shares: 10,
      avgCost: '$310.50',
      currentPrice: '$320.15',
      marketValue: '$3,201.50',
      dayChange: '+$96.50',
      dayChangePercent: '+3.11%',
      totalReturn: '+$96.50',
      totalReturnPercent: '+3.11%',
      trend: 'up'
    },
    {
      symbol: 'TSLA',
      name: 'Tesla Inc.',
      shares: 8,
      avgCost: '$235.75',
      currentPrice: '$225.00',
      marketValue: '$1,800.00',
      dayChange: '-$86.00',
      dayChangePercent: '-4.56%',
      totalReturn: '-$86.00',
      totalReturnPercent: '-4.56%',
      trend: 'down'
    },
    {
      symbol: 'NVDA',
      name: 'NVIDIA Corporation',
      shares: 5,
      avgCost: '$820.40',
      currentPrice: '$875.32',
      marketValue: '$4,376.60',
      dayChange: '+$274.60',
      dayChangePercent: '+6.69%',
      totalReturn: '+$274.60',
      totalReturnPercent: '+6.69%',
      trend: 'up'
    }
  ]

  return (
    <div className="chart-container">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Holdings</h3>
          <p className="text-sm text-gray-500">Your current investment positions</p>
        </div>
        <button className="btn-secondary">
          Export
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-medium text-gray-600">Asset</th>
              <th className="text-right py-3 px-4 font-medium text-gray-600">Shares</th>
              <th className="text-right py-3 px-4 font-medium text-gray-600">Avg Cost</th>
              <th className="text-right py-3 px-4 font-medium text-gray-600">Current Price</th>
              <th className="text-right py-3 px-4 font-medium text-gray-600">Market Value</th>
              <th className="text-right py-3 px-4 font-medium text-gray-600">Day Change</th>
              <th className="text-right py-3 px-4 font-medium text-gray-600">Total Return</th>
              <th className="text-right py-3 px-4 font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {holdings.map((holding) => (
              <tr key={holding.symbol} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-4">
                  <div>
                    <p className="font-medium text-gray-900">{holding.symbol}</p>
                    <p className="text-sm text-gray-500">{holding.name}</p>
                  </div>
                </td>
                <td className="text-right py-4 px-4 text-gray-900">{holding.shares}</td>
                <td className="text-right py-4 px-4 text-gray-900">{holding.avgCost}</td>
                <td className="text-right py-4 px-4 text-gray-900">{holding.currentPrice}</td>
                <td className="text-right py-4 px-4 font-medium text-gray-900">{holding.marketValue}</td>
                <td className="text-right py-4 px-4">
                  <div className="flex items-center justify-end space-x-1">
                    {holding.trend === 'up' ? (
                      <TrendingUp className="w-4 h-4 text-success-600" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-danger-600" />
                    )}
                    <div className="text-right">
                      <p className={`font-medium ${
                        holding.trend === 'up' ? 'text-success-600' : 'text-danger-600'
                      }`}>
                        {holding.dayChange}
                      </p>
                      <p className={`text-sm ${
                        holding.trend === 'up' ? 'text-success-600' : 'text-danger-600'
                      }`}>
                        {holding.dayChangePercent}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="text-right py-4 px-4">
                  <div className="text-right">
                    <p className={`font-medium ${
                      holding.trend === 'up' ? 'text-success-600' : 'text-danger-600'
                    }`}>
                      {holding.totalReturn}
                    </p>
                    <p className={`text-sm ${
                      holding.trend === 'up' ? 'text-success-600' : 'text-danger-600'
                    }`}>
                      {holding.totalReturnPercent}
                    </p>
                  </div>
                </td>
                <td className="text-right py-4 px-4">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <MoreHorizontal className="w-4 h-4 text-gray-400" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default HoldingsTable