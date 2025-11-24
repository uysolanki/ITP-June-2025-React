import React from 'react'
import './Breadcrumbs.css'
import arrow_icon from '../../public/myimages/Arrow.png'
const Breadcrumbs = ({product}) => {
  return (
    <div className='breadcrum'>
    <p>HOME <img src={arrow_icon}/> SHOPPING <img src={arrow_icon}/> {product.category} <img src={arrow_icon}/> {product.title}</p>
    </div>
  )
}

export default Breadcrumbs