import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RootPage from './app';
import LoginPage from './app/login';
import RegisterPage from './app/register';
import ForgotPasswordPage from './app/forgot-password';
import DashboardLayout from './layouts/DashboardLayout';
import PenarikanPage from './app/penarikan';
import DashboardPage from './app/dashboard';

import ProductsAllPage from './app/products/all';
import ProductsCategoriesPage from './app/products/categories';
import BillingPage from './app/billing';
import SettlementPage from './app/settlement';
import InvoicePage from './app/invoice';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<RootPage />} />
        <Route path="/" element={<RootPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/dashboard" element={<DashboardLayout content={<DashboardPage />} />} />
        <Route path="/penarikan" element={<DashboardLayout content={<PenarikanPage />} />} />

        <Route path="/products/all" element={<DashboardLayout content={<ProductsAllPage />} />} />
        <Route path="/products/categories" element={<DashboardLayout content={<ProductsCategoriesPage />} />} />
        <Route path="/billing" element={<DashboardLayout content={<BillingPage />} />} />
        <Route path="/invoice" element={<DashboardLayout content={<InvoicePage />} />} />
        <Route path="/settlement" element={<DashboardLayout content={<SettlementPage />} />} />
      </Routes>
    </Router>
  );
}

export default App;
