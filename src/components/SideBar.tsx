import { NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { WalletCards, CreditCard, LayoutDashboard, Receipt, LineChart, Settings, LogOut } from 'lucide-react';


const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: WalletCards, label: 'Cards', path: '/dashboard/cards' },
    { icon: Receipt, label: 'Transactions', path: '/dashboard/transactions' },
    { icon: LineChart, label: 'Analytics', path: '/dashboard/analytics' },
    { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
    { icon: CreditCard, label: 'Card-info', path: '/dashboard/card-info' },
];
export const SideBar = ({ isSidebarOpen }: { isSidebarOpen: boolean }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <div>
            <motion.aside
                initial={{ x: -300 }}
                animate={{ x: isSidebarOpen ? 0 : -300 }}
                className="top-0 left-0 z-50 fixed border-dark-200 bg-dark-50 border-r w-64 h-screen overflow-auto"
            >
                <div className="p-4">
                    <div className="flex items-center space-x-2 mb-8">
                        <span className="font-bold text-2xl text-white">BAKAR</span>
                    </div>
                    <nav className="space-y-1">
                        {navItems.map((item) => (
                            <NavLink key={item.path} to={item.path} end={item.path === '/dashboard'}
                                className={({ isActive }) => `flex items-center space-x-2 px-4 py-3 rounded-lg transition-colors 
                                ${isActive ? 'bg-accent text-white' : 'text-gray-300 hover:bg-dark-100'}`}>
                                <item.icon className="w-5 h-5" />
                                <span>{item.label}</span>
                            </NavLink>
                        ))}
                    </nav>
                </div>
                <button onClick={handleLogout}
                 className="right-4 bottom-4 left-4 absolute flex justify-start items-center space-x-2 hover:bg-dark-100 px-4 py-2 rounded-lg text-gray-300 hover:text-red-600 transition-all duration-300">
                    <LogOut className="w-5 h-5" />
                    <span>Logout</span>
                </button>
            </motion.aside>
        </div>
    )
}

