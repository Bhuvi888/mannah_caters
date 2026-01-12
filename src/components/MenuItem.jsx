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
      animate={{ scale: isSelected ? 1.015 : 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={`group relative flex gap-3 p-3 rounded-xl border text-left transition-colors focus:outline-none focus:ring-2 focus:ring-[#d4af37]/30 ${
        isSelected
          ? "bg-[#052e22] border-[#d4af37]/50"
          : "bg-[#032219] border-[#1e3a30] hover:border-[#2f5c4c]"
      }`}
    >
      {/* Popular Tag */}
      {showPopular && item.isPopular && (
        <div className="absolute top-2 right-2 z-10">
          <span className="bg-[#d4af37]/90 text-[#013220] text-[9px] font-bold px-2 py-[2px] rounded-full tracking-wide">
            Popular
          </span>
        </div>
      )}

      {/* Image */}
      <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
          style={{ backgroundImage: `url("${item.image}")` }}
          role="img"
          aria-label={item.name}
        />

        {/* Selection Indicator */}
        <div className="absolute top-1.5 right-1.5 z-10">
          <div
            className={`size-5 rounded-full flex items-center justify-center ${
              isSelected ? "bg-[#d4af37]" : "border border-white/50 bg-black/20"
            }`}
          >
            <AnimatePresence>
              {isSelected && (
                <motion.div
                  key="check"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <Check className="w-3.5 h-3.5 text-[#013220] stroke-[3]" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 min-w-0">
        <h4
          className={`text-sm sm:text-base font-semibold  ${
            isSelected ? "text-white" : "text-[#f1f5f9]"
          }`}
        >
          {item.name}
        </h4>

        <p className="text-[#94a3b8] text-[11px] mt-1 line-clamp-1">
          {item.description}
        </p>
      </div>
    </motion.button>
  );
};

export default MenuItem;
