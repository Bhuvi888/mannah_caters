import React from "react";
import { CATEGORIES, MENU_ITEMS } from "../constants";
import MenuItem from "./MenuItem";
import CartSidebar from "./CartSideBar";

const CustomizeView = ({ cart, guestCount, setGuestCount, toggleCartItem }) => {
  const selectedItems = MENU_ITEMS.filter((item) => cart.includes(item.id));

  // Simple smooth scroll handler
  const scrollToCategory = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky header
      const headerOffset = 180;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full max-w-[1400px] mx-auto">
      {/* Navigation Sidebar */}
      <div className="hidden lg:block w-[240px] flex-shrink-0">
        <div className="sticky top-[140px] bg-[#022c1e] rounded-2xl border border-[#24473b] overflow-hidden p-2">
          <div className="px-4 py-3 mb-2 border-b border-[#24473b]/50">
            <h3 className="text-white font-bold text-base">Menu Categories</h3>
          </div>
          <nav className="flex flex-col gap-1">
            {CATEGORIES.map((cat, idx) => {
              const isActive = idx === 0; // In a real app, track scroll position or state
              return (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  onClick={(e) => scrollToCategory(e, cat.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                    isActive
                      ? "bg-[#24473b]/50 text-[#d4af37] font-bold"
                      : "text-[#94a3b8] hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="text-sm">{cat.label}</span>
                  {isActive && (
                    <span className="material-symbols-outlined text-base">
                      chevron_right
                    </span>
                  )}
                </a>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col gap-12 min-w-0">
        {CATEGORIES.map((cat) => {
          const items = MENU_ITEMS.filter((item) => item.category === cat.id);
          if (items.length === 0) return null;

          return (
            <div key={cat.id} id={cat.id} className="scroll-mt-[180px]">
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-2xl font-bold text-[#d4af37]">
                  {cat.title}
                </h3>
                <div className="h-px bg-[#24473b] flex-1"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {items.map((item) => (
                  <MenuItem
                    key={item.id}
                    item={item}
                    isSelected={cart.includes(item.id)}
                    onToggle={toggleCartItem}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Cart Sidebar */}
      <CartSidebar
        selectedItems={selectedItems}
        guestCount={guestCount}
        setGuestCount={setGuestCount}
        onRemoveItem={toggleCartItem}
      />
    </div>
  );
};

export default CustomizeView;
