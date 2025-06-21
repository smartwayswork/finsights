import React from 'react'
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  PieChart,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react'
import MetricCard from '../components/MetricCard'
import PortfolioChart from '../components/PortfolioChart'
import RecentTransactions from '../components/RecentTransactions'
import TopPerformers from '../components/TopPerformers'

const Dashboard: React.FC = () => {
  const metrics = [
    {
      title: 'Total Portfolio Value',
      value: '$124,567.89',
      change: '+12.5%',
      trend: 'up' as const,
      icon: DollarSign,
      color: 'primary'
    },
    {
      title: 'Monthly Return',
      value: '+$8,234.12',
      change: '+5.2%',
      trend: 'up' as const,
      icon: TrendingUp,
      color: 'success'
    },
    {
      title: 'Active Investments',
      value: '23',
      change: '+2',
      trend: 'up' as const,
      icon: PieChart,
      color: 'primary'
    },
    {
      title: 'Risk Score',
      value: '7.2/10',
      change: '-0.3',
      trend: 'down' as const,
      icon: TrendingDown,
      color: 'danger'
    }
  ]

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">
            Welcome back! Here's your financial overview.
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <button className="btn-primary">
            <ArrowUpRight className="w-4 h-4 mr-2" />
            New Investment
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div key={metric.title} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
            <MetricCard {...metric} />
          </div>
        ))}
      </div>

      {/* Charts and Data */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Portfolio Performance Chart */}
        <div className="lg:col-span-2">
          <PortfolioChart />
        </div>

        {/* Top Performers */}
        <div>
          <TopPerformers />
        </div>
      </div>

      {/* Recent Transactions */}
      <div>
        <RecentTransactions />
      </div>
    </div>
  )
}

export default Dashboard