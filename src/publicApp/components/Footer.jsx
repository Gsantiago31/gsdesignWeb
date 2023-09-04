import { Circle, Facebook, GitHub, Instagram } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#000", width: "100%", mt: "5%" }}>
      <Grid
        container
        spacing={2}
        sx={{ width: '100%',height: "200px", margin: "2% 5%", color: "white" }}
      >
        <Grid
          item
          xs={6}
          md={4}
          display={"flex"}
          sx={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Box>
            <Typography variant="h6">Logo</Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Circle sx={{ color: "gray" }} />{" "}
            <Typography ml={2}>San José, Costa Rica</Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Circle sx={{ color: "gray" }} />{" "}
            <Typography ml={2}>(+506) 6358 7257</Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Circle sx={{ color: "gray" }} />{" "}
            <Typography ml={2}>info@gsdesign.com</Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={2}
          display={"flex"}
          sx={{
            display: {xs: 'none', md: 'block'},
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Box>
            <Typography variant="h6">Servicios</Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography>Diseño Gráfico</Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography>Páginas web</Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography>Logos</Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={2}
          display={"flex"}
          sx={{
            display: {xs: 'none', md: 'block'},
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Box>
            <Typography variant="h6">Compañía</Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography>Alcance</Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography>Nosotros</Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography>Blog</Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography>Contáctanos</Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          md={4}
          display={"flex"}
          sx={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="h6">Nuestras redes sociales</Typography>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Facebook />
            <Instagram />
            <GitHub />
          </Box>
        </Grid>
        <Grid item xs={12} m={3}>
          <Typography align="center">
            © 2023 gsdesign. Todos los derechos reservados.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
