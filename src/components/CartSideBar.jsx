import React from "react";
import { ShoppingBag, X, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CartSidebar = ({
  selectedItems,
  guestCount,
  setGuestCount,
  onRemoveItem,
  showPopular,
  onShowPopular,
  onHidePopular,
}) => {
  const navigate = useNavigate();

  return (
    <aside className="hidden lg:block w-[360px] shrink-0">
      {/* ✅ SINGLE sticky wrapper */}
      <div className="sticky top-[120px] flex flex-col gap-6">
        {/* Main Cart Card */}
        <div className="bg-[#022c1e] rounded-3xl border border-[#24473b] p-5 sm:p-6 shadow-2xl relative">
          {/* Gold accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-[#d4af37]/40 via-[#d4af37] to-[#d4af37]/40" />

          {/* Header */}
          <div className="flex items-center gap-3 mb-6 pt-2">
            <ShoppingBag className="w-5 h-5 text-[#d4af37]" />
            <h3 className="text-[#d4af37] font-bold text-lg tracking-wide">
              Your Menu
            </h3>
          </div>

          {/* Selected Items */}
          {selectedItems.length === 0 ? (
            <div className="text-[#64748b] text-sm italic py-6">
              No items selected yet
            </div>
          ) : (
            <div className="max-h-[260px] overflow-y-auto pr-2 flex flex-col gap-3 custom-scrollbar mb-6">
              {selectedItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-start gap-3"
                >
                  <span className="text-white font-medium text-sm leading-tight">
                    {item.name}
                  </span>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-red-400 hover:bg-red-500/10 p-1 rounded-lg"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Guest Count */}
          <div className="mb-6">
            <label className="block text-[#94a3b8] text-[10px] font-bold uppercase tracking-widest mb-2">
              Guest Count
            </label>
            <input
              type="number"
              min={1}
              value={guestCount}
              onChange={(e) => setGuestCount(Number(e.target.value) || 0)}
              className="w-full bg-[#011c12] border border-[#24473b] rounded-xl text-white px-4 py-3 text-sm focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none"
            />
          </div>

          {/* Summary */}
          <div className="flex justify-between items-center mb-6">
            <span className="text-[#cbd5e1] text-sm font-medium">
              Items Selected
            </span>
            <span className="text-white font-bold text-xl">
              {selectedItems.length}
            </span>
          </div>

          {/* CTA */}
          <button
            onClick={() => navigate("/quote")}
            className="w-full bg-[#d4af37] hover:bg-[#c29d4d] text-[#013220] py-4 rounded-full font-black text-sm uppercase tracking-wider shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            Proceed to Quote
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Helper Card */}
        <div className="rounded-2xl border border-dashed border-[#24473b] p-5 text-center bg-[#022c1e]/50">
          <p className="text-[#94a3b8] text-xs flex items-center justify-center gap-2 flex-wrap">
            Need inspiration?
            {!showPopular ? (
              <button
                onClick={onShowPopular}
                className="text-[#d4af37] font-bold hover:underline"
              >
                ⭐ View popular picks
              </button>
            ) : (
              <button
                onClick={onHidePopular}
                className="text-red-400 font-bold hover:underline"
              >
                ↩ Hide popular picks
              </button>
            )}
          </p>
        </div>
      </div>
    </aside>
  );
};

export default CartSidebar;
