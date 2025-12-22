import React from "react";
import { Utensils } from "lucide-react";
import { useNavigate } from "react-router-dom";
const SelectedMenu = () => {
  return (
    <div className="w-full lg:w-1/3 flex-shrink-0 order-2 lg:order-1">
      <div className="bg-[#022c1e] rounded-2xl border border-[#d4af37]/40 overflow-hidden shadow-2xl sticky top-28">
        {/* Header */}
        <div className="p-6 bg-[#013220] border-b border-[#d4af37]/30 flex justify-between items-center">
          <h3 className="text-[#d4af37] font-bold text-xl flex items-center gap-2">
            <Utensils className="w-5 h-5" />
            Selected Menu
          </h3>
          <button
            className="text-[#94a3b8] hover:text-white text-sm underline transition-colors"
            onClick={() =>
              navigate("/menu", {
                state: { openTab: "customize" },
              })
            }
          >
            Edit Selection
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-6 font-sans">
          {/* Appetizers */}
          <div>
            <h4 className="text-[#d4af37] text-sm font-bold uppercase tracking-wider mb-3 pb-1 border-b border-[#d4af37]/20">
              Appetizers
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex flex-col">
                <span className="text-white font-medium">Paneer Tikka</span>
                <span className="text-xs text-[#94a3b8]">Veg</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white font-medium">
                  Chicken Malai Tikka
                </span>
                <span className="text-xs text-[#94a3b8]">Non-Veg</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white font-medium">Cocktail Samosa</span>
                <span className="text-xs text-[#94a3b8]">Veg</span>
              </li>
            </ul>
          </div>

          {/* Main Course */}
          <div>
            <h4 className="text-[#d4af37] text-sm font-bold uppercase tracking-wider mb-3 pb-1 border-b border-[#d4af37]/20">
              Main Course
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex flex-col">
                <span className="text-white font-medium">Butter Chicken</span>
                <span className="text-xs text-[#94a3b8]">Non-Veg</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white font-medium">Lamb Rogan Josh</span>
                <span className="text-xs text-[#94a3b8]">Non-Veg</span>
              </li>
            </ul>
          </div>

          {/* Breads & Rice */}
          <div>
            <h4 className="text-[#d4af37] text-sm font-bold uppercase tracking-wider mb-3 pb-1 border-b border-[#d4af37]/20">
              Breads & Rice
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex flex-col">
                <span className="text-white font-medium">
                  Hyderabadi Dum Biryani
                </span>
                <span className="text-xs text-[#94a3b8]">Veg</span>
              </li>
            </ul>
          </div>

          {/* Total */}
          <div className="mt-4 pt-4 border-t border-[#d4af37]/30">
            <div className="flex justify-between items-center text-sm">
              <span className="text-[#94a3b8]">Total Items</span>
              <span className="text-white font-bold text-lg">6</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedMenu;
