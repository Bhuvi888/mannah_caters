import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isWhyPage = location.pathname === "/why-us";

  const linkBase =
    "text-sm font-medium leading-normal transition-colors relative";

  const linkInactive = "text-slate-300 hover:text-white";

  const linkActive =
    "text-[#d4af37] font-bold after:content-[''] after:absolute after:-bottom-4 after:left-0 after:w-full after:h-[2px] after:bg-[#d4af37]";

  return (
    <header
      className={`
        sticky top-0 z-50 backdrop-blur-md border-b shadow-lg
        ${
          isWhyPage
            ? "bg-[#0c120c]/90 border-white/10"
            : "bg-[#013220]/95 border-[#24473b]"
        }
      `}
    >
      {/* TOP BAR */}
      <div className="flex items-center justify-between px-4 sm:px-10 py-3">
        {/* Logo */}
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

        {/* Right */}
        <div className="flex items-center gap-3 md:gap-8">
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-9">
            {["/", "/menu", "/contact", "/why-us"].map((path, i) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : linkInactive}`
                }
              >
                {["Home", "Menu", "Contact", "Why Us"][i]}
              </NavLink>
            ))}
          </nav>

          {/* CTA */}
          <Link
            to="/quote"
            className="flex h-10 px-4 items-center justify-center rounded-xl bg-[#d4af37] hover:bg-[#c29d4d] active:scale-95 transition-all text-[#013220] text-sm font-bold shadow-md"
          >
            Enquire Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2"
            aria-label="Toggle Menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          className={`
            md:hidden border-t
            ${isWhyPage ? "border-white/10 bg-[#0c120c]" : "border-[#24473b] bg-[#013220]"}
          `}
        >
          <nav className="flex flex-col px-6 py-4 gap-4 text-sm">
            {["/", "/menu", "/contact", "/why-us"].map((path, i) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-2 ${isActive ? "text-[#d4af37] font-bold" : "text-slate-300 hover:text-white"}`
                }
              >
                {["Home", "Menu", "Contact", "Why Us"][i]}
              </NavLink>
            ))}

            <Link
              to="/quote"
              onClick={() => setOpen(false)}
              className="mt-2 text-center bg-[#d4af37] hover:bg-[#c29d4d] text-[#013220] py-2 rounded-lg font-bold"
            >
              Enquire Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
