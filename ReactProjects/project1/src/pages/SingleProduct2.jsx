import React, { useEffect, useState } from 'react'
import './SingleProduct.css'
import Product from '../components/Product'
import {  useParams } from 'react-router-dom'
import axios from 'axios'
import { useContext } from 'react'
import ProductContext from '../contexts/ProductContext'
import Breadcrumbs from '../components/Breadcrumbs'
import star from '/public/myimages/star.png'
import star_dull from '/public/myimages/star_dull.png'
import { Link } from 'react-router-dom'
const SingleProduct2 = () => {

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
    <Breadcrumbs product={product}/>
   
    <div className='productdisplay'>
       <div className="product-display-left">
                <div className="product-display-img-list">
                    <img src={product.image} alt={product.title} />
                    {/* <img src={product.image} alt={product.title} />
                    <img src={product.image} alt={product.title} />
                    <img src={product.image} alt={product.title} /> */}
                </div>
                {/* <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt={product.name} />
                </div> */}
        </div>
       {/* <ProductCard key={product.id} product={product}/> */}
       <div className="product-display-right">
                <h1>{product.title}</h1>
                <div className="productdisplay-right-star">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star_dull} alt="star dull" />
                    <p>(3121)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">
                        ₹{product.price}
                    </div>
                    <div className="productdisplay-right-price-new">
                        ₹{product.price}
                    </div>
                </div>
                <div className="productdisplay-right-description">
                    {product.description}
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-size-options">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => { addToCart(product.id) }}>
                    ADD TO CART
                </button>
                <p className='productdisplay-right-category'><span>Category :</span>{product.category}</p>
            </div>
      </div>
      <Link to="/">
          <button>Hompage</button>
      </Link>
      </>
  )
}

export default SingleProduct2