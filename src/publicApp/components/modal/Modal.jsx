import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CardActions, CardMedia, Divider, Grid, Link } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "80%", md: "50%" },
  bgcolor: "black",
  border: "2px solid #e30052",
  boxShadow: 24,
  p: 1,
};

// function dividirCadena(cadenaADividir,separador) {
//   var arrayDeCadenas = cadenaADividir.split(separador);
// }

const coma = ",";

export default function ModalCard({ title, body, mainImage, url, tags }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const itemTags = tags.split(",");

  return (
    <div>
      <Button onClick={handleOpen}>Read More</Button>
      <Modal
        className="animate__animated animate__fadeIn animate__fast"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CardMedia
            component="img"
            height="300"
            image={mainImage}
            alt="green iguana"
          />
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ color: "fontColor.main", mt: '10px' }}
          >
            {title}
          </Typography>
          <Divider />
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, color: "fontColor.main" }}
          >
            {body}
          </Typography>
          <Divider />
          <Grid container sx={{mt: '20px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
          {itemTags.map((tag, index) => (
            
            <Grid item key={index} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: 'auto', height: '20px', backgroundColor: 'gray', margin: '2px', borderRadius: '10px' }}>
              <Typography sx={{ mr: '10px', ml: '10px' ,color: "fontColor.main"}}>
                {tag}
              </Typography>
            </Grid>
            
          ))}
          </Grid>
          <CardActions
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Button size="small">
              <Link
                rel="noopener"
                href={url}
                target="_blank"
                underline="hover"
                sx={{ color: "fontColor.main" }}
              >
                Live
              </Link>
            </Button>
          </CardActions>
        </Box>
      </Modal>
    </div>
  );
}
