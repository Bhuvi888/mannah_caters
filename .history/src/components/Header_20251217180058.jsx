import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const linkBase =
    "text-sm font-medium leading-normal transition-colors relative";

  const linkInactive = "text-slate-300 hover:text-white";

  const linkActive =
    "text-[#d4af37] font-bold after:content-[''] after:absolute after:-bottom-4 after:left-0 after:w-full after:h-[2px] after:bg-[#d4af37]";

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-[#24473b] bg-[#013220]/95 backdrop-blur-md px-4 sm:px-10 py-3 shadow-lg">
      {/* Logo */}
      <div className="flex items-center gap-4">
        <NavLink
          to="/"
          className="text-white text-xl font-bold tracking-[-0.015em] hover:text-[#d4af37] transition-colors"
        >
          Mannah Caterers
        </NavLink>
      </div>

      {/* Right Section */}
      <div className="flex flex-1 justify-end items-center gap-8">
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-9">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Menu
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Contact
          </NavLink>

          <NavLink
            to="/why-us"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Why Us
          </NavLink>
        </nav>

        {/* CTA */}
        <button className="flex h-10 px-4 items-center justify-center rounded-xl bg-[#d4af37] hover:bg-[#c29d4d] active:scale-95 transition-all text-[#013220] text-sm font-bold tracking-[0.015em] shadow-md">
          Enquire Now
        </button>
      </div>
    </header>
  );
};

export default Header;
