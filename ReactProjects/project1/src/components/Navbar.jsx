import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <ul>
        <Link to="/">           <li>Home</li>       </Link>
        <Link to="/add">        <li>Add Product</li></Link>
        <Link to="/shop">       <li>ECommerce</li>  </Link>
        <Link to="/signup">     <li>SignIn</li>     </Link>
        <Link to="/login">      <li>Login</li>      </Link>
    </ul>

    </>
  )
}

export default Navbar