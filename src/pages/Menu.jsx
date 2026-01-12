import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useSEO } from "../hooks/useSEO";

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

const SWIPE_THRESHOLD = 80;

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
  }, [location.state?.openTab]);
  useSEO({
    title: "Catering Menu & Custom Packages | Mannah Caterers Chennai",
    description:
      "Browse Mannah Caterers’ catering menu featuring biriyani, starters, desserts and live counters. Choose predefined packages or customize your own menu for weddings and events in Chennai.",
  });

  /* ----------------------------------
     Swipe Handler
  ----------------------------------- */
  const handleDragEnd = (_, info) => {
    const offsetX = info.offset.x;

    // Swipe Left → Customize
    if (offsetX < -SWIPE_THRESHOLD && activeTab === "combos") {
      setDirection("customize");
      setActiveTab("customize");
    }

    // Swipe Right → Combos
    if (offsetX > SWIPE_THRESHOLD && activeTab === "customize") {
      setDirection("combos");
      setActiveTab("combos");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#02301f] overflow-x-hidden">
      <main className="flex-1 flex flex-col items-center pb-20 px-4 sm:px-10 lg:px-40 pt-6 sm:pt-10">
        <div className="w-full max-w-300 flex flex-col gap-6 sm:gap-8">
          {/* ---------------- Tabs ---------------- */}
          <div
            className="
              sticky top-14 sm:top-16
              z-40 bg-[#013220]
              pt-4 sm:pt-3 pb-2
              border-b border-[#24473b]
            "
          >
            <div
              className="
                flex gap-6
                justify-start sm:justify-center
                overflow-x-auto scrollbar-hide
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
                  shrink-0
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
                <span className="text-sm sm:text-lg font-bold">
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
                  shrink-0
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
                <span className="text-sm sm:text-lg font-bold">
                  Customize Your Own
                </span>
              </button>
            </div>
          </div>

          {/* ---------------- Swipe + Animated Content ---------------- */}
          <div className="w-full touch-pan-y">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeTab}
                custom={direction}
                variants={tabVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={handleDragEnd}
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
