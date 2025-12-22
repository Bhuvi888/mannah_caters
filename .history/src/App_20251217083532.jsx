// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "L";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Why from "./pages/Why";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="contact" element={<Contact />} />
          <Route path="why" element={<Why />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
