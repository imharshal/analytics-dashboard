import React, { useState } from "react";
import { Box } from "@mui/material";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
// import Content from "./Content";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import DrawerHeader from "./components/Sidebar/DrawerHeader";
import { BrowserRouter } from "react-router-dom";
// import AnalyticsCard from "./components/Card/AnalyticsCard";
import Dashboard from "./pages/Dashboard";
export default function App() {
  const [open, setOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Box display="flex">
          <CssBaseline />
          <Header
            handleDrawerToggle={handleDrawerToggle}
            toggleDarkMode={toggleDarkMode}
            darkMode={darkMode}
          />
          <Sidebar handleDrawerClose={handleDrawerClose} open={open} />
          <Main open={open}>
            <DrawerHeader />
            <Dashboard />
            {/* <Content /> */}
          </Main>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}
