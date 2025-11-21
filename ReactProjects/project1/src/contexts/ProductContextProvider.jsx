import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'
import ProductContext from "./ProductContext";

function ProductContextProvider({children}) 
{
    const[products,setProducts]=useState([])
    useEffect(
        ()=>{
            loadData();
        },[]            
                       
    )                   
     async function loadData() {
        try {
            const response = await axios.get("http://localhost:8087/products/getAllProducts");
            setProducts(response.data);
        } catch (error) {
            console.error("Failed to fetch products:", error);
        }
    }


    let sharedData = {products};          //put all the data into an object
  return (
   
   <ProductContext.Provider value={sharedData}>	
    {children}
   </ProductContext.Provider>
  )
}
export default ProductContextProvider