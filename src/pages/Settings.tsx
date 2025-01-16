import { motion } from 'framer-motion';
import { Bell, Lock, User } from 'lucide-react';

export function Settings() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <h1 className="font-bold text-3xl text-white">Settings</h1>

      <div className="gap-6 grid grid-cols-1">
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="border-dark-200 bg-dark-50 p-6 border rounded-xl"
        >
          <div className="flex items-center space-x-3 mb-6">
            <User className="w-6 h-6 text-accent" />
            <h2 className="font-semibold text-white text-xl">Profile Settings</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block mb-1 font-medium text-gray-400 text-sm">Company Name</label>
              <input
                type="text"
                className="border-dark-200 bg-dark-100 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent w-full text-white focus:outline-none"
                placeholder="Enter company name"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-400 text-sm">Email Address</label>
              <input
                type="email"
                className="border-dark-200 bg-dark-100 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent w-full text-white focus:outline-none"
                placeholder="Enter email address"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.01 }}
          className="border-dark-200 bg-dark-50 p-6 border rounded-xl"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Bell className="w-6 h-6 text-accent" />
            <h2 className="font-semibold text-white text-xl">Notification Preferences</h2>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Transaction Alerts</span>
              <label className="inline-flex relative items-center cursor-pointer">
                <input type="checkbox" className="peer sr-only" />
                <div className="after:top-[2px] after:left-[2px] after:absolute after:content-[''] peer-checked:after:border-white after:border-gray-300 bg-dark-100 after:bg-white peer-checked:bg-accent after:border rounded-full after:rounded-full peer-focus:ring-4 peer-focus:ring-accent/20 w-11 after:w-5 h-6 after:h-5 after:transition-all peer-checked:after:translate-x-full peer peer-focus:outline-none"></div>
              </label>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Card Status Updates</span>
              <label className="inline-flex relative items-center cursor-pointer">
                <input type="checkbox" className="peer sr-only" />
                <div className="after:top-[2px] after:left-[2px] after:absolute after:content-[''] peer-checked:after:border-white after:border-gray-300 bg-dark-100 after:bg-white peer-checked:bg-accent after:border rounded-full after:rounded-full peer-focus:ring-4 peer-focus:ring-accent/20 w-11 after:w-5 h-6 after:h-5 after:transition-all peer-checked:after:translate-x-full peer peer-focus:outline-none"></div>
              </label>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.01 }}
          className="border-dark-200 bg-dark-50 p-6 border rounded-xl"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Lock className="w-6 h-6 text-accent" />
            <h2 className="font-semibold text-white text-xl">Security Settings</h2>
          </div>
          <div className="space-y-4">
            <button className="bg-accent hover:bg-accent-light px-4 py-2 rounded-lg w-full text-white transition-colors">
              Change Password
            </button>
            <button className="bg-dark-100 hover:bg-dark-200 px-4 py-2 rounded-lg w-full text-white transition-colors">
              Enable Two-Factor Authentication
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}