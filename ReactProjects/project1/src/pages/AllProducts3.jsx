import React, { useState } from 'react'
import './AllProducts.css'
import SearchBar from '../components/SearchBar'
import Menubar from '../components/Menubar'
import Product from '../components/Product'
import { useContext } from 'react'
import ProductContext from '../contexts/ProductContext'
import { useEffect } from 'react'

const AllProducts3 = () => {

    const [prods, setProds] = useState([])
    const [buprods, setBuprods] = useState([])
  
    const sharedData=useContext(ProductContext)
    console.log(sharedData.products)

    useEffect(() => {
        if (sharedData?.products) {
            setProds(sharedData.products)
            setBuprods(sharedData.products)
        }
    }, [sharedData.products]) 

    let productCategories = buprods.map(
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
                          <Product key={index} product={product}/>
                      ))
                  }
              </div>
          </>
      )
}

export default AllProducts3