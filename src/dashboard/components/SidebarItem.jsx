import { TurnedInNot } from "@mui/icons-material";
import { Divider, Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setActiveCard } from "../../store/dashboard";

export const SidebarItem = ({ title = '', body, id, date, imageUrls = []  }) => {

  const dispatch = useDispatch();

  const onClickNote = () => {
    dispatch(setActiveCard({ title, id, body, date, imageUrls }))
  }

  const newTitle = useMemo(() => {

    return title.length > 17
    ? title.substring(0, 17) + '...'
    : title;

  },[ title ])


  return (
    <ListItem key={id} disablePadding
    sx={{backgroundColor: 'primary.main', borderBottom: '1px solid', borderBottomColor: 'secondary.main'}}>
      <ListItemButton onClick={ onClickNote }>
        <ListItemIcon>
          <TurnedInNot 
          sx={{color: '#fff'}}
          />
        </ListItemIcon>
        <Grid container sx={{color: '#fff'}}>
          <ListItemText 
          primary={ newTitle }
          />
          <ListItemText
            secondary={ body }
          />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
