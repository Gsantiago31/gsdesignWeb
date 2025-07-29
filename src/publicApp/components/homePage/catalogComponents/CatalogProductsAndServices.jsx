import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";

const productos = [
  {
    id: "1",
    title: "Redes Sociales",
    subtitle: "Manejo de Redes",
    image:
      "https://firebasestorage.googleapis.com/v0/b/gsdesign-31114.appspot.com/o/assets%2Fservicio_manejo_redes_sociales.png?alt=media&token=27cfcfe7-9aa3-45fe-99bf-8c52e690cca3",
    alt: "servicio_manejo_redes_sociales",
    url: "",
  },
  {
    id: "2",
    title: "Páginas web",
    subtitle: "Manejo de Redes",
    image:
      "https://firebasestorage.googleapis.com/v0/b/gsdesign-31114.appspot.com/o/assets%2Fservicio_dise%C3%B1o_web.png?alt=media&token=252dc3d6-566f-4022-926e-72a3d01e59c0",
    alt: "servicio_diseño_web",
    url: "/web_development",
  },
  {
    id: "3",
    title: "Posicionamiento SEO",
    subtitle: "Manejo de Redes",
    image:
      "https://firebasestorage.googleapis.com/v0/b/gsdesign-31114.appspot.com/o/assets%2Fservicio_posicionamiento_seo.png?alt=media&token=34112ef0-bc89-44ef-bc15-4bf5b2901471",
    alt: "servicio_posicionamiento_seo",
    url: "/web_development",
  },
  {
    id: "4",
    title: "Logos",
    subtitle: "Manejo de Redes",
    image:
      "https://firebasestorage.googleapis.com/v0/b/gsdesign-31114.appspot.com/o/assets%2Fservicio_logos.png?alt=media&token=57b52572-dc22-4892-8c7b-336083f317d1",
    alt: "servicio_logos",
    url: "/graphic_design",
  },
  {
    id: "5",
    title: "Tarjetas de Presentación",
    subtitle: "Manejo de Redes",
    image:
      "https://firebasestorage.googleapis.com/v0/b/gsdesign-31114.appspot.com/o/assets%2Fservicio_tarjetas_presentacion.png?alt=media&token=f7c394f0-a237-4183-bf00-edf308e40433",
    alt: "servicio_tarjetas_de_presentacion",
    url: "/graphic_design",
  },
  {
    id: "6",
    title: "Catálogos",
    subtitle: "Manejo de Redes",
    image:
      "https://firebasestorage.googleapis.com/v0/b/gsdesign-31114.appspot.com/o/assets%2Fservicio_catalogo.png?alt=media&token=8a446a04-eb75-4268-94ed-5d8c1feec866",
    alt: "servicio_catalogo",
    url: "/graphic_design",
  },
  {
    id: "7",
    title: "Invitaciones",
    subtitle: "Manejo de Redes",
    image:
      "https://firebasestorage.googleapis.com/v0/b/gsdesign-31114.appspot.com/o/assets%2Fservicio_invitaciones.png?alt=media&token=df5de199-ac43-4c0b-b789-6e458ed13c03",
    alt: "servicio_invitaciones",
    url: "/graphic_design",
  },
  {
    id: "8",
    title: "Edición de Video",
    subtitle: "Manejo de Redes",
    image:
      "https://firebasestorage.googleapis.com/v0/b/gsdesign-31114.appspot.com/o/assets%2Fservicio_edicion_de_video.png?alt=media&token=ac50bff0-d8aa-4de1-9679-0f5b92d17a39",
    alt: "servicio_edicion_de_video",
    url: "/video_edition",
  },
];

export const CatalogProductsAndServices = () => {
    const { t } = useTranslation();

  return (
    <Grid container spacing={2}>
      {productos.map((producto) => (
        <Grid key={producto.id} size={{ xs: 6, md: 3 }}>
          <Card sx={{ width: "100%", height: "250px" }}>
            <CardActionArea
              component={RouterLink}
              to={producto.url}
              sx={{
                textDecoration: "none",
                "&:hover": { textDecoration: "none", color: "black" },
                height: "100%",
              }}
            >
              <CardMedia
                component="img"
                height="140"
                src={producto.image}
                sx={{
                  objectFit: "cover",
                  "&:hover": {
                    height: "170px",
                    transition: "height 0.5s ease",
                  },
                  "&:not(:hover)": {
                    height: "150px",
                    transition: "height 0.5s ease",
                  },
                }}
              />
              <CardContent>
                <Typography variant="h5" component="div" align="center">
                  {t(`catalog.items.${producto.id}.title`)}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                >
                  {t(`catalog.items.${producto.id}.subtitle`)}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
