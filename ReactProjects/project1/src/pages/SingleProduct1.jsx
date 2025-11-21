import React, { useEffect, useState } from 'react'
import './SingleProduct.css'
import Product from '../components/Product'
import {  useParams } from 'react-router-dom'
import axios from 'axios'
import { useContext } from 'react'
import ProductContext from '../contexts/ProductContext'
const SingleProduct1 = () => {

    const {products}=useContext(ProductContext)
    console.log(products)
    const {pid}=useParams()
    console.log(pid)

    const[product,setProduct]=useState({})
    useEffect(
        ()=>{
           setProduct(products.find((prod)=>prod.id==pid))
        },[pid]
    )

   
  return (
    <>
    {/* <h1>Single Page Loading</h1> */}
        <Product product={product}/> 
    </>
  )
}

export default SingleProduct1