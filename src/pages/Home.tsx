import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  const navigate = useNavigate();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="bg-gradient-to-b from-dark-100 to-dark min-h-screen text-gray-100">
      <nav className="top-0 right-0 left-0 z-50 fixed border-dark-200 bg-dark-100/80 backdrop-blur-md border-b">
        <div className="flex justify-between items-center mx-auto px-4 h-16 container">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 ,}}  className="flex items-center space-x-2">
            <span className="font-bold text-2xl text-white">BAKAR</span>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/dashboard')}
            className="bg-accent hover:bg-accent-light px-6 py-2 rounded-lg font-medium text-white transition-colors"
          >
            Dashboard
          </motion.button>
        </div>
      </nav>

      <main className="pt-24">
        <section className="mx-auto px-4 py-16 container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-4xl text-center"
          >
            <motion.h1
              variants={itemVariants}
              className="bg-clip-text bg-gradient-to-r from-accent to-accent-light mb-6 font-bold text-5xl text-transparent"
            >
              Virtual Cards for Modern Business
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mb-12 text-gray-300 text-xl"
            >
              Instantly access virtual cards and monitor your expenses in real-time. Take control of your business spending.
            </motion.p>
          </motion.div>
        </section>
      </main>
    </div>
  );
}