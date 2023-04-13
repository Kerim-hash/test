import React from "react";
import { styled, CSSObject, Theme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Box from "@mui/material/Box";

import CompucterIcon from '../../assets/images/compucter.svg'
import SearchIcon from '../../assets/images/search-icon.svg'
import CubeIcon from '../../assets/images/cube.svg'

const drawerWidth = 240;
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  padding: "0 4px",
  borderRight: "none",
  background: theme.palette.secondary.main,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  padding: "0 4px",
  borderRight: "none",
  background: theme.palette.secondary.main,
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)})`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)})`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  boxShadow: "none",
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  borderRight: "none",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

interface NavProps {
  open: boolean;
  handleToggle: () => void;
}

const Nav: React.FC<NavProps> = ({ open, handleToggle }: NavProps) => {

  const navigation = [
    {
      text: "text",
      icon: CompucterIcon
    },
    {
      text: "text34",
      icon: SearchIcon
    },
    {
      text: "Cube",
      icon: CubeIcon
    }
  ]

  return (
    <Drawer variant="permanent" open={open}>
      <Box>
      <IconButton sx={{mt: '10px', ml: '10px'}} onClick={handleToggle}>
        <span className={open ? "active burger" : "burger"}></span>
      </IconButton>
      </Box>

      <List sx={{mt: '12px'}}>
        {navigation.map((item, index) => {
         return <ListItem key={item.text} disablePadding sx={{ display: "flex", mt: '8px', height: "56px", background: index === 1 ? "#E9E9EB" : '', borderRadius: '16px' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                padding: '0 0 0 16px',
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <img src={item.icon} alt="icon" />
              </ListItemIcon>

              <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        })}
      </List>
    </Drawer>
  );
};

export default Nav;
