import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RootPage from './app'
import LoginPage from './app/login'
import RegisterPage from './app/register'
import ForgotPasswordPage from './app/forgot-password'

import './App.css'
import DashboardLayout from './layouts/DashboardLayout'
import PenarikanPage from './app/penarikan'
import DashboardPage from './app/dashboard'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<RootPage />} />
        <Route path='/' element={<RootPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/forgot-password' element={<ForgotPasswordPage />} />
        <Route path='/dashboard' element={<DashboardLayout content={<DashboardPage />} />} />
        <Route path='/penarikan' element={<DashboardLayout content={<PenarikanPage />} />} />
      </Routes>
    </Router>
  )
}

export default App
