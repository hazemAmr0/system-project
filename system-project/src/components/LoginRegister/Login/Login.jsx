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

const Login = () => {
  const classes = LoginStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword,] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setError("");
    navigate("/");
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
