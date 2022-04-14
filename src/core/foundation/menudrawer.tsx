import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import CodeIcon from '@mui/icons-material/Code';
import MessageIcon from '@mui/icons-material/Message';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import { useContext } from 'react';
import React from 'react';
import { basepageContext } from '../../context/basepage_context';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const MenuAppDrawer = () => {
    const { setDrawerOpen, drawerOpen } = useContext(basepageContext)
    const navigate = useNavigate();
    
    const openInNewTab = (url: string) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    const handleNavigation = (route: string) => {
        navigate(route, { replace: false });
    }

    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setDrawerOpen(false)}
            onKeyDown={() => setDrawerOpen(false)}
        >
            <Grid>
                
            </Grid>
            <List>
                <ListItem button key={"Dashboard"} onClick={() => handleNavigation("/")}>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Dashboard"} />
                </ListItem>
                <ListItem button key={"Haushalte"} onClick={() => handleNavigation("households")}>
                    <ListItemIcon>
                        <OtherHousesIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Haushalte"} />
                </ListItem>
                <ListItem button key={"Benutzer"} onClick={() => handleNavigation("users")}>
                    <ListItemIcon>
                        <GroupIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Benutzer"} />
                </ListItem>
                <ListItem button key={"Benachrichtigungen"}>
                    <ListItemIcon>
                        <MessageIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Benachrichtigungen"} />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button key={"Einstellungen"}>
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Einstellungen"} />
                </ListItem>
                <ListItem button key={"Quellcode"} onClick={() => openInNewTab("https://github.com/Zamaruu/projecthomestrategies_admin_react")}>
                    <ListItemIcon>
                        <CodeIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Quellcode"} />
                </ListItem>
            </List>
        </Box>
    );
    
    return (
        <Drawer
            anchor={"left"}
            open={drawerOpen}
            onClose={() => setDrawerOpen(!drawerOpen)}
        >
            {list()}
        </Drawer>
    );
}

export default MenuAppDrawer;