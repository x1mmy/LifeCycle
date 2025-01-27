// // Desc: Product table view component
// import React, { useState } from 'react';
// import './Products.css';

// function Products() {
//     // Sample product data - replace with actual data
//     const [products] = useState([
//         { name: 'Walter White', type: 'Frozen', expiryDate: '23 June 2024', barcodeNum: '000000000001' },
//         { name: 'Jesse Pinkman', type: 'Shelf', expiryDate: '--', barcodeNum: 'true' },
//         { name: 'Hank Schrader', type: 'Fridge', expiryDate: '--', barcodeNum: 'true' },
//         // Add more products as needed
//     ]);

//     return (
//         <div className="products-container">

//             {/* Main Content */}
//             <main className="main-content">
//                 {/* Search and Add Product */}
//                 <div className="actions-container">
//                     <div className="search-container">
//                         <input
//                             type="text"
//                             placeholder="Enter your text here"
//                             className="search-input"
//                         />
//                         <button className="search-button">
//                             🔍
//                         </button>
//                     </div>
//                     <button className="add-product-button">
//                         Add Product
//                     </button>
//                 </div>

//                 {/* Products Table */}
//                 <div className="table-container">
//                     <table className="products-table">
//                         <thead>
//                             <tr>
//                                 <th>Name</th>
//                                 <th>Type</th>
//                                 <th>Expiry Date</th>
//                                 <th>Barcode Num?</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {products.map((product, index) => (
//                                 <tr key={index}>
//                                     <td>{product.name}</td>
//                                     <td>{product.type}</td>
//                                     <td>{product.expiryDate}</td>
//                                     <td>{product.barcodeNum}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </main>
//         </div>
//     );
// }

// export default Products;
// // Desc: Product table view component
// ProductsPage.jsx
// ProductsPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Products.css";

function Products() {
  // State for controlling the Add Product modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State for managing selected rows in the table using a Set for efficient lookups
  const [selectedRows, setSelectedRows] = useState(new Set());

  // State for managing form input data
  const [formData, setFormData] = useState({
    name: "",
    expiryDate: "",
    price: "",
    type: "",
  });

  //Fetches products straight from the database.
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(null);
  //External fetch products code so we can actively reset the fetched list after a event
  const fetchProducts = async () => {
    try {
      //Fetches the data using axios
      const ProductTable = await axios.get(
        `${process.env.REACT_APP_API_URL}/product/fetchItems`
      );
      setProducts(ProductTable.data);
      setloading(false);
    } catch (err) {
      setError("Failed to fetch data");
      setloading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handler for checkbox selection in table rows
  const handleCheckboxChange = (productId) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(productId)) {
      newSelected.delete(productId); // Deselect if already selected
    } else {
      newSelected.add(productId); // Select if not selected
    }
    setSelectedRows(newSelected);
  };

  // Handler for form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Create new product with unique ID
    const newProduct = {
      id: products.length + 1,
      ...formData,
    };
    // Add new product to list
    setProducts([...products, newProduct]);
    // Close modal and reset form
    setIsModalOpen(false);
    setFormData({ name: "", expiryDate: "", price: "", type: "" });
  };

  //Delete function that recognises the item_id. Sending it to the backend allowing for deletion. 
  const deleteData = async () => {
    if (selectedRows.size === 0) {
      alert("No products selected for deletion.");
      return;
    }

    try {
      // Convert Set to an array for sending via the request
      const itemIds = Array.from(selectedRows);

      // Loop through the selected items and send DELETE request for each
      for (let itemId of itemIds) {

        const response = await axios.delete(
          `${process.env.REACT_APP_API_URL}/product/deleteItem`,
          { data: { item_id: String(itemId) } } // Send item_id as part of the body
        );

        if (response.status === 200 || response.status === 201) {
          // Filter out the deleted product from the frontend for each successful delete
          setProducts((prevProducts) =>
            prevProducts.filter((product) => product.item_id !== itemId)
          );
        } else {
          alert(`Error deleting product with item_id: ${itemId}`);
          break; // If any delete fails, stop the loop
        }
      }

      // Clear the selected rows after deletion
      setSelectedRows(new Set());
      alert("Products deleted successfully.");

      fetchProducts();
    } catch (error) {
      alert("Failed to delete products. Please try again.");
    }
  };

  const addProduct = async () =>{
    //Collect all data into one object
    const JSONformat = {
      item_name: formData.name,
      type: formData.type,
      expiry: new Intl.DateTimeFormat('en-US').format(new Date(formData.expiryDate)), 
      price: Number(formData.price)
    } 
    
    console.log(JSONformat);
    //Post the product to the backend for saving
    const saveProduct = await axios.post(`${process.env.REACT_APP_API_URL}/product/createItem`, JSONformat)
    
    console.log(saveProduct);

    //Alerting user - Product has been saved
    if(saveProduct.status === 200 || saveProduct.status === 201){
      alert("Product saved");
    }else{
      alert("Product not saved");
    }

    fetchProducts();
  }

  return (
    <div className="products-page">
      {/* Search Bar and Add Product Button Section */}
      <div className="actions-container">
        <div className="search-container">
          <input
            type="text"
            placeholder="Enter your text here"
            className="search-input"
          />
          <button className="search-button">🔍</button>
        </div>
        <button
          className="add-product-button"
          onClick={() => setIsModalOpen(true)}
        >
          Add Product
        </button>
        <button className="edit-product-button">Edit</button>

        <button className="delete-product-button" onClick={() => deleteData()}>
          Delete
        </button>
      </div>

      {/* Products Table Section */}
      <div className="table-container">
        <table className="products-table">
          <thead>
            <tr>
              <th></th> {/* Checkbox column */}
              <th>Name</th>
              <th>Type</th>
              <th>Expiry Date</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/* Map through products to create table rows */}
            {products.map((product) => (
              <tr
                key={product.item_id}
                className={
                  selectedRows.has(product.item_id) ? "selected-row" : ""
                }
              >
                <td>
                  <input
                    type="checkbox"
                    checked={selectedRows.has(product.item_id)}
                    onChange={() => handleCheckboxChange(product.item_id)}
                  />
                </td>
                <td>{product.item_name}</td>
                <td>{product.type}</td>
                <td>{product.expiry}</td>
                <td>${product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Form for Adding Products */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
              {/* Product Name Input */}
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Product Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {/* Expiry Date Input */}
              <div className="form-group">
                <p>Expiry Date</p>
                <input
                  type="date"
                  name="expiryDate"
                  placeholder="Expiry Date"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {/* Price Input */}
              <div className="form-group">
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {/* Product Type Dropdown */}
              <div className="form-group">
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Type</option>
                  <option value="Frozen">Frozen</option>
                  <option value="Shelf">Shelf</option>
                  <option value="Fridge">Fridge</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              {/* Modal Action Buttons */}
              <div className="modal-actions">
                <button
                  type="button"
                  className="close-button"
                  onClick={() => setIsModalOpen(false)}
                >
                  CLOSE
                </button>
                <button type="submit" className="save-button" onClick={() => addProduct()}>
                  SAVE
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
