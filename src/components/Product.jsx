import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({product}) => {
  return (
    <Card className="rounded-0 product-card">
      <CardMedia
        component="img"
        height="194"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
            <Link className="card-title" to={`/Product/${product._id}`}>{product.name}</Link>
        </Typography>
        <Typography variant="body2" color="text.secondary" className="mt-1">
            <Rating value={product.rating} text={`${product.numReviews} Reviews`} />
        </Typography>
        <Typography variant="body1" color="text.secondary" className="mt-1">
            <strong>{product.price} ₹</strong>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Product;