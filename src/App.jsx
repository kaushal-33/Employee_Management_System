import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// components and pages

import Header from './components/Header'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import About from './pages/About'
import Contact from './pages/Contact'
import EmployeesDetail from './pages/EmployeesDetail'
import EmployeeForm from './pages/EmployeeForm'
import ProtectedRoute from './pages/ProtectedRoute'
import EmployeeUpdateForm from './pages/EmployeeUpdateForm'

const App = () => {

  const [loginStatus, setLoginStatus] = useState(false)

  useEffect(() => {
    let isLogin = JSON.parse(localStorage.getItem("isLogin")) || false
    setLoginStatus(isLogin);
  }, [])
  return (
    <BrowserRouter>
      <Header loginUpdate={loginStatus} setLogin={setLoginStatus} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<LoginPage setLogin={setLoginStatus} />} />
        <Route path='/employees-detail' element={<ProtectedRoute Component={EmployeesDetail} />} />
        <Route path='/employees-form' element={<ProtectedRoute Component={EmployeeForm} />} />
        <Route path='/update-employee-form/:id' element={<ProtectedRoute Component={EmployeeUpdateForm} />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App