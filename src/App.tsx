// src/App.tsx
import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Styles/GlobalStyle";
import { theme } from "./Styles/theme";
import AppRoutes from "./routes";
import "./index.css";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
