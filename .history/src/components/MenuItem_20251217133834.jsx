import React from "react";

const MenuItem = ({ item, isSelected, onToggle }) => {
  return (
    <div
      onClick={() => onToggle(item.id)}
      className={`group cursor-pointer relative flex gap-4 p-4 rounded-2xl border transition-all duration-300 ${
        isSelected
          ? "bg-[#052e22] border-[#d4af37]/60 shadow-[0_0_20px_rgba(212,175,55,0.05)]"
          : "bg-[#032219] border-[#1e3a30] hover:border-[#2f5c4c]"
      }`}
    >
      {/* Image Container */}
      <div className="relative w-28 h-28 shrink-0 rounded-xl overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url("${item.image}")` }}
          role="img"
          aria-label={item.name}
        />
        {/* Selection Indicator Overlay */}
        <div className="absolute top-2 right-2 z-10">
          <div
            className={`size-6 rounded-full flex items-center justify-center transition-all duration-300 ${
              isSelected
                ? "bg-[#d4af37] border-[#d4af37] scale-100"
                : "border-2 border-white/60 bg-black/20 scale-90 group-hover:scale-100"
            }`}
          >
            {isSelected && (
              <span className="material-symbols-outlined text-[#013220] text-sm font-bold">
                check
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 py-1 min-w-0">
        <div className="flex justify-between items-start">
          <h4
            className={`text-lg font-bold truncate pr-2 transition-colors ${
              isSelected ? "text-white" : "text-[#f1f5f9]"
            }`}
          >
            {item.name}
          </h4>
        </div>

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
    </div>
  );
};

export default MenuItem;
