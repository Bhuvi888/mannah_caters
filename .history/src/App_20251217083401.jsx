// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="contact" element={<Contact />} />
          <Route path="why" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
