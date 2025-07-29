import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { Navbar, Footer } from "../components";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

export const ContactPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [isSended, setIsSended] = useState(false);
  const [errorSending, setErrorSending] = useState(false);

  const { t } = useTranslation();

  const onSubmit = async (data) => {
    setLoading(true);
    setIsSended(false);
    setErrorSending(false);

    const { correo, asunto, mensaje, nombre, empresa } = data;

    if (!correo || !asunto || !mensaje || !nombre) {
      alert("Todos los campos obligatorios deben ser completados");
      setLoading(false);
      return;
    }

    const titulo = `${asunto} - ${empresa || "Sin empresa"}`;
    const texto = `De: ${nombre} | Empresa: ${empresa || "N/A"}\n\n${mensaje}`;

    const emailData = {
      to: "info@gsdesigncr.com",
      from: "info@gsdesigncr.com",
      subject: titulo,
      text: texto,
      html: "",
      replyTo: correo,
    };

    try {
      const response = await axios.post(
        "https://api.gsdesigncr.com/api/emailSender/sendEmail",
        emailData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        Swal.fire({
          icon: "success",
          title: t("swal.sended"),
          text: t("swal.response"),
          confirmButtonColor: "#ff0360", // tu color secundario
        });
        setIsSended(true);
        reset();
      } else {
        throw new Error(
          response.data.error || "Error desconocido en el envío del correo"
        );
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: t("swal.errorSended"),
        text: t("swal.errorSendedResponse"),
        confirmButtonColor: "#ff0360",
      });
      setErrorSending(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container maxWidth="md" sx={{ py: 8, mt: 8 }}>
        <Typography variant="h3" gutterBottom align="center">
          {t("contact.title")}
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          align="center"
          sx={{ mb: 4 }}
        >
          {t("contact.subtitle")}
        </Typography>

        {isSended && <Alert severity="success">{t("contact.success")}</Alert>}
        {errorSending && <Alert severity="error">{t("contact.error")}</Alert>}

        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 4 }}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                label={t("contact.fields.name")}
                fullWidth
                {...register("nombre", { required: true })}
                error={!!errors.nombre}
                helperText={errors.nombre && t("contact.required")}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                label={t("contact.fields.company")}
                fullWidth
                {...register("empresa")}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                label={t("contact.fields.email")}
                type="email"
                fullWidth
                {...register("correo", { required: true })}
                error={!!errors.correo}
                helperText={errors.correo && t("contact.required")}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                label={t("contact.fields.subject")}
                fullWidth
                {...register("asunto", { required: true })}
                error={!!errors.asunto}
                helperText={errors.asunto && t("contact.required")}
              />
            </Grid>
            <Grid size={12}>
              <TextField
                label={t("contact.fields.message")}
                multiline
                rows={6}
                fullWidth
                {...register("mensaje", { required: true })}
                error={!!errors.mensaje}
                helperText={errors.mensaje && t("contact.required")}
              />
            </Grid>
            <Grid size={12}>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                fullWidth
                disabled={loading}
              >
                {loading ? t("contact.sending") : t("contact.send")}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};
