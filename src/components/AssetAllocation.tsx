import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

const AssetAllocation: React.FC = () => {
  const data = [
    { name: 'Stocks', value: 65, color: '#0ea5e9' },
    { name: 'Bonds', value: 20, color: '#22c55e' },
    { name: 'Real Estate', value: 10, color: '#f59e0b' },
    { name: 'Cash', value: 5, color: '#6b7280' }
  ]

  const RADIAN = Math.PI / 180
  const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        fontSize={12}
        fontWeight="bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Pie Chart */}
      <div className="chart-container">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Asset Allocation</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value}%`, 'Allocation']} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Allocation Details */}
      <div className="chart-container">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Allocation Details</h3>
        <div className="space-y-4">
          {data.map((item) => (
            <div key={item.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="font-medium text-gray-900">{item.name}</span>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">{item.value}%</p>
                <p className="text-sm text-gray-500">
                  ${((124567.89 * item.value) / 100).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-primary-50 rounded-lg">
          <h4 className="font-medium text-primary-900 mb-2">Rebalancing Recommendation</h4>
          <p className="text-sm text-primary-700">
            Your portfolio is well-diversified. Consider increasing bond allocation by 5% to reduce risk.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AssetAllocation