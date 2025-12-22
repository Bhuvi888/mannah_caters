import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Why from "./pages/Why";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="contact" element={<Contact />} />
        <Route path="why-us" element={<WhyUS />} />
      </Route>
    </Routes>
  );
};

export default App;
