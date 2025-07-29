import { Divider, Grid, Link, Typography } from "@mui/material";
import { height } from "@mui/system";
import {
  Courses,
  DividerComponent,
  Education,
  Experience,
  Navbar,
  Profile,
  Skills,
} from "../components";

const url =
  "https://firebasestorage.googleapis.com/v0/b/gsdesign-31114.appspot.com/o/docs%2FSantiagoGomez_FullStackDeveloper.pdf?alt=media&token=a02e2f6a-31cd-40d6-9153-1e03927bea93";

const softSkills = [
  {
    id: 1,
    skill: "Team Work",
  },
  {
    id: 2,
    skill: "Creativity",
  },
  {
    id: 3,
    skill: "Fast Learning",
  },
  {
    id: 4,
    skill: "Adaptability",
  },
  {
    id: 5,
    skill: "Proactivity",
  },
  {
    id: 6,
    skill: "Communicative Skills",
  },
  {
    id: 7,
    skill: "Math",
  },
];

export const AboutPage = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Navbar />

      <Grid
        container
        mt={10}
        className="animate__animated animate__fadeIn animate__slowanimate__lightSpeedInLeft animate__slow"
      >
        <Grid size={{ xs: 12, md: 8 }} p={2}>
          <Profile />
          <DividerComponent />
          <Skills />
          <DividerComponent />
          <Experience />
          <DividerComponent />
          <Education />
          <DividerComponent />
          <Courses />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }} p={2}>
          <Grid>
            <Typography
              variant="h6"
              align="left"
              mb={2}
              color={"fontColor.main"}
            >
              Repository
            </Typography>
            <Typography ml={2}>
              <Link
                href={"https://github.com/Gsantiago31"}
                sx={{ color: "fontColor.main" }}
                target="_blank"
                underline="hover"
              >
                github.com/Gsantiago31
              </Link>
            </Typography>
            <Typography
              variant="h6"
              align="left"
              mb={2}
              color={"fontColor.main"}
            >
              Linkedin
            </Typography>
            <Typography ml={2}>
              <Link
                href={"https://www.linkedin.com/in/santiago-gomez-ss/"}
                sx={{ color: "fontColor.main" }}
                target="_blank"
                underline="hover"
              >
                linkedin.com/in/santiago-gomez-ss
              </Link>
            </Typography>
            <Typography
              variant="h6"
              align="left"
              mb={2}
              color={"fontColor.main"}
            >
              Talent Pitch
            </Typography>
            <Typography ml={2}>
              <Link
                href={"https://www.talentpitch.co/user/santiago-gomez-4"}
                sx={{ color: "fontColor.main" }}
                target="_blank"
                underline="hover"
              >
                interacpedia.com/user/santiago-gomez
              </Link>
            </Typography>
          </Grid>
          <DividerComponent />
          <Grid>
            <Typography
              variant="h6"
              align="left"
              mb={2}
              color={"fontColor.main"}
            >
              Language
            </Typography>
            <Typography ml={2} color={"fontColor.main"}>
              ENGLISH - B2
            </Typography>
          </Grid>
          <DividerComponent />
          <Grid>
            <Typography
              variant="h6"
              align="left"
              mb={2}
              color={"fontColor.main"}
            >
              Soft Skills
            </Typography>
            {softSkills.map((skills) => (
              <Typography key={skills.id} ml={2} color={"fontColor.main"}>
                {skills.skill}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Link color={"fontColor.main"} href={url} target={"_blank"} download>
        Download CV
      </Link>
    </Grid>
  );
};
