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

export const Services = () => {
    const { t } = useTranslation();
  
  return (
    <Grid
      container
      direction={"row"}
      alignItems="center"
      justifyContent="center"
      spacing={2}
    >
      <Grid size={12}>
        <Typography variant="h4" align="center">
            {t("services.title")}
        </Typography>
        <Typography variant="subtitle1" align="center">
           {t("services.subtitle")}
        </Typography>
      </Grid>
      <Grid size={{ xs: 8, md: 3 }}>
        <Card sx={{ width: "100%", height: { xs: "200px", md: "300px" } }}>
          <CardActionArea
            component={RouterLink}
            to="/web_development"
            sx={{
              textDecoration: "none",
              "&:hover": { textDecoration: "none", color: "black" },
              width: "100%",
              height: "300px",
              color: "black",
            }}
          >
            <CardMedia
              component="img"
              src="https://firebasestorage.googleapis.com/v0/b/gsdesign-31114.appspot.com/o/assets%2Fmarketing_digital.png?alt=media&token=bef44ccb-92b0-4190-bb1f-e3f3ef3ca118"
              alt="marketing_digital"
              sx={{
                height: { xs: "130px", md: "170px" },
                objectFit: "contain",
                "&:hover": {
                  height: { xs: "130px", md: "170px" },
                  transition: "height 0.5s ease",
                },
                "&:not(:hover)": {
                  height: { xs: "130px", md: "140px" },
                  transition: "height 0.5s ease",
                },
              }}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                align="center"
              >
                 {t("services.cards.marketing.title")}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                sx={{ display: { xs: "none", md: "block" } }}
              >
               {t("services.cards.marketing.desc")}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid size={{ xs: 8, md: 3 }}>
        <Card sx={{ width: "100%", height: { xs: "200px", md: "300px" } }}>
          <CardActionArea
            component={RouterLink}
            to="/web_development"
            sx={{
              textDecoration: "none",
              "&:hover": { textDecoration: "none", color: "black" },
              width: "100%",
              height: "300px",
            }}
          >
            <CardMedia
              component="img"
              height="140"
              src="https://firebasestorage.googleapis.com/v0/b/gsdesign-31114.appspot.com/o/assets%2Fdise%C3%B1o_web.png?alt=media&token=58ed8b6e-4080-4bc0-91bb-e8a482cd9ec8"
              alt="marketing_digital"
              sx={{
                height: { xs: "130px", md: "170px" },
                objectFit: "contain",
                "&:hover": {
                  height: { xs: "130px", md: "170px" },
                  transition: "height 0.5s ease",
                },
                "&:not(:hover)": {
                  height: { xs: "130px", md: "140px" },
                  transition: "height 0.5s ease",
                },
              }}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                align="center"
              >
                {t("services.cards.web.title")}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                sx={{ display: { xs: "none", md: "block" } }}
              >
                {t("services.cards.web.desc")}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid size={{ xs: 8, md: 3 }}>
        <Card sx={{ width: "100%", height: { xs: "200px", md: "300px" } }}>
          <CardActionArea
            component={RouterLink}
            to="/graphic_design"
            sx={{
              textDecoration: "none",
              "&:hover": { textDecoration: "none", color: "black" },
              width: "100%",
              height: "300px",
            }}
          >
            <CardMedia
              component="img"
              height="150"
              src="https://firebasestorage.googleapis.com/v0/b/gsdesign-31114.appspot.com/o/assets%2Fdise%C3%B1o_grafico.png?alt=media&token=726c61be-c1e0-495e-9cdf-7e3487bc0760"
              sx={{
                height: { xs: "130px", md: "170px" },
                objectFit: "contain",
                "&:hover": {
                  height: { xs: "130px", md: "170px" },
                  transition: "height 0.5s ease",
                },
                "&:not(:hover)": {
                  height: { xs: "130px", md: "140px" },
                  transition: "height 0.5s ease",
                },
              }}
            />
            <CardContent>
              <Typography variant="h5" component="div" align="center">
                {t("services.cards.graphic.title")}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                sx={{ display: { xs: "none", md: "block" } }}
              >
                {t("services.cards.graphic.des")}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
};
