import React, { useState } from 'react'
import { PieChart, BarChart3, TrendingUp, Plus } from 'lucide-react'
import AssetAllocation from '../components/AssetAllocation'
import HoldingsTable from '../components/HoldingsTable'

const Portfolio: React.FC = () => {
  const [view, setView] = useState<'allocation' | 'performance'>('allocation')

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Portfolio</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage and track your investment portfolio
          </p>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setView('allocation')}
              className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                view === 'allocation'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <PieChart className="w-4 h-4 mr-1 inline" />
              Allocation
            </button>
            <button
              onClick={() => setView('performance')}
              className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                view === 'performance'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <BarChart3 className="w-4 h-4 mr-1 inline" />
              Performance
            </button>
          </div>
          <button className="btn-primary">
            <Plus className="w-4 h-4 mr-2" />
            Add Asset
          </button>
        </div>
      </div>

      {/* Portfolio Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="metric-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Value</p>
              <p className="text-2xl font-bold text-gray-900">$124,567.89</p>
            </div>
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-primary-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-sm text-success-600 font-medium">+12.5%</span>
            <span className="text-sm text-gray-500 ml-2">vs last month</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Day's Gain/Loss</p>
              <p className="text-2xl font-bold text-success-600">+$1,234.56</p>
            </div>
            <div className="w-12 h-12 bg-success-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-success-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-sm text-success-600 font-medium">+0.99%</span>
            <span className="text-sm text-gray-500 ml-2">today</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Cash Balance</p>
              <p className="text-2xl font-bold text-gray-900">$8,432.10</p>
            </div>
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <PieChart className="w-6 h-6 text-gray-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-sm text-gray-500">Available for investment</span>
          </div>
        </div>
      </div>

      {/* Asset Allocation */}
      {view === 'allocation' && <AssetAllocation />}

      {/* Holdings Table */}
      <HoldingsTable />
    </div>
  )
}

export default Portfolio