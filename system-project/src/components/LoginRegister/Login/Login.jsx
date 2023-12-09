import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  TextField,
  Typography,
  Grid,
  Link as MuiLink,
  InputAdornment,

} from "@mui/material";
import { Email,} from "@mui/icons-material";
import KeyIcon from "@mui/icons-material/Key";
import {
  LoginStyledPaper,

  LoginStyledButton,
  LoginStyles,
} from  "./Login_style";
import axios from "axios";

const Login = () => {
  const classes = LoginStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword,] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

const handleLogin = async () => {
  try {
    console.log("Attempting login...");

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Validate password length
    if (!password || password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setError(""); // Clear any previous error messages

    const response = await axios.post("http://localhost:5000/api/auth/login", {
      email: email,
      password: password,
    });

    console.log("Login successful:", response.data);

    // You may want to do something with the response, like storing tokens or redirecting.
    // For now, let's log a success message and navigate to the home page.
    console.log("User successfully logged in!");
    navigate("/"); // Replace this with your desired redirection path
  } catch (error) {
    console.error("Error during login:", error);

    // Customize the error message based on the error received from the server
    if (error.response) {
      setError(error.response.data.message);
    } else {
      setError("An unexpected error occurred. Please try again.");
    }
  }
};

  return (
    <Grid
      container
      component="main"
      className={classes.root}
      alignItems="center"
      justifyContent="center"
      style={{ height: "100vh" }}
    >
     
      <Grid
        item
        xs={12}
        sm={10}
        md={7}
        component={LoginStyledPaper}
        elevation={6}
        square
      >
        <div>
          <Typography component="h1" variant="h5" mb={2}>
            Welcome, Back!
          </Typography>
          <form className={classes.form}>
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <KeyIcon></KeyIcon>
                  </InputAdornment>
                ),
              }}
            />
            {error && (
              <Typography variant="body2" color="error">
                {error}
              </Typography>
            )}
            <LoginStyledButton
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleLogin}
            >
              Login
            </LoginStyledButton>
          </form>
          <Grid container mt={2}>
            <Grid item>
              <MuiLink component={Link} to="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </MuiLink>
            </Grid>
          </Grid>
        </div>
      </Grid>
      <Grid item xs={false} sm={4} md={6} sx={{ display: { sm: "block" } }}>
        
      </Grid>
    </Grid>
  );
};

export default Login;
