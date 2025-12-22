import React from "react";

const CartSidebar = ({
  selectedItems,
  guestCount,
  setGuestCount,
  onRemoveItem,
}) => {
  return (
    <div className="w-full lg:w-[360px] flex-shrink-0">
      <div className="sticky top-[140px] flex flex-col gap-6">
        {/* Main Cart Card */}
        <div className="bg-[#022c1e] rounded-3xl border border-[#24473b] p-6 shadow-2xl relative overflow-hidden">
          {/* Gold top border accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d4af37]/40 via-[#d4af37] to-[#d4af37]/40"></div>

          <div className="flex items-center gap-3 mb-8 pt-2">
            <span className="material-symbols-outlined text-[#d4af37] filled">
              shopping_bag
            </span>
            <h3 className="text-[#d4af37] font-bold text-xl tracking-wide">
              Your Menu
            </h3>
          </div>

          {/* Selected Items List */}
          <div className="flex flex-col gap-1 mb-8">
            {selectedItems.length === 0 ? (
              <div className="text-[#64748b] text-sm italic py-4">
                No items selected
              </div>
            ) : (
              <div className="max-h-[240px] overflow-y-auto custom-scrollbar -mr-2 pr-2 flex flex-col gap-3">
                {selectedItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-start group"
                  >
                    <span className="text-white font-medium text-sm leading-tight pt-1">
                      {item.name}
                    </span>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-[#ef4444] opacity-60 hover:opacity-100 transition-opacity p-1"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        close
                      </span>
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-4 pt-4 border-t border-[#24473b]">
              <p className="text-[#94a3b8] text-xs italic">
                Add more items to unlock package discounts
              </p>
            </div>
          </div>

          {/* Guest Count */}
          <div className="mb-6">
            <label className="block text-[#94a3b8] text-[10px] font-bold uppercase tracking-widest mb-2">
              Guest Count
            </label>
            <div className="relative">
              <input
                className="w-full bg-[#011c12] border border-[#24473b] rounded-xl text-white px-4 py-3 text-sm focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none transition-all placeholder-[#475569]"
                type="number"
                min={1}
                value={guestCount}
                onChange={(e) => setGuestCount(parseInt(e.target.value) || 0)}
              />
            </div>
          </div>

          {/* Summary Row */}
          <div className="flex justify-between items-center mb-6">
            <span className="text-[#cbd5e1] text-sm font-medium">
              Items Selected:
            </span>
            <span className="text-white font-bold text-xl">
              {selectedItems.length}
            </span>
          </div>

          {/* CTA Button */}
          <button className="w-full bg-[#d4af37] hover:bg-[#c29d4d] text-[#013220] py-4 rounded-full font-black text-sm uppercase tracking-wider shadow-lg shadow-yellow-900/20 transition-all transform hover:translate-y-[-2px] flex items-center justify-center gap-2">
            <span>Proceed to Quote</span>
            <span className="material-symbols-outlined text-lg">
              arrow_forward
            </span>
          </button>
        </div>

        {/* Helper Card */}
        <div className="rounded-2xl border border-dashed border-[#24473b] p-6 text-center bg-[#022c1e]/50">
          <p className="text-[#94a3b8] text-xs leading-relaxed">
            Need help with portions?{" "}
            <button className="text-[#d4af37] font-bold hover:underline">
              Chat with a chef
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
