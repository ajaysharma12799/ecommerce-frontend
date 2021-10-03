import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ product }) => {
    const { name, image, rating, numReviews, price } = product;

    return (
        <div className="card mb-2">
            <img src={image} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{rating} from {numReviews} reviews</p>
                <p className="card-text"><strong>{price} ₹</strong></p>
            </div>
        </div>
    )
}

Product.propTypes = {

}

export default Product
