import React from "react";

const PackageCard = ({ pkg, isOpen, onToggle, onCustomize }) => {
  return (
    <div
      className={`group bg-[#022c1e] rounded-xl border overflow-hidden shadow-lg transition-all duration-300 ${
        isOpen
          ? "border-[#d4af37]/60 shadow-[#d4af37]/10 shadow-xl"
          : "border-[#24473b]"
      }`}
    >
      <div
        className={`flex flex-col md:flex-row items-start md:items-center justify-between p-6 cursor-pointer relative z-10 select-none transition-colors ${
          isOpen ? "bg-[#0a2e22]" : "hover:bg-white/5"
        }`}
        onClick={onToggle}
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

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className={`px-6 pb-8 pt-2 ${isOpen ? "bg-[#0a2e22]/50" : ""}`}>
          <div className="h-px w-full bg-[#24473b] mb-6"></div>
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${pkg.features.length > 4 ? "lg:grid-cols-5" : "lg:grid-cols-4"} gap-4 mb-8`}
          >
            {pkg.features.map((feature, idx) => (
              <div
                key={idx}
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
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 py-3 px-6 bg-[#d4af37] text-[#013220] font-bold rounded-lg hover:bg-[#f0c86b] transition-colors shadow-lg shadow-yellow-900/10">
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
      </div>
    </div>
  );
};

export default PackageCard;
