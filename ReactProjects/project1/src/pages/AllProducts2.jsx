import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './AllProducts.css'
import SearchBar from '../components/SearchBar'
import Menubar from '../components/Menubar'
import Product from '../components/Product'

const AllProducts2 = () => {

    const [prods, setProds] = useState([])
    const [buprods, setBuprods] = useState([])
  
    useEffect(
        ()=>{
            loadData();
        },[]            //dependency array
                        //[]    -   once when the component loads
    )                   //[state var] - once each time the mentioned state var modifies
                        //done provide the dependency array - once each time any state var modifies
     async function loadData() {
        try {
            const response = await axios.get("http://localhost:8087/products/getAllProducts");
            setProds(response.data);
            setBuprods(response.data);
        } catch (error) {
            console.error("Failed to fetch products:", error);
        }
    }

    
   

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

export default AllProducts2