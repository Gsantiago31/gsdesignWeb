import { useState } from "react";
import { IconButton, Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);

  const languages = [
    { code: "es", label: "Español", flag: "🇪🇸" },
    { code: "en", label: "English", flag: "🇺🇸" },
  ];

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeLanguage = (code) => {
    i18n.changeLanguage(code);
    handleClose();
  };

  return (
    <>
      <IconButton onClick={handleOpen} color="inherit">
        <TranslateIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {languages.map(({ code, label, flag }) => (
          <MenuItem key={code} onClick={() => handleChangeLanguage(code)}>
            <ListItemIcon>{flag}</ListItemIcon>
            <ListItemText>{label}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
