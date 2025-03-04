import { JSX, useState } from 'react';
import {
  Home,
  Folder,
  DollarSign,
  BarChart,
  User,
  Users,
  ChevronLeft,
  CreditCard,
  Flag,
  Search,
  ShoppingCart,
  Package,
  Store,
  File,
  FileText,
  ArrowLeftRight,
  Download,
  BookOpen,
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
            { id: "categories", label: "Categories", icon: <Folder size={20} />, path: "/products/categories" },
          ],
        },
        { id: "billing", label: "Billing", icon: <CreditCard size={20} />, path: "/billing" },
        { id: "invoice", label: "Invoice", icon: <File size={20} />, path: "/invoice" },
      ],
    },
    {
      id: "finance",
      label: "Finance",
      icon: <DollarSign size={20} />,
      children: [
        { id: "settlement", label: "Instant Settlement", icon: <FileText size={20} />, path: "/settlement", isNew: true },
        { id: "disbursement", label: "Disbursement", icon: <ArrowLeftRight size={20} />, path: "/disbursement" },
        { id: "remittance", label: "Remittance", icon: <BarChart size={20} />, path: "/remittance" },
      ],
    },
    {
      id: "documents",
      label: "Documents",
      icon: <Folder size={20} />,
      children: [
        { id: "file", label: "File Unduhan", icon: <Download size={20} />, path: "/file" },
        { id: "dokumentasi", label: "Dokumentasi", icon: <BookOpen size={20} />, path: "/dokumentasi" },
      ],
    },
    { id: "profil", label: "Profil Saya", icon: <User size={20} />, path: "/profil" },
    { id: "team", label: "User Team", icon: <Users size={20} />, path: "/team" },
  ];

  // Logo component
  const Logo = () => (
    <div className="flex items-center">
      <span className="text-xl font-bold text-white">duitku</span>
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
                <div className="text-lg text-gray-700">duitku</div>
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
                  <span className="text-sm font-medium">DUITKU</span>
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
