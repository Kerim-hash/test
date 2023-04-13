import React from "react";
import Box from "@mui/material/Box";

import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { useStylesHome } from "./theme";
import Center from "./Center";

const Home: React.FC = () => {
  const classes = useStylesHome();

  return (
    <Box className={classes.container}>
      <LeftSide />
      <Center />
      <RightSide />
    </Box>
  );
};

export default Home;
