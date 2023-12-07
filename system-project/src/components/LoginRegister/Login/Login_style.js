import { styled } from "@mui/system";
import { Paper, Button } from "@mui/material";

export const LoginStyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(4),
  backgroundColor: "#CBFBC5",
  position: "relative",
}));



export const LoginStyledButton = styled(Button)(({ theme }) => ({
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

export const LoginStyles = styled((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: "#0056b3",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(2),
  },
}));
