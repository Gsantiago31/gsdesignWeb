import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const CallToActionContact = () => {
  const { t } = useTranslation();
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Typography variant="h2" align="center" sx={{ mt: 4 }}>
        {t("home.welcome.title")}
      </Typography>
      <Typography variant="subtitle1" align="center" sx={{ mb: 4 }}>
        {t("home.welcome.subtitle")}
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        sx={{ mt: 2, "&:hover": { color: "fontColor.primary" } }}
        component={Link}
        to="/contact"
      >
        {t("home.cta")}
      </Button>
    </Box>
  );
};
