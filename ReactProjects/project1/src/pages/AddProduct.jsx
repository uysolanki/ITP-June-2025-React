import React from 'react'
import './AddProduct.css'
import { ProductValidation } from '../validation/ProductValidation';
import { useFormik } from 'formik';

const AddProduct = () => {

    const p1 = {
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
  };

  const {
    errors,
    values, // Changed 'value' to 'values'
    touched,
    handleBlur,
    handleSubmit,
    handleChange,
  } = useFormik({
    initialValues: p1,  // Correctly set initialValues
    validationSchema: ProductValidation,
    onSubmit: function () {
      saveData();
    },
  });

  async function saveData() {
    try {
      const response = await fetch('http://localhost:8087/products/addProduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)  // Use 'values' here instead of 'product'
      });

      if (response.ok) {
        const data = await response.json();
        alert("Product Added successfully!");
        console.log(data);
      } else {
        alert("Failed to Add Product");
      }
    } catch (error) {
      console.error("Error submitting the form", error);
    }
  }


  return (
    <>
    <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Product Title</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}/>
        
         {errors.title && touched.title && (<p className="text-danger">{errors.title}</p>)}
        </div>

        <div>
          <label htmlFor="price">Product Price</label>
          <input
            type="text"
            name="price"
            id="price"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.price}/>
                    
            {errors.price && touched.price && (<p className="text-danger">{errors.price}</p>)}
        </div>

        <div>
          <label htmlFor="description">Product Description</label>
          <input
            type="text"
            name="description"
            id="description"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.description}/>
        
        {errors.description && touched.description && (<p className="text-danger">{errors.description}</p>)}
        </div>

        <div>
          <label htmlFor="category">Product Category</label>
          <input
            type="text"
            name="category"
            id="category"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.category}/>

        {errors.category && touched.category && (<p className="text-danger">{errors.category}</p>)}
        </div>

        <div>
          <label htmlFor="image">Product Image</label>
          <input
            type="text"
            name="image"
            id="image"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.image}/>
        {errors.image && touched.image && (<p className="text-danger">{errors.image}</p>)}
        </div>
        <div className="button-group">
          <button type="submit">Register</button>
          <button type="button">Cancel</button>
        </div>
    </form>

    </>
  )
}

export default AddProduct