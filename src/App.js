import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles";

import theme from "./theme";
import Hero from "./components/Hero";
import Products from "./components/Products";
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Hero />
        <InfoSection />
        <Products />
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
