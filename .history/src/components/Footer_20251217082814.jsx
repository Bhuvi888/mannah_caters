import React from "react";

const Footer = ({ onNavigate }) => {
  const handleNav = (tab) => {
    onNavigate(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#002618] border-t border-[#24473b] pt-12 pb-8 px-10 mt-auto">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between gap-8 mb-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 text-white">
            <span className="material-symbols-outlined text-secondary-gold">
              restaurant_menu
            </span>
            <h2 className="text-lg font-bold">Mannah Caterers</h2>
          </div>
          <p className="text-slate-400 text-sm max-w-xs">
            Crafting culinary masterpieces for weddings, corporate events, and
            intimate gatherings since 1998.
          </p>
        </div>
        <div className="flex gap-12">
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Menu
            </h4>
            <button
              onClick={() => handleNav("combos")}
              className="text-left text-slate-400 hover:text-secondary-gold text-sm transition-colors"
            >
              Signature Packages
            </button>
            <button
              onClick={() => handleNav("customize")}
              className="text-left text-slate-400 hover:text-secondary-gold text-sm transition-colors"
            >
              Customize Your Own
            </button>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Contact
            </h4>
            <a
              href="#"
              className="text-slate-400 hover:text-secondary-gold text-sm transition-colors"
            >
              Enquiry
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-secondary-gold text-sm transition-colors"
            >
              Locations
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-secondary-gold text-sm transition-colors"
            >
              Support
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto border-t border-[#24473b] pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
        <p>© 2023 Mannah Caterers. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
