import TransactionsTable from '@/components/TransactionsTable';
import { motion } from 'framer-motion';

export function Transactions() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-3xl text-white">Transactions</h1>
       
      </div>

      
      <div>

        <TransactionsTable />

      </div>

    </motion.div>
  );
}