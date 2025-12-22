import React from "react";
import { ShoppingBag, X, ArrowRight, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CartSidebar = ({
  selectedItems,
  guestCount,
  setGuestCount,
  onRemoveItem,
  onPopularPicks,
  onUndoPopularPicks,
  hasPopularApplied,
  showPopular,
  onShowPopular,
  onHidePopular,
}) => {
  const navigate = useNavigate();
  const handlePopularPicks = () => {
    const popularItems = MENU_ITEMS.filter((item) => item.isPopular).map(
      (item) => item.id
    );

    popularItems.forEach((id) => {
      if (!cart.includes(id)) {
        toggleCartItem(id);
      }
    });
  };

  return (
    <div className="w-full lg:w-[360px] flex-shrink-0">
      <div className="lg:sticky lg:top-[140px] flex flex-col gap-6">
        {/* Main Cart Card */}
        <div className="bg-[#022c1e] rounded-3xl border border-[#24473b] p-5 sm:p-6 shadow-2xl relative overflow-hidden">
          {/* Gold top accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d4af37]/40 via-[#d4af37] to-[#d4af37]/40" />

          {/* Header */}
          <div className="flex items-center gap-3 mb-6 pt-2">
            <ShoppingBag className="w-5 h-5 text-[#d4af37]" />
            <h3 className="text-[#d4af37] font-bold text-lg sm:text-xl tracking-wide">
              Your Menu
            </h3>
          </div>

          {/* Selected Items */}
          <div className="flex flex-col gap-1 mb-6">
            {selectedItems.length === 0 ? (
              <div className="text-[#64748b] text-sm italic py-4">
                No items selected
              </div>
            ) : (
              <div className="max-h-[180px] sm:max-h-[240px] overflow-y-auto -mr-2 pr-2 flex flex-col gap-3 custom-scrollbar">
                {selectedItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-start gap-3 group"
                  >
                    <span className="text-white font-medium text-sm leading-tight pt-1">
                      {item.name}
                    </span>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-red-400 opacity-70 hover:opacity-100 transition p-1 rounded-lg hover:bg-red-500/10"
                    >
                      <X className="w-4 h-4" />
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

            <input
              type="number"
              min={1}
              value={guestCount}
              onChange={(e) => setGuestCount(parseInt(e.target.value) || 0)}
              className="w-full bg-[#011c12] border border-[#24473b] rounded-xl text-white px-4 py-3 text-sm focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none transition placeholder-[#475569]"
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
            className="w-full bg-[#d4af37] hover:bg-[#c29d4d] text-[#013220] py-4 rounded-full font-black text-sm uppercase tracking-wider shadow-lg shadow-yellow-900/20 transition-all active:scale-95 flex items-center justify-center gap-2"
            onClick={() => navigate("/quote")}
          >
            <span>Proceed to Quote</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Helper Card */}
        <div className="rounded-2xl border border-dashed border-[#24473b] p-5 sm:p-6 text-center bg-[#022c1e]/50">
          <p className="text-[#94a3b8] text-xs leading-relaxed flex items-center justify-center gap-2 flex-wrap">
            Not sure where to start?
            {!hasPopularApplied ? (
              <button
                onClick={onPopularPicks}
                className="text-[#d4af37] font-bold hover:underline"
              >
                ⭐ View popular menu picks
              </button>
            ) : (
              <button
                onClick={onUndoPopularPicks}
                className="text-red-400 font-bold hover:underline"
              >
                ↩ Undo popular picks
              </button>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
