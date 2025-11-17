import React from 'react'
import Navbar from './components/Navbar'
import Counter from './components/Counter'
import AllProducts from './components/AllProducts'
import AllProducts1 from './pages/AllProducts1'
import AddProduct from './pages/AddProduct'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar1 from './components/Navbar1'

const App = () => {
  return (
    <>
      <Router>
          <Navbar1/>
          <Routes>
                  <Route path="/" element={<LandingPage/>} />
                  <Route path="/login" element={<Login/>} />
                  <Route path="/signup" element={<Signup/>} />
                  <Route path="/shop" element={<AllProducts1/>} />
                  <Route path="/add" element={<AddProduct/>} />
          </Routes>
      </Router>
     
    </>
  )
}

export default App