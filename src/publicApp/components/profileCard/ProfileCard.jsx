import { Box, CardMedia, Grid, Typography } from "@mui/material";


export const ProfileCard = () => {
  return (
    <Grid
      container
      className="border_animate"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <Grid item xs={8} sm={5.8} md={5}>
        <Typography className="animate__animated animate__lightSpeedInLeft" variant="h2" sx={{ color: "fontColor.main" }}>
          Hi I'm Santiago Gómez
        </Typography>
        <Typography className="animate__animated animate__lightSpeedInLeft animate__slow" variant="h6" sx={{ color: "fontColor.main", textAlign: 'center' }}>
          Graphic Designer and Fullstack Developer
        </Typography>
      </Grid>
      <Grid item xs={8} sm={2} md={3} sx={{ display: 'flex' ,justifyContent: 'center', mt: {xs: '20px', md: 'none'} }}>
      <CardMedia
        className='animate__animated animate__fadeIn animate__slow'
        component="img"
        image='https://firebasestorage.googleapis.com/v0/b/gsdesign-31114.appspot.com/o/public%2Fweb_development%2FProfile_picture.png?alt=media&token=a1ccb6e5-32a7-4af3-aae2-e8110567a5c2'
        alt="Profile Picture"
        sx={{ borderRadius: '50%', width: {xs: '200px', sm: '250px', md: '300px'}}}
      />
      </Grid>
    </Grid>
  );
};
