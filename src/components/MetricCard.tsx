import React from 'react'
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react'

interface MetricCardProps {
  title: string
  value: string
  change: string
  trend: 'up' | 'down'
  icon: LucideIcon
  color: 'primary' | 'success' | 'danger'
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  trend,
  icon: Icon,
  color
}) => {
  const colorClasses = {
    primary: {
      bg: 'bg-primary-100',
      icon: 'text-primary-600',
      trend: trend === 'up' ? 'text-success-600' : 'text-danger-600'
    },
    success: {
      bg: 'bg-success-100',
      icon: 'text-success-600',
      trend: trend === 'up' ? 'text-success-600' : 'text-danger-600'
    },
    danger: {
      bg: 'bg-danger-100',
      icon: 'text-danger-600',
      trend: trend === 'up' ? 'text-success-600' : 'text-danger-600'
    }
  }

  const TrendIcon = trend === 'up' ? TrendingUp : TrendingDown

  return (
    <div className="metric-card group hover:scale-105 transition-transform duration-200">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
        </div>
        <div className={`w-12 h-12 ${colorClasses[color].bg} rounded-lg flex items-center justify-center`}>
          <Icon className={`w-6 h-6 ${colorClasses[color].icon}`} />
        </div>
      </div>
      
      <div className="mt-4 flex items-center">
        <TrendIcon className={`w-4 h-4 mr-1 ${colorClasses[color].trend}`} />
        <span className={`text-sm font-medium ${colorClasses[color].trend}`}>
          {change}
        </span>
        <span className="text-sm text-gray-500 ml-2">vs last period</span>
      </div>
    </div>
  )
}

export default MetricCard