import { JSX, useState } from 'react';
import {
  Home,
  Folder,
  ChevronLeft,
  CreditCard,
  Flag,
  Search,
  ShoppingCart,
  Package,
  Store,
  File
} from 'lucide-react';
import Sidebar from '../components/Sidebar';

interface NavItem {
  id: string;
  label: string;
  icon: JSX.Element;
  path?: string;
  children?: NavItem[];
  isNew?: boolean;
}

interface DashboardLayoutProps {
  content: JSX.Element;
}

export default function DashboardLayout({ content }: DashboardLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => setCollapsed(!collapsed);

  // Navigation items for sidebar
  const navItems: NavItem[] = [
    { id: "dashboard", label: "Dashboard", icon: <Home size={20} />, path: "/dashboard" },
    { id: "penarikan", label: "Penarikan", icon: <Search size={20} />, path: "/penarikan" },
    {
      id: "sales",
      label: "Sales",
      icon: <ShoppingCart size={20} />,
      children: [
        {
          id: "products",
          label: "Products",
          icon: <Package size={20} />,
          children: [
            { id: "all-products", label: "All Products", icon: <Store size={20} />, path: "/products/all" },
            { id: "categories", label: "Categories", icon: <Folder size={20} />, path: "/products/categories" }
          ]
        },
        { id: "billing", label: "Billing", icon: <CreditCard size={20} />, path: "/billing" },
        { id: "invoice", label: "Invoice", icon: <File size={20} />, path: "/invoice" },
      ],
    },
  ];

  // Logo component
  const Logo = () => (
    <div className="flex items-center">
      <span className="text-xl font-bold text-white">Dashboard Example</span>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar logo={<Logo />} navItems={navItems} isCollapsed={collapsed} toggleCollapse={toggleCollapse} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm z-10">
          <div className="max-w-full mx-auto px-4">
            <div className="flex justify-between items-center py-3">
              <div className="flex items-center space-x-4">
                <div className="text-lg text-gray-700">Dashboard Example</div>
                <div className="flex space-x-2">
                  <button className="flex items-center space-x-1 px-3 py-1 rounded-full text-red-500 bg-red-50 border border-red-200">
                    <span className="text-sm">Production</span>
                    <ChevronLeft size={16} />
                  </button>
                  <button className="flex items-center space-x-1 px-3 py-1 rounded-full text-blue-500 bg-blue-50 border border-blue-200">
                    <Flag size={16} />
                    <span className="text-sm">Indonesia</span>
                    <ChevronLeft size={16} />
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="border border-red-500 rounded px-4 py-2 text-gray-700">
                  <span className="text-sm">Saldo: Rp 68.028.925</span>
                </div>
                <div className="text-gray-700">
                  <span className="text-sm font-medium">Dashboard Example</span>
                  <ChevronLeft size={16} className="inline ml-1" />
                </div>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto px-6 pb-8">{content}</main>
      </div>
    </div>
  );
}
