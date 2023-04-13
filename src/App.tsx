import { ThemeProvider } from "@emotion/react";
import React from "react";
import Layout from "./layout";
import { theme } from "./style/theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
};

export default App;
