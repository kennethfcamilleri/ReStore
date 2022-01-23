import React, { useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";
import CssBaseline from '@mui/material/CssBaseline';
import { Container, createTheme, ThemeProvider } from "@mui/material";

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#EAEAEA' : '#121212'
      }
    }
  })

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}  />
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;