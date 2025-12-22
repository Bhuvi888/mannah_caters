import React from "react";

const Footer = ({ onNavigate }) => {
  const handleNav = (tab) => {
    // Check if onNavigate exists before calling it
    if (onNavigate) {
      onNavigate(tab);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#052f22] py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6 text-sm text-[#cfe9df]">
        <div>
          <h4 className="text-[#e0b84c] font-semibold">
            Mannah Caterers ~ Food For Soul
          </h4>
          <p className="text-sm mt-2">
            Crafting unforgettable culinary experiences with passion and
            elegance.
          </p>
        </div>
        <div>
          <h4 className="text-[#e0b84c] font-semibold">Quick Links</h4>
          <ul className="text-sm mt-2 space-y-1">
            <li className="hover:text-white cursor-pointer transition-colors">
              Services
            </li>
            {/* I added the onClick here so handleNav is actually used */}
            <li
              onClick={() => handleNav("combos")}
              className="hover:text-white cursor-pointer transition-colors"
            >
              Menu
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Gallery
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-[#e0b84c] font-semibold">Contact Us</h4>
          <p className="text-sm mt-2">contact@mannahcaters.com</p>
          <p className="text-sm">(123) 456-7890</p>
        </div>
        <div className="text-sm">
          © 2024 Mannah Caterers. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
