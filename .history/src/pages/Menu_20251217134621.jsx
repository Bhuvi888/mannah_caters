import React, { useState } from "react";
import CombosView from "../components/CombosView";
import CustomizeView from "../components/CustomizeView";

const Menu = () => {
  const [activeTab, setActiveTab] = useState("combos");
  const [cart, setCart] = useState(["4", "6"]); // Pre-select some items for demo
  const [guestCount, setGuestCount] = useState(100);

  const toggleCartItem = (id) => {
    setCart((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col items-center pb-20 px-4 sm:px-10 lg:px-40 pt-10 bg-#02301f]">
        <div className="w-full max-w-[1200px] flex flex-col gap-8">
          {/* Tabs */}
          <div className="sticky top-[64px] z-40 bg-[#013220] pt-4 pb-2 border-b border-[#24473b]">
            <div className="flex justify-center gap-8">
              <button
                className={`flex flex-col items-center justify-center border-b-[3px] pb-3 px-6 transition-all cursor-pointer ${
                  activeTab === "combos"
                    ? "border-[#d4af37] text-[#d4af37]"
                    : "border-transparent text-[#94a3b8] hover:text-white"
                }`}
                onClick={() => setActiveTab("combos")}
              >
                <p className="text-lg font-bold leading-normal tracking-[0.015em]">
                  Predefined Combos
                </p>
              </button>
              <button
                className={`flex flex-col items-center justify-center border-b-[3px] pb-3 px-6 transition-all cursor-pointer ${
                  activeTab === "customize"
                    ? "border-[#d4af37] text-[#d4af37]"
                    : "border-transparent text-[#94a3b8] hover:text-white"
                }`}
                onClick={() => setActiveTab("customize")}
              >
                <p className="text-lg font-bold leading-normal tracking-[0.015em]">
                  Customize Your Own
                </p>
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
