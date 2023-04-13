import React, { useState } from 'react'
import Box from "@mui/material/Box";
import Draggable from 'react-draggable';
import { useStylesTools } from "./theme";

import RulerIcon from "../../assets/images/ruler.svg"
import UpIcon from "../../assets/images/up.svg"
import TextIcon from '../../assets/images/text.svg'


const Tools = () => {
    const classes = useStylesTools()
    // eslint-disable-next-line
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const trackPos = (data: any) => {
      setPosition({ x: data.x, y: data.y });
   };
   
  return (
     <Draggable  axis="y" onDrag={(e, data) => trackPos(data)}>
    <Box className={classes.tools}>
 
    <Box className={classes.toolItem}>
        <img src={RulerIcon} alt="ruler-icon" />
    </Box>
    <Box className={classes.toolItem}>
        <img src={TextIcon} alt="ruler-icon" />
    </Box>
    <Box className={classes.toolItem}>
        <img src={UpIcon} alt="up-icon" />
    </Box>
    <Box className={classes.toolItem}>
        <img src={UpIcon} alt="up-icon" />
    </Box>
 
    <Box className={classes.toolItem}>
        <img src={TextIcon} alt="ruler-icon" />
    </Box>
    <Box className={`${classes.toolItem} ${classes.toolItemActive}`}>
        <img src={UpIcon} alt="up-icon" />
    </Box>
    <Box className={classes.toolItem}>
        <img src={UpIcon} alt="up-icon" />
    </Box>

    <Box className={classes.toolItem}>
        <img src={TextIcon} alt="ruler-icon" />
    </Box>
    <Box className={classes.toolItem}>
        <img src={RulerIcon} alt="ruler-icon" />
    </Box>
    <Box className={classes.toolItem}>
        <img src={UpIcon} alt="up-icon" />
    </Box>
    <Box className={classes.toolItem}>
        <img src={UpIcon} alt="up-icon" />
    </Box>
</Box>
 </Draggable>
  )

}

export default Tools