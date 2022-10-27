import React from "react";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  Drawer,
  // Link,
} from "@mui/material";

import {
  ChevronLeft,
  Dashboard,
  Devices,
  Explore,
  Favorite,
  Settings,
  Analytics,
} from "@mui/icons-material";
import DrawerHeader from "./DrawerHeader";

const drawerWidth = 240;

export default function Sidebar({ open, handleDrawerClose }) {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <h2>Acciojob</h2>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeft />
        </IconButton>
      </DrawerHeader>
      {/* <Divider /> */}
      <List>
        <ListItem button component={Link} to="/dashboard">
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/analytics">
          <ListItemIcon>
            <Analytics />
          </ListItemIcon>
          <ListItemText primary="Analytics" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Explore />
          </ListItemIcon>
          <ListItemText primary="Explore" />
        </ListItem>
        <ListItem button component={Link} to="/favorites">
          <ListItemIcon>
            <Favorite />
          </ListItemIcon>
          <ListItemText primary="Favorites" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button component={Link} to="/devices">
          <ListItemIcon>
            <Devices />
          </ListItemIcon>
          <ListItemText primary="Devices" />
        </ListItem>
        <ListItem button component={Link} to="/settings">
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Drawer>
  );
}
