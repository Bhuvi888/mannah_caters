import React from "react";
import { Utensils } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useCart } from "../context/CartContext";
import { MENU_ITEMS, CATEGORIES } from "../constants";

const SelectedMenu = () => {
  const navigate = useNavigate();
  const { cart } = useCart();

  // Convert cart IDs → menu items
  const selectedItems = MENU_ITEMS.filter((item) => cart.includes(item.id));

  // Group items by category
  const groupedItems = CATEGORIES.map((cat) => ({
    ...cat,
    items: selectedItems.filter((item) => item.category === cat.id),
  })).filter((group) => group.items.length > 0);

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
            onClick={() =>
              navigate("/menu", { state: { openTab: "customize" } })
            }
            className="text-[#94a3b8] hover:text-white text-sm underline transition-colors"
          >
            Edit Selection
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-6 font-sans">
          {/* Empty State */}
          {selectedItems.length === 0 && (
            <p className="text-[#94a3b8] text-sm italic text-center">
              No items selected yet
            </p>
          )}

          {/* Dynamic Categories */}
          {groupedItems.map((group) => (
            <div key={group.id}>
              <h4 className="text-[#d4af37] text-sm font-bold uppercase tracking-wider mb-3 pb-1 border-b border-[#d4af37]/20">
                {group.title}
              </h4>

              <ul className="flex flex-col gap-3">
                {group.items.map((item) => (
                  <li key={item.id} className="flex flex-col">
                    <span className="text-white font-medium">{item.name}</span>
                    <span className="text-xs text-[#94a3b8]">
                      {item.isVeg ? "Veg" : "Non-Veg"}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Total */}
          {selectedItems.length > 0 && (
            <div className="mt-4 pt-4 border-t border-[#d4af37]/30">
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#94a3b8]">Total Items</span>
                <span className="text-white font-bold text-lg">
                  {selectedItems.length}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectedMenu;
