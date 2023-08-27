
import React from "react";
import "../src/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

import HomePage from "./pages/homePage";
import CharlamePage from "./pages/charlamePage";
import LaburosPage from "./pages/laburosPage";
import QuiensoyPage from "./pages/quiensoyPage";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/laburos" element={<LaburosPage />} />
        <Route path="/quiensoy" element={<QuiensoyPage />} />
        <Route path="/charlame" element={<CharlamePage />} />
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>

  );
}

export default App;
