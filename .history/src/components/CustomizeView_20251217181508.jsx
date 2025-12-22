import React, { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { CATEGORIES, MENU_ITEMS } from "../constants";
import MenuItem from "./MenuItem";
import CartSidebar from "./CartSideBar";
const HEADER_OFFSET = 180;
const CustomizeView = ({ cart, guestCount, setGuestCount, toggleCartItem }) => {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]?.id);

  const selectedItems = MENU_ITEMS.filter((item) => cart.includes(item.id));

  // Smooth scroll
  const scrollToCategory = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - HEADER_OFFSET;

    setActiveCategory(id); // update immediately on click

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      let current = activeCategory;

      for (const cat of CATEGORIES) {
        const section = document.getElementById(cat.id);
        if (!section) continue;

        const rect = section.getBoundingClientRect();
        if (rect.top <= HEADER_OFFSET + 20 && rect.bottom > HEADER_OFFSET) {
          current = cat.id;
        }
      }

      if (current !== activeCategory) {
        setActiveCategory(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeCategory]);

  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full max-w-[1400px] mx-auto px-4 lg:px-0">
      {/* Desktop Category Sidebar */}
      <aside className="hidden lg:block w-[240px] flex-shrink-0">
        <div className="sticky top-[140px] bg-[#022c1e] rounded-2xl border border-[#24473b] p-2">
          <div className="px-4 py-3 mb-2 border-b border-[#24473b]/50">
            <h3 className="text-white font-bold text-sm tracking-wide">
              Menu Categories
            </h3>
          </div>

          <nav className="flex flex-col gap-1">
            {CATEGORIES.map((cat, idx) => {
              const isActive = idx === 0; // later → scroll spy

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
                    <ChevronRight className="w-4 h-4 text-[#d4af37]" />
                  )}
                </a>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Main Menu Content */}
      <main className="flex-1 flex flex-col gap-12 min-w-0">
        {CATEGORIES.map((cat) => {
          const items = MENU_ITEMS.filter((item) => item.category === cat.id);
          if (!items.length) return null;

          return (
            <section key={cat.id} id={cat.id} className="scroll-mt-[180px]">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-[#d4af37]">
                  {cat.title}
                </h3>
                <div className="h-px bg-[#24473b] flex-1" />
              </div>

              {/* Items Grid */}
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
            </section>
          );
        })}
      </main>

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
