import { Grid, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import {
  CatalogProductsAndServices,
  Footer,
  Navbar,
  Services,
  Carrousel,
} from "../components";
import { ProfileCard } from "../components/profileCard";

export const HomePage = () => {
  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justifyContent="center"
      sx={{ height: "100vh" }}
    >
      <Helmet>
        <title>Inicio | Gsdesign</title>
        <meta
          property="og:title"
          content="Gsdesign - Lleva tu negocio a otro nivel"
        />
        <meta
          property="og:description"
          content="¿Necesitas un sitio web, manejo de redes sociales o un diseño nuevo para tu logo? Esta es tu oportunidad."
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/gsdesign-31114.appspot.com/o/assets%2Fog_marketing_digital.png?alt=media&token=f224ef41-4294-4bb8-8bb2-0b9d960a37de"
        />
      </Helmet>
      <Navbar />

      <Grid size={12} sx={{ height: "auto", mb: "50px" }}>
        <Carrousel />
      </Grid>
      <Grid
        size={12}
        display={"flex"}
        alignItems="center"
        justifyContent="center"
        sx={{ height: "80vh" }}
      >
        <Services />
      </Grid>
      <Grid
        size={12}
        alignItems="center"
        justifyContent="center"
        sx={{ margin: "0% 5%" }}
      >
        <Grid margin={5}>
          <Typography variant="h4" align="center">
            Productos y Servicios
          </Typography>
        </Grid>
        <CatalogProductsAndServices />
      </Grid>
      <Footer />
    </Grid>
  );
};
