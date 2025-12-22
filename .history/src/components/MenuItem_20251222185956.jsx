import React from "react";
import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MenuItem = ({ item, isSelected, onToggle, showPopular }) => {
  return (
    <motion.button
      type="button"
      onClick={() => onToggle(item.id)}
      layout
      initial={false}
      animate={{
        scale: isSelected ? 1.02 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className={`group relative flex gap-4 p-4 rounded-2xl border text-left transition-colors focus:outline-none focus:ring-2 focus:ring-[#d4af37]/40 ${
        isSelected
          ? "bg-[#052e22] border-[#d4af37]/60 shadow-[0_0_20px_rgba(212,175,55,0.05)]"
          : "bg-[#032219] border-[#1e3a30] hover:border-[#2f5c4c]"
      }`}
    >
      {showPopular && item.isPopular && (
        <div className="absolute top-2 left-2 z-10">
          <span className="bg-[#d4af37] text-[#013220] text-[10px] font-black px-2 py-[2px] rounded-full tracking-wide">
            ⭐ Popular
          </span>
        </div>
      )}
      
      {/* Image */}
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-xl overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url("${item.image}")` }}
          role="img"
          aria-label={item.name}
        />

        {/* Selection Indicator */}
        <div className="absolute top-2 right-2 z-10">
          <div
            className={`size-6 rounded-full flex items-center justify-center ${
              isSelected
                ? "bg-[#d4af37]"
                : "border-2 border-white/60 bg-black/20"
            }`}
          >
            <AnimatePresence>
              {isSelected && (
                <motion.div
                  key="check"
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 18,
                  }}
                >
                  <Check className="w-4 h-4 text-[#013220] stroke-[3]" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 py-1 min-w-0">
        <h4
          className={`text-base sm:text-lg font-bold truncate pr-2 transition-colors ${
            isSelected ? "text-white" : "text-[#f1f5f9]"
          }`}
        >
          {item.name}
        </h4>

        <p className="text-[#94a3b8] text-xs mt-2 leading-relaxed line-clamp-2">
          {item.description}
        </p>

        <div className="mt-auto pt-2">
          <span
            className={`inline-flex items-center px-2 py-[2px] rounded text-[10px] font-bold uppercase tracking-wider border ${
              item.isVeg
                ? "bg-[#1a4d2e]/40 border-[#1a4d2e] text-[#4ade80]"
                : "bg-[#451a1a]/40 border-[#451a1a] text-[#f87171]"
            }`}
          >
            {item.isVeg ? "Veg" : "Non-Veg"}
          </span>
        </div>
      </div>
    </motion.button>
  );
};

export default MenuItem;
