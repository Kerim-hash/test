import React from "react";
import Box from "@mui/material/Box";

import { useStylesHome } from "./theme";

const Center = () => {
  const classes = useStylesHome();

  return (
    <Box className={classes.center}>
      <img
        className={classes.centerImg}
        src="https://png.pngtree.com/png-clipart/20210516/original/pngtree-3d-rendering-block-with-ring-illustration-png-image_6284164.png"
        alt=""
      />
    </Box>
  );
};

export default Center;
