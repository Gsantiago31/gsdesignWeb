import { useMemo } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ModalCard from "../modal/Modal";
import { useTranslation } from "react-i18next";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function ItemCard({ mainImage, title, body, imageUrls, url, tags }) {
  const { t } = useTranslation();

  const newBody = useMemo(
    () => (body.length > 80 ? body.substring(0, 80) + "..." : body),
    [body]
  );

  return (
    <Card
      sx={{
        maxWidth: 345,
        marginBottom: 3,
        borderRadius: 3,
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        transition: "transform 0.3s ease",
        "&:hover": { transform: "translateY(-5px)", boxShadow: "0 8px 30px rgba(0,0,0,0.15)" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={mainImage}
        alt={title}
        sx={{ borderTopLeftRadius: 12, borderTopRightRadius: 12, objectFit: "cover" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" fontWeight={700} color="fontColor.primary">
          {title}
        </Typography>
        <Typography variant="body2" color="fontColor.secondary" sx={{ minHeight: 60 }}>
          {newBody}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ justifyContent: "space-between", px: 2, pb: 2 }}
      >
        <Button
          size="small"
          color="fontColor.primary"
          href={url}
          target="_blank"
          rel="noopener"
          endIcon={<OpenInNewIcon />}
        >
          {t("modal.live")}
        </Button>
        <ModalCard
          title={title}
          body={body}
          images={imageUrls}
          url={url}
          mainImage={mainImage}
          tags={tags}
        />
      </CardActions>
    </Card>
  );
}
