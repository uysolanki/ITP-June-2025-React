import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
const Navbar1 = () => {
    const navigate=useNavigate()
    function handleClick(value)
    {
        switch(value)
        {
            case '/': navigate("/");break;
            case '/add': navigate("/add");break;
            case '/shop': navigate("/shop");break;
            case '/signup': navigate("/signup");break;
            case '/login': navigate("/login");break;
        }
    }
  return (
    <ul>
        <li onClick={()=>handleClick('/')}>         Home</li>
        <li onClick={()=>handleClick('/add')}>      Add Product</li>
        <li onClick={()=>handleClick('/shop')}>     ECommerce</li>
        <li onClick={()=>handleClick('/signup')}>   SignIn</li>
        <li onClick={()=>handleClick('/login')}>    Login</li>
    </ul>
  )
}

export default Navbar1