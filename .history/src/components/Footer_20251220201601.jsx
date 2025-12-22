import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isWhyPage = location.pathname === "/why-us";

  return (
    <footer
      className={`
        border-t transition-colors duration-300
        ${
          isWhyPage
            ? "bg-[#0c120c]/90 border-white/10"
            : "bg-[#013220]/95 border-[#24473b]"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-4 text-sm text-[#94a3b8]">
        {/* Brand */}
        <div>
          <h4 className="text-[#d4af37] font-bold text-base">
            Mannah Caterers
          </h4>
          <p className="mt-2 leading-relaxed">
            Crafting unforgettable culinary experiences with passion, elegance,
            and taste.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-[#d4af37] font-bold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/menu" className="hover:text-white transition-colors">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/why-us" className="hover:text-white transition-colors">
                Why Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[#d4af37] font-bold mb-3">Contact Us</h4>
          <p>contact@mannahcaters.com</p>
          <p className="mt-1">+91 98765 43210</p>
        </div>

        {/* Copyright */}
        <div className="md:text-right text-xs flex items-end">
          © {new Date().getFullYear()} Mannah Caterers.
          <br />
          All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
