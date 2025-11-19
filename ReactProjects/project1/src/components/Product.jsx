import React from 'react'
import { Link } from 'react-router-dom'
const Product = ({product}) => {
  return (
   <div className="card">
                             <Link to={`/single/${product.id}`}>      <div className="product-image">
                                  <img className="card-img-top" src={product.image} alt="Product" />
                              </div></Link>
                              <div className="card-body">
                                  <h5 className="card-title">{product.title}</h5>
                                {/* <p className="card-text">
                                      {product.description.substring(0, 50)}...
                                      <span className="readmore">read more</span>
                                  </p> */}
                                  <a href="#" className="btn btn-primary">Add To Cart</a>
                              </div>
    
   </div>
  )
}

export default Product