import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const linkBase =
    "text-sm font-medium leading-normal transition-colors relative";

  const linkInactive = "text-slate-300 hover:text-white";

  const linkActive =
    "text-[#d4af37] font-bold after:content-[''] after:absolute after:-bottom-4 after:left-0 after:w-full after:h-[2px] after:bg-[#d4af37]";

  return (
    <header className="sticky top-0 z-50 bg-[#013220]/95 backdrop-blur-md border-b border-[#24473b] shadow-lg">
      <div className="flex items-center justify-between px-4 sm:px-10 py-3">
        {/* Left: Logo + Brand */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Mannah Caterers Logo"
            className="h-9 w-9 object-contain"
          />
          <span className="text-white text-xl font-bold tracking-tight">
            Mannah Caterers
          </span>
        </Link>

        {/* Right Section */}
        <div className="flex items-center gap-8">
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
          <Link
            to="/quote"
            className="flex h-10 px-4 items-center justify-center rounded-xl bg-[#d4af37] hover:bg-[#c29d4d] active:scale-95 transition-all text-[#013220] text-sm font-bold tracking-[0.015em] shadow-md"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
