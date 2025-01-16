import { motion } from 'framer-motion';
import { TrendingUp, PieChart, BarChart3 } from 'lucide-react';

export function Analytics() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <h1 className="text-3xl font-bold text-white">Analytics</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="p-6 bg-dark-50 rounded-xl border border-dark-200"
        >
          <h2 className="text-xl font-semibold text-white mb-4">Spending Overview</h2>
          <div className="h-64 flex items-center justify-center">
            <BarChart3 className="h-12 w-12 text-gray-400" />
            <p className="text-gray-400">Chart will be implemented here</p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.01 }}
          className="p-6 bg-dark-50 rounded-xl border border-dark-200"
        >
          <h2 className="text-xl font-semibold text-white mb-4">Category Distribution</h2>
          <div className="h-64 flex items-center justify-center">
            <PieChart className="h-12 w-12 text-gray-400" />
            <p className="text-gray-400">Chart will be implemented here</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        whileHover={{ scale: 1.01 }}
        className="p-6 bg-dark-50 rounded-xl border border-dark-200"
      >
        <h2 className="text-xl font-semibold text-white mb-4">Monthly Trends</h2>
        <div className="h-64 flex items-center justify-center">
          <TrendingUp className="h-12 w-12 text-gray-400" />
          <p className="text-gray-400">Chart will be implemented here</p>
        </div>
      </motion.div>
    </motion.div>
  );
}