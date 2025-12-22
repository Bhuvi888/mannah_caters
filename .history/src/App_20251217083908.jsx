// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom"; // Removed BrowserRouter import
import Layout from "./Layout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";

const App = () => {
  return (
    // Removed <BrowserRouter> wrapper here
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
