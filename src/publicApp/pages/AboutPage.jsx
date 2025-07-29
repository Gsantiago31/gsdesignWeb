import {
  Box,
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
  Link,
  Grid,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import imgEco from "/src/assets/img/projects/Compupartes.webp";
import imgViV from "/src/assets/img/projects/Viv Twins.webp";
import imgJs from "/src/assets/img/projects/Javier Sancho.webp";
import imgCp from "/src/assets/img/projects/Compupartes.webp";
import { CallToActionContact, Footer, Navbar } from "../components";

const imagenesProyectos = {
  "ecotraveltamarindo.com": imgEco,
  "javiersancho.pro": imgJs,
  "vivtwins.com": imgViV,
  "compupartescr.com": imgCp,
};

export const AboutPage = () => {
  const { t } = useTranslation();

  // Traer array de proyectos desde traducciones
  const proyectos = t("about.projects", { returnObjects: true });
  const valores = t("about.values", { returnObjects: true });

  return (
    <>
      <Container maxWidth="md" sx={{ mt: 15, mb: 10 }}>
        <Typography variant="h3" textAlign="center" gutterBottom>
          {t("about.title")}
        </Typography>

        <Typography variant="body1">{t("about.intro")}</Typography>

        <Box mt={6}>
          <Typography variant="h5" gutterBottom>
            {t("about.projectsTitle")}
          </Typography>

          <Typography variant="body1" mb={2}>
            {t("about.projectsIntro")}
          </Typography>

          <Grid container spacing={4}>
            {proyectos.map(({ name, description, url }) => (
              <Grid size={{ xs: 12, md: 6 }} key={name}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    p: 2,
                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                    borderRadius: 2,
                    backgroundColor: "#fafafa",
                    height: "100%",
                  }}
                >
                  <Box
                    component="img"
                    src={imagenesProyectos[name] || "/imagenes/placeholder.png"}
                    alt={name}
                    sx={{
                      maxHeight: "200px",
                      mb: 2,
                      objectFit: "contain",
                      borderRadius: 1,
                    }}
                  />
                  <Link
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                    sx={{ fontWeight: "bold", fontSize: "1.1rem", mb: 0.5 }}
                  >
                    {name}
                  </Link>
                  <Typography
                    variant="body2"
                    color="fontColor.black"
                    textAlign="center"
                  >
                    {description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box mt={6}>
          <Typography variant="h5" gutterBottom>
            {t("about.valuesTitle")}
          </Typography>
          <List dense>
            {valores.map((valor, i) => (
              <ListItem key={i}>
                <ListItemText primary={`✅ ${valor}`} />
              </ListItem>
            ))}
          </List>
        </Box>

        <CallToActionContact />
      </Container>
    </>
  );
};
