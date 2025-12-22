import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import CombosView from "../components/CombosView";
import CustomizeView from "../components/CustomizeView";
import { useCart } from "../context/CartContext";

/* ----------------------------------
   Animation Variants
----------------------------------- */
const tabVariants = {
  initial: (direction) => ({
    opacity: 0,
    y: direction === "customize" ? 12 : -12,
  }),
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: (direction) => ({
    opacity: 0,
    y: direction === "customize" ? -12 : 12,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

const Menu = () => {
  const location = useLocation();

  const [activeTab, setActiveTab] = useState("combos");
  const [direction, setDirection] = useState("customize");

  const { cart, toggleCartItem, guestCount, setGuestCount } = useCart();

  /* ----------------------------------
     Handle router-triggered tab switch
  ----------------------------------- */
  useEffect(() => {
    if (location.state?.openTab === "customize") {
      setDirection("customize");
      setActiveTab("customize");
    }
  }, [location.state]);

  return (
    <div className="min-h-screen flex flex-col bg-[#02301f] overflow-x-hidden">
      <main className="flex-1 flex flex-col items-center pb-20 px-4 sm:px-10 lg:px-40 pt-6 sm:pt-10">
        <div className="w-full max-w-[1200px] flex flex-col gap-6 sm:gap-8">
          {/* ---------------- Tabs ---------------- */}
          <div
            className="
            sticky top-[56px] sm:top-[64px]
            z-40
            bg-[#013220]
            pt-3 pb-2
            border-b border-[#24473b]
          "
          >
            <div
              className="
              flex
              gap-6
              justify-start sm:justify-center
              overflow-x-auto
              scrollbar-hide
              px-2
            "
            >
              {/* Combos Tab */}
              <button
                onClick={() => {
                  setDirection("combos");
                  setActiveTab("combos");
                }}
                className={`
                  flex-shrink-0
                  flex flex-col items-center
                  border-b-[3px]
                  pb-2 sm:pb-3
                  px-4 sm:px-6
                  transition-all
                  ${
                    activeTab === "combos"
                      ? "border-[#d4af37] text-[#d4af37]"
                      : "border-transparent text-[#94a3b8] hover:text-white"
                  }
                `}
              >
                <span className="text-sm sm:text-lg font-bold tracking-[0.015em]">
                  Predefined Combos
                </span>
              </button>

              {/* Customize Tab */}
              <button
                onClick={() => {
                  setDirection("customize");
                  setActiveTab("customize");
                }}
                className={`
                  flex-shrink-0
                  flex flex-col items-center
                  border-b-[3px]
                  pb-2 sm:pb-3
                  px-4 sm:px-6
                  transition-all
                  ${
                    activeTab === "customize"
                      ? "border-[#d4af37] text-[#d4af37]"
                      : "border-transparent text-[#94a3b8] hover:text-white"
                  }
                `}
              >
                <span className="text-sm sm:text-lg font-bold tracking-[0.015em]">
                  Customize Your Own
                </span>
              </button>
            </div>
          </div>

          {/* ---------------- Animated Content ---------------- */}
          <div className="w-full">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeTab}
                custom={direction}
                variants={tabVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full"
              >
                {activeTab === "combos" ? (
                  <CombosView
                    onCustomize={() => {
                      setDirection("customize");
                      setActiveTab("customize");
                    }}
                  />
                ) : (
                  <CustomizeView
                    cart={cart}
                    guestCount={guestCount}
                    setGuestCount={setGuestCount}
                    toggleCartItem={toggleCartItem}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Menu;
