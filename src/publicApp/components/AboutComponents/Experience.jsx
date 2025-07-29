import { Divider, Grid, Typography } from "@mui/material";

export const Experience = () => {
  return (
    <Grid>
      <Typography variant="h6" align="left" mb={2} color={"fontColor.main"}>
        Hands on Experience
      </Typography>
      <Grid container>
        <Grid
          size={0.5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Divider
            sx={{
              backgroundColor: "secondary.main",
              height: "2px",
              width: "100%",
            }}
          />
        </Grid>
        <Grid size={11.5}>
          <Typography
            ml={7}
            mb={2}
            mt={2}
            variant="subtitle2"
            color={"fontColor.main"}
          >
            Web Portfolio (Jan 2021 - present)
          </Typography>
          <Typography ml={3} mb={1} variant="body2" color={"fontColor.main"}>
            I am currently working on my web portfolio gsdesign.com.co. In it I
            mainly show my skills with web development and graphic design
          </Typography>
          <Typography ml={3} mb={1} variant="body2" color={"fontColor.main"}>
            I built the project with HTML5, CSS3, and JS, but I am refactoring
            the code and using the REACT framework and Firebase as a database to
            improve the experience, make the page easier to maintain, and upload
            regular updates
          </Typography>
          <Typography ml={3} mb={1} variant="body2" color={"fontColor.main"}>
            I also used Redux for improved authentication and data management,
            and an added ease for uploading updates through a dashboard
            available only to a user with an administrative role
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          size={0.5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Divider
            sx={{
              backgroundColor: "secondary.main",
              height: "2px",
              width: "100%",
            }}
          />
        </Grid>
        <Grid size={11.5}>
          <Typography
            ml={7}
            mb={2}
            mt={2}
            variant="subtitle2"
            color={"fontColor.main"}
          >
            Hackathon TIC 2.0 (October 2021)
          </Typography>
          <Typography ml={3} mb={1} variant="body2" color={"fontColor.main"}>
            A virtual assistant for the care of older adults, the winning
            project of the Hackathon TIC 2.0
          </Typography>
          <Typography ml={3} mb={1} variant="body2" color={"fontColor.main"}>
            We developed the idea of a virtual assistant capable of working in a
            similar way to those integrated in smartphones. This application
            remembers the hours of medication and supplement administration
            scheduled by the caregiver, makes nutrition suggestions, and, thanks
            to artificial intelligence, learns from the data it collects to
            improve performance.
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          item
          size={0.5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Divider
            sx={{
              backgroundColor: "secondary.main",
              height: "2px",
              width: "100%",
            }}
          />
        </Grid>
        <Grid size={11.5}>
          <Typography
            ml={7}
            mb={2}
            mt={2}
            variant="subtitle2"
            color={"fontColor.main"}
          >
            Trainee Fullstack developer 4Geeks (Jan 2022 - May 2022)
          </Typography>
          <Typography ml={3} mb={1} variant="body2" color={"fontColor.main"}>
            I worked as a full stack developer in https://4geeks.io/, for an
            ecommerce https://tenndo.com/. The tasks that I realized consisted
            of solving the problems that the clients presented primarily in the
            frontend, and the technologies that I used on this project were
            REACT framework, JavaScript, Python, WSL, Bash, Docker.
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          size={0.5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Divider
            sx={{
              backgroundColor: "secondary.main",
              height: "2px",
              width: "100%",
            }}
          />
        </Grid>
        <Grid size={11.5}>
          <Typography
            ml={7}
            mb={2}
            mt={2}
            variant="subtitle2"
            color={"fontColor.main"}
          >
            Freelance (Jan 2020 - present)
          </Typography>
          <Typography ml={3} mb={1} variant="body2" color={"fontColor.main"}>
            I have worked on different graphic design and web development
            projects. The latest projects are:
          </Typography>
          <Typography></Typography>
          <Typography ml={3} mb={1} variant="body2" color={"fontColor.main"}>
            I developed an e-commerce page for a travel agency in Costa Rica
            called Ecotravel Tamarindo. I built the web page with the Wordpress
            CRM, I also redesigned the company logo.
          </Typography>
          <Typography></Typography>
          <Typography ml={3} mb={1} variant="body2" color={"fontColor.main"}>
            I'm working on an online store project built on React/Redux,
            Firebase and Paypal payment gateway integration.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
