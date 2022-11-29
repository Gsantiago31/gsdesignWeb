import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { SidebarItem } from './SidebarItem';

export const SideBar = ({ drawerWidth = 240 }) => {
  
    const { displayName } = useSelector( state => state.auth );
    const { cards } = useSelector( state => state.dashboard );

    return (
    <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }}}
    >
        <Drawer
            variant='permanent' // temporary
            open
            sx={{ 
                display: { xs: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
        >
            <Toolbar
            sx={{backgroundColor: 'primary.main'}}
            >
                <Typography variant='h6' noWrap component='div' color='white' >
                    { displayName }
                </Typography>
            </Toolbar>
            <Divider sx={{backgroundColor: 'secondary.main'}} />

            <List>
                {
                    cards.map( card => (
                        <SidebarItem key={ card.id } { ...card }/>
                    ))
                }
            </List>

        </Drawer>

    </Box>
  )
}