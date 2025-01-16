import { CreaditCard } from '@/components/CreaditCard';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useEffect, useState } from 'react';
import {CreditCardProps} from '@/types'


export function Cards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/cards')
      .then(response => response.json())
      .then(data => setCards(data));
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-3xl text-white">Virtual Cards</h1>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 bg-accent hover:bg-accent-light px-4 py-2 rounded-lg text-white transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>New Card</span>
        </motion.button>
      </div>

      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Example Card */}
        {cards.map((card:CreditCardProps, index) => (
          <CreaditCard key={index}
            holderName={card.holderName}
            cardNumber={card.cardNumber}
            expires={card.expires}
            monthlyLimit={card.monthlyLimit}
            spent={card.spent}
            status={card.status}
          />
        ))}
       
      </div>
    </motion.div>
  );
}