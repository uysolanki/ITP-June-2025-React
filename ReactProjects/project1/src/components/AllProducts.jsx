import React, { useState } from 'react'
import './AllProducts.css'
import products from '../data/products.js'
import Menubar from './Menubar.jsx'
import SearchBar from './SearchBar.jsx'
const AllProducts = () => {
    const [prods, setProds] = useState(products)
    const [buprods, setBuprods] = useState(products)
    //console.log(products)

    let productCategories = products.map(
        (product) => product.category
    )

    let uniqueCategories = new Set(productCategories)

    let allCategories = [...uniqueCategories, 'All']

    // console.log(uniqueCategories)
    // console.log(productCategories)
    // console.log(allCategories)
    function filterProductByCategory(productCategory) {
        console.log(productCategory)
        if (productCategory != 'All') {
            let FilteredProducts = buprods.filter(
                (product) => product.category === productCategory
            )
            setProds(FilteredProducts);
        }
        else {
            setProds(buprods);
        }
    }

    function searchProductByTitle(event) {
        let searchText = event.target.value;
        if (searchText.length > 0) {
            let serachedProducts = buprods.filter(
                (product) => product.title.toLowerCase().includes(searchText.toLowerCase())
            )
            setProds(serachedProducts)
        }
        else {
            setProds(buprods);
        }

    }
    return (
        <>
            <SearchBar handleChange={searchProductByTitle} />
            <Menubar elements={allCategories} handleClick={filterProductByCategory} />
            <div className="parent-container">
                {
                    prods.map((product, index) => (
                        <div className="card" key={index}>
                            <div className="product-image">
                                <img className="card-img-top" src={product.image} alt="Product" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">
                                    {product.description.substring(0, 50)}...
                                    <span className="readmore">read more</span>
                                </p>
                                <a href="#" className="btn btn-primary">Add To Cart</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default AllProducts