import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}/`)
            .then(response => setProduct(response.data))
            .catch(error => console.error('Error fetching product:', error));
    }, [id]);

    const handleBuyNow = () => {
        alert(`Redirecting to checkout for: ${product.name}`);
        // In real app, you'd navigate to a checkout route or payment integration here
    };

    if (!product) return <div>Loading...</div>;

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    {product.image && (
                        <img
                            src={`http://localhost:8000${product.image}`}
                            alt={product.name}
                            className="img-fluid rounded shadow"
                        />
                    )}
                </div>
                <div className="col-md-6">
                    <h2>{product.name}</h2>
                    <p className="lead">₹{product.price}</p>
                    <p>{product.description}</p>
                    <button className="btn btn-success me-3" onClick={handleBuyNow}>
                        Buy Now
                    </button>
                    <button className="btn btn-outline-primary">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
