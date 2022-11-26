import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Languages from "./components/Languages";
import Items from "./components/Items";
import PreFooter from "./components/PreFooter";
import Footer from "./components/Footer";
import Slider from "./components/Slider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavBar />
    <Languages />
    <Hero />
    <Items />
    <Slider /> 
    <PreFooter />
    <Footer />
  </React.StrictMode>
);
