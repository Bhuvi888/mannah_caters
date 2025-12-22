import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = location.pathname === "/";
  const isWhyPage = location.pathname === "/why-us";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const [pastHero, setPastHero] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      // Trigger after hero (≈ 80% of viewport height)
      setPastHero(scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkBase =
    "text-sm font-medium leading-normal transition-colors relative";

  const linkInactive = "text-slate-300 hover:text-white";

  const linkActive =
    "text-[#d4af37] font-bold after:content-[''] after:absolute after:-bottom-4 after:left-0 after:w-full after:h-[2px] after:bg-[#d4af37]";

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300 ease-out
        ${scrolled ? "backdrop-blur-md shadow-lg h-[64px]" : "h-[80px]"}

        ${
          isHome
            ? scrolled
              ? "bg-[#013220]/5 border-b border-[#24473b]"
              : "bg-transparent"
            : isWhyPage
              ? "bg-[#0c120c]/95 border-b border-white/10"
              : "bg-[#013220]/95 border-b border-[#24473b]"
        }
      `}
    >
      {/* TOP BAR */}
      <div className="flex items-center justify-between px-4 sm:px-10 h-full">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Mannah Caterers Logo"
            className={`object-contain transition-all duration-300 ${
              scrolled ? "h-8 w-8" : "h-9 w-9"
            }`}
          />
          <span
            className={`text-white font-header font-bold tracking-tight transition-all duration-300 ${
              scrolled ? "text-lg" : "text-xl"
            }`}
          >
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
            className={`
              flex items-center justify-center rounded-xl
              bg-[#d4af37] hover:bg-[#c29d4d]
              text-[#013220] font-bold shadow-md
              transition-all duration-300
              ${scrolled ? "h-9 px-4 text-xs" : "h-10 px-4 text-sm"}
              active:scale-95
            `}
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
            transition-all duration-300
            ${
              isHome
                ? "border-[#24473b] bg-[#013220]"
                : isWhyPage
                  ? "border-white/10 bg-[#0c120c]"
                  : "border-[#24473b] bg-[#013220]"
            }
          `}
        >
          <nav className="flex flex-col px-6 py-4 gap-4 text-sm">
            {["/", "/menu", "/contact", "/why-us"].map((path, i) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-2 ${
                    isActive
                      ? "text-[#d4af37] font-bold"
                      : "text-slate-300 hover:text-white"
                  }`
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
