import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Home,
  Search,
  FileText,
  Folder,
  DollarSign,
  ArrowLeftRight,
  BarChart,
  Download,
  BookOpen,
  User,
  Users,
  LogOut,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ShoppingCart,
  CreditCard,
  File,
  Package,
  Store,
} from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  path?: string;
  isNew?: boolean;
  children?: NavItem[];
}

interface SidebarProps {
  logo: React.ReactNode;
  navItems: NavItem[];
  isCollapsed?: boolean;
  toggleCollapse?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  logo,
  navItems,
  isCollapsed = false,
  toggleCollapse,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({});

  const handleNavigation = (path?: string) => {
    if (path) {
      navigate(path);
    }
  };

  const toggleDropdown = (id: string) => {
    setOpenDropdowns((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Recursive function to render nav items with unlimited nesting levels
  const renderNavItem = (item: NavItem, level = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isOpen = openDropdowns[item.id];
    
    return (
      <li key={item.id} className={`px-${level > 0 ? 0 : 2} py-${level > 0 ? 0 : 1}`}>
        <button
          onClick={() => hasChildren ? toggleDropdown(item.id) : handleNavigation(item.path)}
          className={`cursor-pointer flex items-center justify-between w-full px-3 py-2 rounded-md text-left transition-colors ${
            !hasChildren && location.pathname === item.path
              ? "bg-[#10b981] text-white font-medium"
              : "hover:bg-[#2a3c6e]"
          }`}
        >
          <div className="flex items-center">
            <span className="inline-block">{item.icon}</span>
            {!isCollapsed && <span className="ml-2">{item.label}</span>}
            {!isCollapsed && item.isNew && (
              <span className="ml-2 text-xs bg-green-500 text-white px-1 rounded">NEW</span>
            )}
          </div>
          {!isCollapsed && hasChildren && (
            isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />
          )}
        </button>
        
        {hasChildren && isOpen && !isCollapsed && item.children?.length && (
          <ul className={`ml-${level > 0 ? 3 : 6} mt-1 border-l border-[#2a3c6e]`}>
            {item.children?.map((child) => renderNavItem(child, level + 1))}
          </ul>
        )}

      </li>
    );
  };

  return (
    <div
      className={`flex flex-col bg-[#192852] text-white h-screen transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-60"
      }`}
    >
      {/* Logo Section */}
      <div className="flex items-center justify-between p-4">
        {!isCollapsed && <div className="flex-1">{logo}</div>}
        <button
          onClick={toggleCollapse}
          className="text-white p-1 rounded hover:bg-[#2a3c6e] transition-colors"
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <div className="border-b border-[#2a3c6e] my-2"></div>

      {/* Navigation Items */}
      <div className="flex-1 overflow-y-auto">
        <ul className="py-2">
          {navItems.map(item => renderNavItem(item))}
        </ul>
      </div>

      {/* Footer Section */}
      <div className="border-t border-[#2a3c6e] mt-auto">
        <button
          onClick={() => handleNavigation("/login")}
          className={`cursor-pointer flex items-center w-full px-5 py-3 text-left transition-colors ${
            location.pathname === "/login" ? "bg-[#10b981]" : "hover:bg-[#2a3c6e]"
          }`}
        >
          <LogOut size={20} />
          {!isCollapsed && <span className="ml-2">Keluar</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

// Example Usage:
export const SidebarExample: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

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

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const Logo = () => (
    <div className="flex items-center">
      <span className="text-xl font-bold">duitku</span>
      <span className="text-xs ml-1 text-green-400">powered by Xendit</span>
    </div>
  );

  return (
    <Sidebar
      logo={<Logo />}
      navItems={navItems}
      isCollapsed={collapsed}
      toggleCollapse={toggleCollapse}
    />
  );
};