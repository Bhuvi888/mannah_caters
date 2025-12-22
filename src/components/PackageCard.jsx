import React from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

const PackageCard = ({ pkg, isOpen, onToggle, onCustomize }) => {
  const navigate = useNavigate();
  const { setCart } = useCart();

  const handleRequestQuote = (e) => {
    e.stopPropagation(); // prevent accordion toggle

    // Load package items into cart
    setCart(pkg.items || []);

    // Navigate to quote page
    navigate("/quote");
  };

  return (
    <div
      className={`group bg-[#022c1e] rounded-xl border overflow-hidden shadow-lg transition-all duration-300 ${
        isOpen
          ? "border-[#d4af37]/60 shadow-[#d4af37]/10 shadow-xl"
          : "border-[#24473b]"
      }`}
    >
      {/* Header */}
      <div
        onClick={onToggle}
        className={`flex flex-col md:flex-row items-start md:items-center justify-between p-6 cursor-pointer relative z-10 select-none transition-colors ${
          isOpen ? "bg-[#0a2e22]" : "hover:bg-white/5"
        }`}
      >
        {pkg.isPopular && (
          <div className="absolute top-0 right-0 bg-[#d4af37] text-[#013220] text-[10px] font-black tracking-wider uppercase px-3 py-1 rounded-bl-lg z-20">
            Most Popular
          </div>
        )}

        <div className="flex items-center gap-4">
          <div
            className={`p-3 bg-[#013220] rounded-full text-[#d4af37] border ${
              pkg.isPopular
                ? "border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                : "border-[#24473b]"
            }`}
          >
            <pkg.icon className="w-6 h-6 fill-current" />
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-2xl font-bold text-[#d4af37] group-hover:text-white transition-colors">
              {pkg.name}
            </h3>
            <p className="text-[#94a3b8] text-sm md:text-base pr-8">
              {pkg.description}
            </p>
          </div>
        </div>

        <ChevronDown
          size={30}
          className={`text-[#d4af37] mt-4 md:mt-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Body */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.35,
              ease: [0.4, 0, 0.2, 1], // material-like easing
            }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-8 pt-2 bg-[#0a2e22]/50">
              <div className="h-px w-full bg-[#24473b] mb-6"></div>

              {/* FEATURES GRID */}
              <div
                className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${
                  pkg.features.length > 4 ? "lg:grid-cols-5" : "lg:grid-cols-4"
                } gap-4 mb-8`}
              >
                {pkg.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex flex-col gap-2 p-4 bg-[#013220] rounded-lg border border-[#24473b]"
                  >
                    <span className="text-xs font-bold text-[#d4af37] uppercase tracking-wider">
                      {feature.label}
                    </span>
                    <span className="text-white font-medium text-lg">
                      {feature.value}
                    </span>
                    <span className="text-[#94a3b8] text-xs">
                      {feature.subtext}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* ACTIONS */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleRequestQuote}
                  className="flex-1 py-3 px-6 bg-[#d4af37] text-[#013220] font-bold rounded-lg hover:bg-[#f0c86b] transition-colors shadow-lg shadow-yellow-900/10"
                >
                  Request Custom Quote
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onCustomize();
                  }}
                  className="flex-1 py-3 px-6 border border-[#d4af37] text-[#d4af37] font-bold rounded-lg hover:bg-[#d4af37] hover:text-[#013220] transition-colors"
                >
                  Customize This Package
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PackageCard;
