import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#D7F4CD",
    },
    secondary: {
      main: "#FFFF",
    },
  },
  components: {
    MuiTextField: {
      variants: [
        {
          props: { variant: "filled" },
          style: {
            display: "flex",
            alignitems: "center",
            borderradius: "10px",
            bordercolor: "blue",
            padding: "0px 20px 24px 0px",
            "&:invalid": {
              bordercolor: "red",
              backgroundcolor: "red",
            },
          },
        },
      ],
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            textTransform: "none",
            border: "2px solid black",
            backgroundColor: "#00F0FF",
            color: "#000",
            textalign: "center",
            fontfamily: "Inter",
            fontsize: "70px",
            fontstyle: "bold",
            fontweight: "700",
            lineheight: "normal",
            borderRadius: "8",
            marginTop: "50px",
            "&:hover": {
              transition: "transform 0.3s ease-in-out",
              transform: "scale(1.2)",
            },
          },
        },
      ],
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
