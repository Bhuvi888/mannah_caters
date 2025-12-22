// Layout.jsx
import React from "react";
import Header from "./";
import Footer from "./Footer";
// If you are using React Router, import Outlet
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* "flex-1" ensures this section takes up all available space, 
          pushing the footer to the bottom if content is short */}
      <main className="flex-1">
        {/* Outlet renders the child route's element (the current page) */}
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
