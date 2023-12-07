import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Button,
} from "@mui/material";
import SearchComponent from "./SearchComponent";
import ProductCategory from "./ProductCategory"; // You'll need to create this component

const HomeComponent = () => {
  return (
    <div>
      {/* Header */}
      <AppBar position="static">
        <Toolbar>
          {/* Add your Megamind logo or name */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Megamind
          </Typography>
          {/* Search Component */}
          <SearchComponent />
          {/* Cart Icon (Assuming you have an icon component for the cart) */}
          {/* Profile Icon (Assuming you have an icon component for the profile) */}
          {/* Logout Button */}
          <Button component={Link} to="/login" color="inherit">
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* Body */}
      <Container>
        {/* Categories */}
        <Grid container spacing={3}>
          <ProductCategory title="Headphones" category="headphones" />
          <ProductCategory title="Laptops" category="laptops" />
          {/* Add more categories as needed */}
        </Grid>
      </Container>
    </div>
  );
};

export default HomeComponent;
