// RegisterStyles.js content
import { styled } from "@mui/system";
import { Paper, Typography, Button } from "@mui/material";

export const RegisterStyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(4),
  backgroundColor: "#CBFBC5",
  position: "relative",
  maxWidth: "400px", // Adjust the maxWidth as needed
  margin: "auto", // Center the form on the page
}));

export const RegisterMegaMindText = styled(Typography)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(2),
  left: theme.spacing(2),
  color: "#000",
  fontSize: "2rem",
  fontWeight: "bold",
  zIndex: 1,
}));

export const RegisterStyledButton = styled(Button)(({ theme }) => ({
  minWidth: "100px",
  height: "5vh",
  fontSize: "2vh",
  marginTop: theme.spacing(2),
  backgroundColor: "#1C201C",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#278227",
  },
  zIndex: 1,
}));

export const RegisterStyles = styled((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: "#0056b3",
  },
  form: {
    width: "100%", // Set the width to 100%
    maxWidth: "400px", // Set the maxWidth as needed
    margin: "auto", // Center the form on the page
    marginTop: theme.spacing(2),
  },
}));
