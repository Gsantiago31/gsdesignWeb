import { Grid, Typography } from "@mui/material";

export const Courses = () => {
  return (
    <Grid>
      <Typography variant="h6" align="left" mb={2} color={"fontColor.main"}>
        Courses
      </Typography>
      <Grid container>
        <Grid container color={"fontColor.main"}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography>Python Fundamentals</Typography>
            <Typography>CISCO Networking Academy - Netacad</Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography align="right">may 2021 - dec 2021</Typography>
          </Grid>
        </Grid>
        <Grid container color={"fontColor.main"}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography>SCRUM Fundamentals Certified</Typography>
            <Typography>Platzi University</Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography align="right">sep 17, 2021</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
