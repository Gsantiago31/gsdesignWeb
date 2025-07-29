import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CardActions, CardMedia, Divider, Grid, Link, Chip, Tooltip } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: "70%", md: "50%" },
  bgcolor: "background.paper",
  borderRadius: 3,
  boxShadow: 24,
  p: 3,
  outline: "none",
  maxHeight: "90vh",
  overflowY: "auto",
};

export default function ModalCard({ title, body, mainImage, url, tags }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const itemTags = tags ? tags.split(",").map((t) => t.trim()) : [];
const {t} = useTranslation()
  return (
    <div>
      <Button
        variant="outlined"
        size="small"
        onClick={handleOpen}
        sx={{ textTransform: "none", color: "fontColor.primary", borderColor: "#FFF", "&:hover": {borderColor: "secondary.main", backgroundColor: "background.default"} }}
      >
        {t("modal.read")}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        closeAfterTransition
        BackdropProps={{
          sx: { bgcolor: "rgba(0,0,0,0.7)" },
        }}
      >
        <Box sx={style}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button onClick={handleClose} size="small" sx={{ minWidth: "auto", p: 0 }}>
              <CloseIcon fontSize="small" />
            </Button>
          </Box>
          <CardMedia
            component="img"
            height="280"
            image={mainImage}
            alt={title}
            sx={{ borderRadius: 2, boxShadow: "0 4px 15px rgba(0,0,0,0.2)", mb: 2 }}
          />
          <Typography id="modal-title" variant="h5" component="h2" mb={2} fontWeight={700}>
            {title}
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography id="modal-description" sx={{ mb: 2, whiteSpace: "pre-line" }}>
            {body}
          </Typography>
          <Divider sx={{ mb: 2 }} />

          {/* Tags mejorados con Chips */}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {itemTags.map((tag, idx) => (
              <Tooltip key={idx} title={tag.length > 15 ? tag : ""} arrow>
                <Chip
                  label={tag.length > 15 ? tag.substring(0, 15) + "..." : tag}
                  color="secondary"
                  size="small"
                  sx={{
                    fontWeight: 600,
                    cursor: "default",
                    userSelect: "none",
                    background: "linear-gradient(45deg, #e30052 30%, #ff4081 90%)",
                    color: "white",
                    "&:hover": {
                      background: "linear-gradient(45deg, #ff4081 30%, #e30052 90%)",
                      boxShadow: "0 0 8px rgba(227, 0, 82, 0.7)",
                    },
                    transition: "all 0.3s ease",
                  }}
                />
              </Tooltip>
            ))}
          </Box>

          <CardActions sx={{ justifyContent: "flex-end", mt: 3 }}>
            <Button
              variant="contained"
              color="secondary"
              href={url}
              target="_blank"
              rel="noopener"
              sx={{ textTransform: "none" }}
            >
              {t("modal.live")}
            </Button>
          </CardActions>
        </Box>
      </Modal>
    </div>
  );
}
