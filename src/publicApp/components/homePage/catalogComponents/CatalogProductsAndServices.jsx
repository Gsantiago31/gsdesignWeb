import { Box, Typography, Grid, Paper, Divider } from "@mui/material";
import { useTranslation } from "react-i18next";

const Section = ({ title, description, items, image }) => (
  <Paper
    sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      alignItems: "center",
      p: 4,
      gap: 4,
      mb: 4,
      backgroundColor: "background.paper",
    }}
  >
    <Box flex={1}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, color: "text.secondary" }}>
        {description}
      </Typography>
      <ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
        {items.map((item, index) => (
          <li key={index}>
            <Typography variant="body2" color="text.primary">
              {item}
            </Typography>
          </li>
        ))}
      </ul>
    </Box>

    {image && (
      <Box flex={1}>
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            maxWidth: "400px",
            borderRadius: "16px",
          }}
        />
      </Box>
    )}
  </Paper>
);

export const CatalogProductsAndServices = () => {
  const { t } = useTranslation();
  const serviciosWeb = t("catalog.web.services", { returnObjects: true });
  const serviciosDiseno = t("catalog.design.services", { returnObjects: true });
  const serviciosMarketing = t("catalog.marketing.services", {
    returnObjects: true,
  });

  return (
    <Box sx={{ px: { xs: 2, md: 6 }, py: 4 }}>
      <Typography variant="h2" align="center" gutterBottom>
        {t("catalog.title")}
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{ maxWidth: "600px", mx: "auto", mb: 6, color: "text.secondary" }}
      >
        {t("catalog.subtitle")}
      </Typography>

      <Section
        title={t("catalog.web.title")}
        description={t("catalog.web.desc")}
        items={serviciosWeb}
        image="https://firebasestorage.googleapis.com/v0/b/gsdesign-31114.appspot.com/o/assets%2Fservicio_dise%C3%B1o_web.png?alt=media&token=252dc3d6-566f-4022-926e-72a3d01e59c0"
      />

      <Section
        title="Diseño Gráfico"
        description="Impulsa tu marca con diseños visuales profesionales para todos tus materiales promocionales."
        items={serviciosDiseno}
        image="https://firebasestorage.googleapis.com/v0/b/gsdesign-31114.appspot.com/o/assets%2Fservicio_logos.png?alt=media&token=57b52572-dc22-4892-8c7b-336083f317d1"
      />

      <Section
        title={t("catalog.marketing.title")}
        description={t("catalog.marketing.desc")}
        items={serviciosMarketing}
        image="https://firebasestorage.googleapis.com/v0/b/gsdesign-31114.appspot.com/o/assets%2Fservicio_manejo_redes_sociales.png?alt=media&token=27cfcfe7-9aa3-45fe-99bf-8c52e690cca3"
      />
    </Box>
  );
};
