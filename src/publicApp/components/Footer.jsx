import { Circle } from "@mui/icons-material";
import { Box, CardMedia, Grid, Typography, Link } from "@mui/material";
import { Link as RouterLink, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ backgroundColor: "#000", color: "#fff", mt: 8, pt: 6, pb: 3 }}>
      <Grid
        container
        spacing={4}
        justifyContent="space-between"
        sx={{ px: { xs: 2, md: 10 } }}
      >
        {/* LOGO + CONTACTO */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Box sx={{ mb: 2 }}>
            <NavLink to="/home">
              <CardMedia
                component="img"
                image="https://firebasestorage.googleapis.com/v0/b/gsdesign-31114.appspot.com/o/logo-header_design.png?alt=media&token=cb247a4c-fe60-4f70-bbeb-522991edd77b"
                alt="Gsdesign"
                sx={{ width: 100 }}
              />
            </NavLink>
          </Box>

          <Box display="flex" alignItems="center" mb={1}>
            <Circle sx={{ fontSize: 10, color: "gray", mr: 1 }} />
            <Typography variant="body2">San José, Costa Rica</Typography>
          </Box>
          <Box display="flex" alignItems="center" mb={1}>
            <Circle sx={{ fontSize: 10, color: "gray", mr: 1 }} />
            <Typography variant="body2">(+506) 6230 9435</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Circle sx={{ fontSize: 10, color: "gray", mr: 1 }} />
            <Typography variant="body2">info@gsdesigncr.com</Typography>
          </Box>
        </Grid>

        {/* SERVICIOS */}
        <Grid size={{ xs: 6, md: 3 }}>
          <Typography variant="h6" gutterBottom>
            {t("footer.services")}
          </Typography>
          <Link
            component={RouterLink}
            to="/services/video_edition"
            underline="none"
            sx={{
              color: "text.primary",
              "&:hover": { color: "secondary.main" },
              display: "block",
              mb: 0.5,
            }}
          >
            {t("footer.webPages")}
          </Link>
          <Link
            component={RouterLink}
            to="/services/graphic_design"
            underline="none"
            sx={{
              color: "text.primary",
              "&:hover": { color: "secondary.main" },
              display: "block",
              mb: 0.5,
            }}
          >
            {t("footer.graphicDesign")}
          </Link>
          <Link
            component={RouterLink}
            to="/services/video_edition"
            underline="none"
            sx={{
              color: "text.primary",
              "&:hover": { color: "secondary.main" },
              display: "block",
              mb: 0.5,
            }}
          >
            {t("footer.videoEdition")}
          </Link>
        </Grid>

        {/* COMPAÑÍA */}
        <Grid size={{ xs: 6, md: 3 }}>
          <Typography variant="h6" gutterBottom>
            {t("footer.company")}
          </Typography>
          <Link
            component={RouterLink}
            to="/nosotros"
            underline="none"
            sx={{
              color: "text.primary",
              "&:hover": { color: "secondary.main" },
              display: "block",
              mb: 0.5,
            }}
          >
            {t("footer.about")}
          </Link>
          <Link
            component={RouterLink}
            to="/contacto"
            underline="none"
            sx={{
              color: "text.primary",
              "&:hover": { color: "secondary.main" },
              display: "block",
              mb: 0.5,
            }}
          >
            {t("footer.contact")}
          </Link>
        </Grid>
      </Grid>

      {/* COPYRIGHT */}
      <Box mt={4} textAlign="center">
        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          © {new Date().getFullYear()} Gsdesign.{" "}
          {t("footer.rights", "Todos los derechos reservados.")}.
        </Typography>
      </Box>
    </Box>
  );
};
