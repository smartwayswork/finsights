import React, { useState } from 'react'
import { BarChart3, LineChart, Calendar, Download } from 'lucide-react'
import PerformanceChart from '../components/PerformanceChart'
import RiskAnalysis from '../components/RiskAnalysis'

const Analytics: React.FC = () => {
  const [timeframe, setTimeframe] = useState('1Y')

  const timeframes = ['1M', '3M', '6M', '1Y', '2Y', '5Y']

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
          <p className="mt-1 text-sm text-gray-500">
            Deep dive into your portfolio performance and risk metrics
          </p>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <div className="flex bg-gray-100 rounded-lg p-1">
            {timeframes.map((tf) => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf)}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                  timeframe === tf
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tf}
              </button>
            ))}
          </div>
          <button className="btn-secondary">
            <Download className="w-4 h-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="metric-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Return</p>
              <p className="text-2xl font-bold text-success-600">+24.8%</p>
            </div>
            <BarChart3 className="w-8 h-8 text-success-600" />
          </div>
        </div>

        <div className="metric-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Annualized Return</p>
              <p className="text-2xl font-bold text-primary-600">+18.2%</p>
            </div>
            <LineChart className="w-8 h-8 text-primary-600" />
          </div>
        </div>

        <div className="metric-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Volatility</p>
              <p className="text-2xl font-bold text-orange-600">12.4%</p>
            </div>
            <BarChart3 className="w-8 h-8 text-orange-600" />
          </div>
        </div>

        <div className="metric-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Sharpe Ratio</p>
              <p className="text-2xl font-bold text-purple-600">1.47</p>
            </div>
            <Calendar className="w-8 h-8 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Performance Chart */}
      <PerformanceChart timeframe={timeframe} />

      {/* Risk Analysis */}
      <RiskAnalysis />
    </div>
  )
}

export default Analytics