// ProductCategory.js
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  styled,
} from "@mui/material";
import pic1Image from "../images/pic1.jpg";

const useStyles = styled((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100%",
  },
  cardImage: {
    maxHeight: 200, // Set the max-height to limit the image size
    width: "100%",
    objectFit: "cover",
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const ProductCategory = ({ title, category }) => {
  const classes = useStyles();

  const products = [
    {
      id: 1,
      name: "Product 1",
      image: pic1Image,
      price: 50.0,
      rating: 4.5,
    },
    {
      id: 2,
      name: "Product 2",
      image: pic1Image,
      price: 75.0,
      rating: 5.0,
    },
    // Add more products as needed
  ];

  const addToCart = (productId) => {
    console.log(`Product ${productId} added to the cart`);
  };

  return (
    <Grid container spacing={2}>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <img
              src={product.image}
              alt={product.name}
              className={classes.cardImage}
            />
            <CardContent className={classes.cardContent}>
              <Typography variant="h6" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Price: ${product.price}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Rating: {product.rating}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => addToCart(product.id)}
              >
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductCategory;
