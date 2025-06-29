import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts'

interface PerformanceChartProps {
  timeframe: string
}

const PerformanceChart: React.FC<PerformanceChartProps> = ({ timeframe }) => {
  // Generate data based on timeframe
  const generateData = () => {
    const baseData = [
      { date: 'Jan', portfolio: 95000, sp500: 94000, volatility: 12 },
      { date: 'Feb', portfolio: 98000, sp500: 96000, volatility: 14 },
      { date: 'Mar', portfolio: 102000, sp500: 99000, volatility: 16 },
      { date: 'Apr', portfolio: 108000, sp500: 103000, volatility: 13 },
      { date: 'May', portfolio: 112000, sp500: 107000, volatility: 11 },
      { date: 'Jun', portfolio: 118000, sp500: 112000, volatility: 15 },
      { date: 'Jul', portfolio: 124567, sp500: 118000, volatility: 12 },
    ]
    
    return baseData
  }

  const data = generateData()

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Performance Chart */}
      <div className="lg:col-span-2 chart-container">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Performance Comparison</h3>
            <p className="text-sm text-gray-500">Portfolio vs S&P 500 ({timeframe})</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-primary-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Portfolio</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">S&P 500</span>
            </div>
          </div>
        </div>
        
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="date" 
                stroke="#6b7280"
                fontSize={12}
              />
              <YAxis 
                stroke="#6b7280"
                fontSize={12}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip 
                formatter={(value: number, name: string) => [
                  `$${value.toLocaleString()}`, 
                  name === 'portfolio' ? 'Portfolio' : 'S&P 500'
                ]}
                labelStyle={{ color: '#374151' }}
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="portfolio" 
                stroke="#0ea5e9" 
                strokeWidth={3}
                dot={{ fill: '#0ea5e9', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#0ea5e9', strokeWidth: 2 }}
              />
              <Line 
                type="monotone" 
                dataKey="sp500" 
                stroke="#9ca3af" 
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Volatility Chart */}
      <div className="chart-container">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Volatility</h3>
          <p className="text-sm text-gray-500">Portfolio risk over time</p>
        </div>
        
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="date" 
                stroke="#6b7280"
                fontSize={12}
              />
              <YAxis 
                stroke="#6b7280"
                fontSize={12}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip 
                formatter={(value: number) => [`${value}%`, 'Volatility']}
                labelStyle={{ color: '#374151' }}
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Area
                type="monotone"
                dataKey="volatility"
                stroke="#f59e0b"
                fill="#fef3c7"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default PerformanceChart