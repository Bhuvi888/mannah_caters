import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import CombosView from "../components/CombosView";
import CustomizeView from "../components/CustomizeView";
import { useCart } from "../context/CartContext";

const Menu = () => {
  const location = useLocation();

  const [activeTab, setActiveTab] = useState("combos");

  const { cart, toggleCartItem, guestCount, setGuestCount } = useCart();

  // ✅ Open Customize tab when coming from Quote page
  useEffect(() => {
    if (location.state?.openTab === "customize") {
      setActiveTab("customize");
    }
  }, [location.state]);

  return (
    <div className="min-h-screen flex flex-col bg-[#02301f]">
      <main className="flex-1 flex flex-col items-center pb-20 px-4 sm:px-10 lg:px-40 pt-10">
        <div className="w-full max-w-[1200px] flex flex-col gap-8">
          {/* Tabs */}
          <div className="sticky top-[64px] z-40 bg-[#013220] pt-4 pb-2 border-b border-[#24473b]">
            <div className="flex justify-center gap-8">
              {/* Combos Tab */}
              <button
                onClick={() => setActiveTab("combos")}
                className={`flex flex-col items-center border-b-[3px] pb-3 px-6 transition-all ${
                  activeTab === "combos"
                    ? "border-[#d4af37] text-[#d4af37]"
                    : "border-transparent text-[#94a3b8] hover:text-white"
                }`}
              >
                <span className="text-lg font-bold tracking-[0.015em]">
                  Predefined Combos
                </span>
              </button>

              {/* Customize Tab */}
              <button
                onClick={() => setActiveTab("customize")}
                className={`flex flex-col items-center border-b-[3px] pb-3 px-6 transition-all ${
                  activeTab === "customize"
                    ? "border-[#d4af37] text-[#d4af37]"
                    : "border-transparent text-[#94a3b8] hover:text-white"
                }`}
              >
                <span className="text-lg font-bold tracking-[0.015em]">
                  Customize Your Own
                </span>
              </button>
            </div>
          </div>

          {/* View Content */}
          <div className="w-full">
            {activeTab === "combos" ? (
              <CombosView onCustomize={() => setActiveTab("customize")} />
            ) : (
              <CustomizeView
                cart={cart}
                guestCount={guestCount}
                setGuestCount={setGuestCount}
                toggleCartItem={toggleCartItem}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Menu;
