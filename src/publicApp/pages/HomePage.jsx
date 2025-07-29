import { Grid } from "@mui/material";
import { Helmet } from "react-helmet-async";
import {
  CatalogProductsAndServices,
  Carrousel,
  CallToActionContact,
} from "../components";
import { useTranslation } from "react-i18next";

export const HomePage = () => {
  const { t } = useTranslation();
  return (
    <Grid container spacing={0} alignItems="center" justifyContent="center">
      <Helmet>
        <title>{t("appTitle")}</title>
        <meta property="og:title" content={t("seo.ogTitle")} />
        <meta property="og:description" content={t("seo.ogDescription")} />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/gsdesign-31114.appspot.com/o/assets%2Fog_marketing_digital.png?alt=media&token=f224ef41-4294-4bb8-8bb2-0b9d960a37de"
        />
      </Helmet>

      <Grid size={12} sx={{ height: "auto", mb: "50px" }}>
        <Carrousel />
      </Grid>

      <Grid
        size={12}
        alignItems="center"
        justifyContent="center"
        sx={{ margin: "0% 5%" }}
      >
        <CatalogProductsAndServices />
      </Grid>
      <CallToActionContact />
    </Grid>
  );
};
