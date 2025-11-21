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
import AllProducts2 from './pages/AllProducts2'
import SingleProduct from './pages/SingleProduct'
import AllProducts3 from './pages/AllProducts3'
import SingleProduct1 from './pages/SingleProduct1'

const App = () => {
  return (
    <>
      <Router>
          <Navbar1/>
          <Routes>
                  <Route path="/" element={<LandingPage/>} />
                  <Route path="/login" element={<Login/>} />
                  <Route path="/signup" element={<Signup/>} />
                  <Route path="/shop" element={<AllProducts3/>} />
                  <Route path="/add" element={<AddProduct/>} />
                  <Route path="/single/:pid" element={<SingleProduct1/>} />
          </Routes>
      </Router>
     
    </>
  )
}

export default App