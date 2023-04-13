import React from "react";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";

import Searchbar from "./search";
import logo from './../../assets/images/logo.png'
import NotificationIcon from '../../assets/images/notification.svg'
import { useStylesHeader } from './theme'
import Divider from '@mui/material/Divider';
const Header: React.FC = () => {

  const classes = useStylesHeader()

  return (
    <Box className={classes.wrapper}>
       <img  className={classes.logo} src={logo} alt="logo" />
      <Box display="flex" alignItems={'center'}>
        <Searchbar />
        <Divider sx={{ml: '20px'}} orientation="vertical" />
        <Badge sx={{ml: '20px', mr: "20px"}} badgeContent={1} color="error"><img src={NotificationIcon} alt="notification-icon" /></Badge>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </Box>
    </Box>
  );
};

export default Header;
