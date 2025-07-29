import { Grid, Typography } from "@mui/material";

export const Education = () => {
  return (
    <Grid>
      <Typography variant="h6" align="left" mb={2} color={"fontColor.main"}>
        Education
      </Typography>
      <Grid container>
        <Grid container color={"fontColor.main"}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography>Software development for web applications</Typography>
            <Typography>Universidad de Caldas, Colombia</Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography align="right">apr 2021 - dec 2021</Typography>
          </Grid>
        </Grid>
        <Grid container color={"fontColor.main"}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography>Web Development School</Typography>
            <Typography>Platzi University</Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography align="right">dec 2021 - present</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
