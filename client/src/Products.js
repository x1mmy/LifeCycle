// Desc: Product table view component
import React, { useState } from 'react';
import './Products.css';

function Products() {
    // Sample product data - replace with your actual data
    const [products] = useState([
        { name: 'Walter White', type: 'Frozen', expiryDate: '23 June 2024', barcodeNum: '000000000001' },
        { name: 'Jesse Pinkman', type: 'Shelf', expiryDate: '--', barcodeNum: 'true' },
        { name: 'Hank Schrader', type: 'Fridge', expiryDate: '--', barcodeNum: 'true' },
        // Add more products as needed
    ]);

    return (
        <div className="products-container">

            {/* Main Content */}
            <main className="main-content">
                {/* Search and Add Product */}
                <div className="actions-container">
                    <div className="search-container">
                        <input 
                            type="text" 
                            placeholder="Enter your text here" 
                            className="search-input"
                        />
                        <button className="search-button">
                            🔍
                        </button>
                    </div>
                    <button className="add-product-button">
                        Add Product
                    </button>
                </div>

                {/* Products Table */}
                <div className="table-container">
                    <table className="products-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Expiry Date</th>
                                <th>Barcode Num?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                <tr key={index}>
                                    <td>{product.name}</td>
                                    <td>{product.type}</td>
                                    <td>{product.expiryDate}</td>
                                    <td>{product.barcodeNum}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}

export default Products;
