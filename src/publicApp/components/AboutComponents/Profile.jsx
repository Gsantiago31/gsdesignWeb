import { Grid, Typography } from "@mui/material";

export const Profile = () => {
  return (
    <Grid>
      <Typography variant="h6" align="left" mb={2} color={"fontColor.main"}>
        Profile
      </Typography>
      <Typography
        ml={2}
        mb={1}
        variant="body1"
        align="left"
        color={"fontColor.main"}
      >
        With the desire to become a great developer passionate about what I do,
        I enjoy learning to improve my knowledge and perfect it discover new
        things, as well as learn new technologies or easier methods for my work
        and develop my personal projects such as my portfolio website where one
        day I hope to be able to offer professional services
      </Typography>
      <Typography
        ml={2}
        mb={1}
        variant="body1"
        align="left"
        color={"fontColor.main"}
      >
        I have the ability to develop web pages, HTML5, CSS3 and JS, use of
        Media Query for mobile responsive development and Keyframes for HTML5
        animations. Front-end development with React, Redux, Firebase
      </Typography>
      <Typography ml={2} variant="body1" align="left" color={"fontColor.main"}>
        Knowledge of backend to make web applications that use databases or REST
        APIs.
      </Typography>
    </Grid>
  );
};
