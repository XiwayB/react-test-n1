import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";
import Products from "./components/Products";
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <InfoSection />
      <Products />
      <Footer />
    </Router>
  );
}

export default App;
