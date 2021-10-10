import React from 'react'
import products from '../products';
import Rating from '../components/Rating';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ProductScreen = ({match}) => {
    const product = products.find((singleProduct) => singleProduct._id === match.params.id);

    return (
        <>
        <Link to="/" className="btn btn-dark mb-3 rounded-0">Go Back</Link>
        <div className="productscreen-card mb-3">
            <div className="row g-0">
                <div className="col-md-6">
                    <img src={product.image} className="img-fluid rounded-start" alt={product.name} />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.description}</p>
                        <div className="card-text">
                            
                        </div>
                    </div>
                    <div className="card-body">
                        <ul className="list-group rounded-0">
                            <li className="list-group-item">
                                Price: <strong>{product.price} ₹</strong>
                            </li>
                            <li className="list-group-item">
                                <Rating value={product.rating} text={`${product.numReviews} Reviews`} />
                            </li>
                            <li className="list-group-item">
                                Quantity : <strong>{product.countInStock}</strong>
                            </li>
                            <li className="list-group-item">
                                Status : <strong>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</strong>
                            </li>
                            <li className="list-group-item">
                                <Button variant="contained" 
                                className="rounded-0 w-100"
                                disabled={product.countInStock === 0}
                                startIcon={<ShoppingCartIcon />}
                                >
                                Add to Cart
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductScreen
