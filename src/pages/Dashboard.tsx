import { motion } from 'framer-motion';
import { CreditCard, TrendingUp, ArrowUpRight } from 'lucide-react';

export function Dashboard() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <h1 className="font-bold text-3xl text-white">Dashboard</h1>

      {/* Stats Grid */}
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="border-dark-200 bg-dark-50 p-6 border rounded-xl"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-400 text-sm">Total Balance</p>
              <h3 className="font-bold text-2xl text-white">€124,500.00</h3>
            </div>
            <div className="bg-green-500/10 p-2 rounded-lg">
              <TrendingUp className="w-6 h-6 text-green-500" />
            </div>
          </div>
          <div className="flex items-center text-green-500">
            <ArrowUpRight className="mr-1 w-4 h-4" />
            <span className="text-sm">+2.5% this month</span>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="border-dark-200 bg-dark-50 p-6 border rounded-xl"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-400 text-sm">Active Cards</p>
              <h3 className="font-bold text-2xl text-white">12</h3>
            </div>
            <div className="bg-accent/10 p-2 rounded-lg">
              <CreditCard className="w-6 h-6 text-accent" />
            </div>
          </div>
          <div className="flex items-center text-accent">
            <ArrowUpRight className="mr-1 w-4 h-4" />
            <span className="text-sm">+3 new this month</span>
          </div>
        </motion.div>

        {/* Add more stat cards */}
      </div>

      {/* Recent Transactions */}
      <div className="mt-8">
        <h2 className="mb-4 font-semibold text-white text-xl">Recent Transactions</h2>
        <div className="border-dark-200 bg-dark-50 border rounded-xl overflow-hidden">
          <div className="p-6">
            {/* Add transaction list */}
            <p className="text-gray-300">Transaction list will go here</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}