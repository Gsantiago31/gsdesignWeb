import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  DeleteOutline,
  ImageOutlined,
  SaveOutlined,
} from "@mui/icons-material";
import { Button, Grid, IconButton, MenuItem, TextField, Typography } from "@mui/material";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

import { useForm } from "../../hooks/useForm";
import { ImageGallery } from "../components";
import {
  setActiveCard,
  startDeletingCard,
  startSaveCard,
  startUploadingFiles,
} from "../../store/dashboard";
import { useRef } from "react";

const group = [
  {
    label: 'Desarrollo Web',
    value: 'web development',
  },
  {
    label: 'Diseño Gráfico',
    value: 'graphic design',
  },
  {
    label: 'Edición de Video',
    value: 'video editing',
  }
];

// const desarrollo = materias.filter( materias => materias.title === "desarrollo");
// const ciencia = materias.filter( materias => materias.title === "ciencia");

export const CardView = () => {
  const dispatch = useDispatch();

  const {
    active: card,
    messageSaved,
    isSaving,
  } = useSelector((state) => state.dashboard);

  const { tags, groups, body, title, url, date, onInputChange, formState } = useForm(card);

  const dateString = useMemo(() => {
    const newDate = new Date(date);

    return newDate.toUTCString();
  }, [date]);

  const fileInputRef = useRef();

  useEffect(() => {
    dispatch(setActiveCard(formState));

    return;
  }, [formState]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire("Nota actualizada", messageSaved, "success");
    }
  }, [messageSaved]);

  const onSaveCard = () => {
    dispatch(startSaveCard());
  };

  const onInputFileChange = ({ target }) => {
    if (target.files === 0) return;
    dispatch(startUploadingFiles(target.files));
  };

  const onDelete = () => {
    dispatch(startDeletingCard());
  };

  return (
    <Grid
      className="animate__animated animate__fadeIn animate__faster"
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          {dateString}
        </Typography>
      </Grid>
      <Grid item>
        <input
          type="file"
          multiple
          ref={fileInputRef}
          onChange={onInputFileChange}
          style={{ display: "none" }}
        />
        <IconButton
          color="primary"
          disabled={isSaving}
          onClick={() => fileInputRef.current.click()}
        >
          <ImageOutlined />
        </IconButton>
        <Button
          disabled={isSaving}
          onClick={onSaveCard}
          color="primary"
          sx={{ padding: 2 }}
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un tíutlo"
          label="Title"
          sx={{ border: "none", mb: 1 }}
          name="title"
          value={title}
          onChange={onInputChange}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          label="Description"
          minRows={5}
          sx={{ border: "none", mb: 1 }}
          name="body"
          value={body}
          onChange={onInputChange}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          label="Product URL"
          sx={{ border: "none", mb: 1 }}
          name="url"
          value={url}
          onChange={onInputChange}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          label="Technologies"
          sx={{ border: "none", mb: 1 }}
          name="tags"
          value={tags}
          onChange={onInputChange}
        />
        <TextField
          // id="filled-select-currency"
          select
          label="Select group"
          value={ groups }
          fullWidth
          name="group"
          onChange={ onInputChange }
          helperText="Please select the group"
          variant="filled"
        >
          {group.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      <Grid container justifyContent="end">
        <Button onClick={onDelete} sx={{ mt: 2 }} color="error">
          <DeleteOutline />
          Borrar
        </Button>
      </Grid>
      {/* <ImageGallery images={ note.imageUrls } /> */}
      
    </Grid>
  );
};
