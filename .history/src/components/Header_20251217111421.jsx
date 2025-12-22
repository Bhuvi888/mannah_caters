import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#24473b] bg-[#013220]/95 backdrop-blur-md px-4 sm:px-10 py-3 shadow-lg">
      <div className="flex items-center gap-4 text-white">
        <div className="size-8 text-secondary-gold">
          <span className="material-symbols-outlined text-3xl">
            restaurant_menu
          </span>
        </div>
        <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">
          Mannah Caterers
        </h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9 hidden md:flex">
          <a
            className="text-slate-300 hover:text-white text-sm font-medium leading-normal transition-colors"
            href="#"
          >
            Home
          </a>
          <a
            className="text-secondary-gold text-sm font-bold leading-normal relative after:content-[''] after:absolute after:bottom-[-20px] after:left-0 after:w-full after:h-[2px] after:bg-secondary-gold"
            href="#"
          >
            Menu
          </a>
          <a
            className="text-slate-300 hover:text-white text-sm font-medium leading-normal transition-colors"
            href="#"
          >
            Contact
          </a>
          <a
            className="text-slate-300 hover:text-white text-sm font-medium leading-normal transition-colors"
            href="#"
          >
            Why Us
          </a>
        </div>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#d4af37] hover:bg-[#c29d4d] transition-colors text-[#013220] text-sm font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Enquire Now</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
