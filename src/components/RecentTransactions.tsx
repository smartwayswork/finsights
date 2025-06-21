import React from 'react'
import { ArrowUpRight, ArrowDownLeft, Calendar } from 'lucide-react'

const RecentTransactions: React.FC = () => {
  const transactions = [
    {
      id: 1,
      type: 'buy',
      asset: 'AAPL',
      name: 'Apple Inc.',
      amount: '$2,500.00',
      shares: '15',
      price: '$166.67',
      date: '2024-01-15',
      status: 'completed'
    },
    {
      id: 2,
      type: 'sell',
      asset: 'TSLA',
      name: 'Tesla Inc.',
      amount: '$1,800.00',
      shares: '8',
      price: '$225.00',
      date: '2024-01-14',
      status: 'completed'
    },
    {
      id: 3,
      type: 'buy',
      asset: 'MSFT',
      name: 'Microsoft Corp.',
      amount: '$3,200.00',
      shares: '10',
      price: '$320.00',
      date: '2024-01-13',
      status: 'pending'
    },
    {
      id: 4,
      type: 'dividend',
      asset: 'VTI',
      name: 'Vanguard Total Stock',
      amount: '$125.50',
      shares: '50',
      price: '$2.51',
      date: '2024-01-12',
      status: 'completed'
    }
  ]

  return (
    <div className="chart-container">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
          <p className="text-sm text-gray-500">Your latest investment activity</p>
        </div>
        <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="flex items-center space-x-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                transaction.type === 'buy' 
                  ? 'bg-success-100 text-success-600'
                  : transaction.type === 'sell'
                  ? 'bg-danger-100 text-danger-600'
                  : 'bg-primary-100 text-primary-600'
              }`}>
                {transaction.type === 'buy' ? (
                  <ArrowDownLeft className="w-5 h-5" />
                ) : transaction.type === 'sell' ? (
                  <ArrowUpRight className="w-5 h-5" />
                ) : (
                  <Calendar className="w-5 h-5" />
                )}
              </div>
              
              <div>
                <div className="flex items-center space-x-2">
                  <p className="font-medium text-gray-900">{transaction.asset}</p>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    transaction.status === 'completed'
                      ? 'bg-success-100 text-success-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {transaction.status}
                  </span>
                </div>
                <p className="text-sm text-gray-500">{transaction.name}</p>
              </div>
            </div>

            <div className="text-right">
              <p className={`font-medium ${
                transaction.type === 'buy' 
                  ? 'text-danger-600' 
                  : 'text-success-600'
              }`}>
                {transaction.type === 'buy' ? '-' : '+'}{transaction.amount}
              </p>
              <p className="text-sm text-gray-500">
                {transaction.shares} shares @ {transaction.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentTransactions