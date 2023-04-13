import React from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";

import Nav from "./nav";
import Header from "./header";
import Home from "../page/home";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  minHeight: "48px !important",
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  width: `calc(100% - ${64}px)`,
  zIndex: theme.zIndex.drawer + 1,
  background: theme.palette.secondary.main,
  boxShadow: "none",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Layout: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar position="fixed" open={open}>
        <Toolbar
          sx={{
            padding: "0 13px !important",
            minHeight: "48px !important",
            borderLeft: "1px solid #DDDDDF",
            borderBottom: "1px solid #DDDDDF",
          }}
        >
          <Header />
        </Toolbar>
      </AppBar>

      <Nav open={open} handleToggle={handleToggle} />

      <Box component="main" sx={{ flexGrow: 1 }}>
        <DrawerHeader />

        <Home />
      </Box>
    </Box>
  );
};

export default Layout;
