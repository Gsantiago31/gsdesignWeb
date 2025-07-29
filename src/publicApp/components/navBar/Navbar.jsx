import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { NavLink } from "react-router-dom";
import { Favorite, LogoutOutlined, ShoppingCart } from "@mui/icons-material";
import { CardMedia, Grid } from "@mui/material";
import { startLogout } from "../../../store/auth";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { LanguageSwitcher } from "../LanguageSwitcher";

const pages = [
  {
    title: "Home",
    url: "/home",
  },
  {
    title: "Web Development",
    url: "/web_development",
  },
  {
    title: "Graphic Design",
    url: "/graphic_design",
  },
  {
    title: "Video Edition",
    url: "/video_edition",
  },
  {
    title: "About",
    url: "/about",
  },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(startLogout());
  };

  return (
    <AppBar sx={{ backgroundColor: "#000" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            <NavLink to={"/home"}>
              <CardMedia
                component="img"
                image="https://firebasestorage.googleapis.com/v0/b/gsdesign-31114.appspot.com/o/logo-header_design.png?alt=media&token=cb247a4c-fe60-4f70-bbeb-522991edd77b"
                alt="Gsdesign"
                sx={{ height: "80px" }}
              />
            </NavLink>
          </Grid>
          <LanguageSwitcher />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
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
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <NavLink
                    to={`${page.url}`}
                    style={({ isActive }) => ({
                      color: isActive ? "#000" : "#e30052",
                      textDecoration: "none",
                    })}
                  >
                    <Typography textAlign="center">{page.title}</Typography>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
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
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <NavLink
                  to={`${page.url}`}
                  style={({ isActive }) => ({
                    color: isActive ? "#fff" : "#e30052",
                    textDecoration: "none",
                  })}
                >
                  <Typography textAlign="center">{page.title}</Typography>
                </NavLink>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {/* <IconButton color="secondary" onClick={onLogout}>
              <LogoutOutlined />
            </IconButton> */}
            {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Favorite />
              </IconButton>
            </Tooltip> */}
            {/* <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
