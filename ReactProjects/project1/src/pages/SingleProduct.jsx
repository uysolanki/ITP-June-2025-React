import React, { useEffect, useState } from 'react'
import './SingleProduct.css'
import Product from '../components/Product'
import {  useParams } from 'react-router-dom'
import axios from 'axios'
const SingleProduct = () => {

    const {pid}=useParams()
    console.log(pid)

    const[product,setProduct]=useState({})
    useEffect(
        ()=>{
            getSingleProduct();
        },[pid]
    )

    async function getSingleProduct()
    {
            try
            {
            const apiproducts=await axios.get(`http://localhost:8087/products/${pid}`)
            console.log(apiproducts)
            setProduct(apiproducts.data)
    }
    catch(error){console.log(error)}

    }
  return (
    <>
    {/* <h1>Single Page Loading</h1> */}
        <Product product={product}/> 
    </>
  )
}

export default SingleProduct