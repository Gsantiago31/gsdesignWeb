import { Box } from "@mui/material";
import React from "react";
import { Footer, Navbar } from "../components";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <Navbar />

      {/* Contenido principal */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet /> {/* o tu contenido principal */}
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};
