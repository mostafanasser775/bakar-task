import React from 'react'
import { Menu, X } from 'lucide-react';

export const TopBar = ({isSidebarOpen,setIsSidebarOpen}:{isSidebarOpen: boolean,setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {
  return (
    <div>
        
        <header className="top-0 z-40 sticky border-dark-200 bg-dark-50/80 backdrop-blur-md border-b">
          <div className="flex justify-between items-center px-4 py-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="hover:bg-dark-100 p-2 rounded-lg text-gray-300 transition-colors"
            >
              {isSidebarOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
            <div className="flex items-center space-x-4">
              {/* Add profile, notifications, any other. */}
              <div className='flex justify-center items-center bg-gray-200 rounded-full w-10 h-10 cursor-pointer'>
                ANY
              </div>
            </div>
          </div>
        </header>
    </div>
  )
}

