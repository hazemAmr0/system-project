// RegisterComponent.js content
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Typography, Grid, Link as MuiLink } from "@mui/material";
import {
  RegisterStyledPaper,
  RegisterStyledButton,
  
} from "./Register_style";
import axios from "axios";

const Register = () => {
 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

const handleRegister = async () => {
  try {
    // ... (previous code)

    const response = await axios.post(
      "http://localhost:5000/api/auth/register",
      {
        username: name,
        email: email,
        password: password,
      }
    );

    console.log("Registration successful:", response.data);

    // Access user data from the response
    const userData = response.data;

    // You can now use userData as needed, for example, logging the username
    console.log("Registered user:", userData.username);

    // You may want to do something with the response, like storing tokens or redirecting.
    // For now, let's log a success message and navigate to the home page.
    console.log("User successfully registered!");
    navigate("/"); // Replace this with your desired redirection path
  } catch (err) {
    console.error("Error during registration:", err);

    // Handle errors locally and update state
    if (err.response) {
      setError(err.response.data.message);
    } else {
      setError("An unexpected error occurred. Please try again.");
    }
  }
};


  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={25}
        sm={25}
        md={25}
        component={RegisterStyledPaper}
        elevation={6}
        square
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <Grid item xs={10} sm={8} md={6}>
            <div>
              <Typography component="h1" variant="h5" mb={2}>
                Create New Account
              </Typography>
              <form>
                <TextField
                  margin="normal"
                  fullWidth
                  id="name"
                  label="Full Name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {error && (
                  <Typography variant="body2" color="error">
                    {error}
                  </Typography>
                )}
                <RegisterStyledButton
                  type="button"
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={handleRegister}
                >
                  create account
                </RegisterStyledButton>
              </form>
              {/* ... */}
              <Grid container mt={2}>
                <Grid item>
                  <MuiLink component={Link} to="/login" variant="body2">
                    Already have an account? Login
                  </MuiLink>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={false} sm={4} md={7} sx={{ display: { sm: "block" } }}>
        {/* Background image or any other content */}
      </Grid>
    </Grid>
  );
};

export default Register;
