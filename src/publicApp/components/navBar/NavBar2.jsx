import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import {
  AppBar,
  Card,
  CardMedia,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { startLogout } from "../../../store/auth";

import "./navbar.css";

export const NavBar2 = ({ drawerWidth = 0 }) => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(startLogout());
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ 
            mr: 2, 
            display: { sm: "none" }, 
        }}
        >
          <MenuOutlined />
        </IconButton>

        <Grid
          container
          direction="row"
          alignItems="center"
          sx={{ 
            mr: 2, 
            display: { xs: "flex", sm: "flex" }, 
            flexDirection: {xs: "column", sm: "row"},
            alignItems: { xs: "flex-satart", sm: "center"},
            justifyContent: { xs: "center", sm: "space-between"}
        }}
        >
          <NavLink to={"/home"}>
            <CardMedia
              component="img"
              height="100px"
              image="https://firebasestorage.googleapis.com/v0/b/gsdesign-31114.appspot.com/o/logo-header_design.png?alt=media&token=cb247a4c-fe60-4f70-bbeb-522991edd77b"
              alt="Gsdesign"
            />
          </NavLink>
          <NavLink
            to={"/home"}
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#e30052",
              textDecoration: "none",
            })}
          >
            {" "}
            Home{" "}
          </NavLink>
          <NavLink
            to={"/web_development"}
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#e30052",
              textDecoration: "none",
            })}
          >
            {" "}
            Web Development{" "}
          </NavLink>
          <NavLink
            to={"/graphic_design"}
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#e30052",
              textDecoration: "none",
            })}
          >
            {" "}
            Graphic Design{" "}
          </NavLink>
          <NavLink
            to={"/video_editing"}
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#e30052",
              textDecoration: "none",
            })}
          >
            {" "}
            Video Edition{" "}
          </NavLink>
          <NavLink
            to={""}
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#e30052",
              textDecoration: "none",
            })}
          >
            {" "}
            About{" "}
          </NavLink>
          <NavLink
            to={"/auth/login"}
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#e30052",
              textDecoration: "none",
            })}
          >
            {" "}
            <IconButton color="secondary" onClick={onLogout}>
              <LogoutOutlined />
            </IconButton>
          </NavLink>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
