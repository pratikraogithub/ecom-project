import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/')
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Products</h2>

            {/* Flex container for single or multiple items */}
            <div className={`row ${products.length === 1 ? 'justify-content-center d-flex' : ''}`}>
                {products.map(product => (
                    <div
                        className={`mb-4 ${products.length === 1 ? 'col-12 col-md-10 col-lg-10' : 'col-md-4'
                            }`}
                        key={product.id}
                    >
                        <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
                            <div className="card h-100 shadow-sm">
                                {product.image && (
                                    <img
                                        src={`http://localhost:8000${product.image}`}
                                        className="card-img-top"
                                        alt={product.name}
                                        style={{ objectFit: 'cover', height: '250px' }}
                                    />
                                )}
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">Price: ₹{product.price}</p>
                                    <button className="btn btn-primary mt-auto">View Details</button>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ProductList;
