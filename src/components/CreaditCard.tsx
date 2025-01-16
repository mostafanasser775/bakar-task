import { CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';
import {CreditCardProps} from '@/types'

  export const CreaditCard = ({
    holderName,
    cardNumber,
    expires,
    monthlyLimit,
    spent,
    status,
  }: CreditCardProps) => {
    return (
      <div className="cursor-pointer">
        <motion.div
          whileHover={{ scale: 1.01 }}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          className="relative hover:shadow-lg rounded-xl"
        >
          <div className="bg-dark-50 p-6 rounded-2xl">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center space-x-2">
                <CreditCard className="w-6 h-6 text-gray-100" />
                <span className="font-semibold text-white">{holderName}</span>
              </div>
              <span className={`font-semibold ${status === 'Active' ? 'text-green-400' : 'text-red-400'}`}>{status}</span>
            </div>
            <div className="mb-4">
              <div className="font-mono text-lg text-white">{cardNumber}</div>
              <div className="text-gray-400 text-sm">{expires}</div>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-gray-400 text-sm">Monthly Limit</div>
                <div className="font-bold text-white text-xl">{monthlyLimit}</div>
              </div>
              <div className="text-right">
                <div className="text-gray-400 text-sm">Spent</div>
                <div className="font-bold text-white text-xl">{spent}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  };