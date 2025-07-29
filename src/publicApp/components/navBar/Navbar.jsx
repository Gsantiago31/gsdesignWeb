import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import { CardMedia, Grid, useTheme } from "@mui/material";
import { useState } from "react";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";

const pages = [
  {
    title: "home",
    url: "/home",
  },
  {
    title: "web_development",
    url: "/services/web_development",
  },
  {
    title: "graphic_design",
    url: "/services/graphic_design",
  },
  {
    title: "video_edition",
    url: "/services/video_edition",
  },
  {
    title: "about",
    url: "/about",
  },
];

export const Navbar = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{ backgroundColor: theme.palette.primary.main }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo Desktop */}
          <Grid sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
            <NavLink to={"/home"}>
              <CardMedia
                component="img"
                image="https://firebasestorage.googleapis.com/v0/b/gsdesign-31114.appspot.com/o/logo-header_design.png?alt=media&token=cb247a4c-fe60-4f70-bbeb-522991edd77b"
                alt="Gsdesign"
                sx={{ height: "80px" }}
              />
            </NavLink>
          </Grid>

          {/* Menú hamburguesa móvil */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <NavLink
                    to={page.url}
                    style={({ isActive }) => ({
                      color: isActive
                        ? theme.palette.secondary.main
                        : theme.palette.text.primary,
                      textDecoration: "none",
                    })}
                  >
                    <Typography textAlign="center">
                      {t(`nav.${page.title}`)}
                    </Typography>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo móvil */}
          <Grid
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
            }}
          >
            <NavLink to={"/home"}>
              <CardMedia
                component="img"
                image="https://firebasestorage.googleapis.com/v0/b/gsdesign-31114.appspot.com/o/logo-header_design.png?alt=media&token=cb247a4c-fe60-4f70-bbeb-522991edd77b"
                alt="Gsdesign"
                sx={{ height: "50px" }}
              />
            </NavLink>
          </Grid>

          {/* Navegación desktop */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: { xs: "none", md: "flex-end" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={handleCloseNavMenu}
                sx={{ color: "white", display: "block", "&:hover": {cursor: "default"} }}
              >
                <Box
                  component={NavLink}
                  to={page.url}
                  sx={{
                    textDecoration: "none",
                    color: ({ isActive }) =>
                      isActive
                        ? theme.palette.secondary.main
                        : theme.palette.text.primary,
                    px: 2,
                    py: 1,
                    borderRadius: 1,
                    transition: "color 0.3s ease",
                    "&.active": {
                      color: theme.palette.secondary.main,
                    },
                    "&:hover": {
                      color: theme.palette.secondary.light || "#ff5a88", // fallback si no está definido light
                    },
                  }}
                >
                  <Typography textAlign="center">
                    {t(`nav.${page.title}`)}
                  </Typography>
                </Box>
              </Button>
            ))}
          </Box>

          {/* Selector de idioma */}
          <LanguageSwitcher />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
