import { createTheme } from "@mui/material/styles";
import { red, grey } from "@mui/material/colors";

export const blackTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#000000",        // Negro sólido para elementos clave
    },
    secondary: {
      main: "#ff0360ff",        // Rosa fuerte como acento
    },
    background: {
      default: "#0f0f0f",     // Fondo general ligeramente más claro que el negro
      paper: "#1a1a1a",       // Para tarjetas, modales, appbars, etc.
    },
    fontColor: {
      primary: "#ffffff",     // Texto principal en blanco
      secondary: grey[400],   // Texto secundario gris claro
      black: "#000",
    },
    error: {
      main: red.A400,         // Rojo fuerte para errores
    },
  },
  typography: {
    fontFamily: `'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
    h1: {
      fontWeight: 700,
      fontSize: "2.8rem",
      letterSpacing: "-1px",
    },
    h2: {
      fontWeight: 700,
      fontSize: "2.2rem",
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.8rem",
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
      letterSpacing: "0.5px",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          padding: "8px 16px",
        },
        containedPrimary: {
          color: "#fff",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          boxShadow: "0px 8px 24px rgba(0,0,0,0.4)",
        },
      },
    },
  },
});
