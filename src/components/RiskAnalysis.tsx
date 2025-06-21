import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Shield, AlertTriangle, TrendingUp } from 'lucide-react'

const RiskAnalysis: React.FC = () => {
  const riskData = [
    { category: 'Market Risk', current: 7.2, benchmark: 6.8 },
    { category: 'Credit Risk', current: 3.1, benchmark: 4.2 },
    { category: 'Liquidity Risk', current: 2.8, benchmark: 3.5 },
    { category: 'Concentration Risk', current: 5.9, benchmark: 5.0 },
  ]

  const riskMetrics = [
    {
      title: 'Value at Risk (VaR)',
      value: '$8,234',
      description: '95% confidence, 1-day horizon',
      icon: AlertTriangle,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      title: 'Beta',
      value: '1.12',
      description: 'vs S&P 500',
      icon: TrendingUp,
      color: 'text-primary-600',
      bgColor: 'bg-primary-100'
    },
    {
      title: 'Risk Score',
      value: '7.2/10',
      description: 'Moderate-High Risk',
      icon: Shield,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Risk Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {riskMetrics.map((metric) => {
          const Icon = metric.icon
          return (
            <div key={metric.title} className="metric-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{metric.description}</p>
                </div>
                <div className={`w-12 h-12 ${metric.bgColor} rounded-lg flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${metric.color}`} />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Risk Breakdown Chart */}
      <div className="chart-container">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Risk Breakdown</h3>
            <p className="text-sm text-gray-500">Your portfolio risk vs benchmark</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-primary-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Your Portfolio</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Benchmark</span>
            </div>
          </div>
        </div>
        
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={riskData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="category" 
                stroke="#6b7280"
                fontSize={12}
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis 
                stroke="#6b7280"
                fontSize={12}
                domain={[0, 10]}
              />
              <Tooltip 
                formatter={(value: number, name: string) => [
                  value.toFixed(1), 
                  name === 'current' ? 'Your Portfolio' : 'Benchmark'
                ]}
                labelStyle={{ color: '#374151' }}
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Bar dataKey="current" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
              <Bar dataKey="benchmark" fill="#9ca3af" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default RiskAnalysis