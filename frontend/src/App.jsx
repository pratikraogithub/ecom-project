import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import ProductDetail from './pages/ProductDetail'
import Login from './pages/Login'
import Register from './pages/Register'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const [auth, setAuth] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('access')
    if (token) setAuth(true)
  }, [])

  return (
    <BrowserRouter>
      <Navbar auth={auth} setAuth={setAuth} />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
