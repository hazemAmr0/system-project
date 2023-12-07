// RegisterComponent.js content
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Typography, Grid, Link as MuiLink } from "@mui/material";
import {
  RegisterStyledPaper,
  RegisterStyledButton,
  
} from "./Register_style";

const Register = () => {
 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    // Simple validation checks
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Implement your registration logic here
    // For simplicity, assume successful registration and redirect to home
    setError("");
    navigate("/");
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
