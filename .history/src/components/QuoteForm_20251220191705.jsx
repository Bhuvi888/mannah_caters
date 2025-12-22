import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Calendar,
  PartyPopper,
  ChevronDown,
  Users,
  Send,
} from "lucide-react";

import { useCart } from "../context/CartContext";
import { MENU_ITEMS } from "../constants";

const WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycby_gTClTv04-nN5LU9ZXGKad38B8TzEFfw-nz08r3hfe06J9fnldWuKvtutwQyao3dM/exec";

const QuoteForm = () => {
  const { cart } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    eventType: "",
    guests: "",
    message: "",
  });

  // 🔥 Convert cart IDs → menu items
  const selectedItems = MENU_ITEMS.filter((item) => cart.includes(item.id));

  // 🔥 Convert items → readable string for Google Sheets
  const itemsString = selectedItems
    .map((item) => `${item.name} (${item.isVeg ? "Veg" : "Non-Veg"})`)
    .join(", ");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedItems.length === 0) {
      alert("Please select at least one menu item.");
      return;
    }

    const payload = new FormData();

    // 🔥 Identify as MENU QUOTE
    payload.append("type", "menu");
    payload.append("name", formData.name);
    payload.append("phone", formData.phone);
    payload.append("eventType", formData.eventType);
    payload.append("eventDate", formData.date);
    payload.append("guestCount", formData.guests);
    payload.append("items", itemsString);
    payload.append("notes", formData.message);

    try {
      await fetch(WEB_APP_URL, {
        method: "POST",
        mode: "no-cors", // REQUIRED for Apps Script
        body: payload,
      });

      alert("Thank you! Your inquiry has been sent.");

      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        eventType: "",
        guests: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex-1 order-1 lg:order-2">
      <div className="bg-[#022c1e] rounded-2xl border border-[#d4af37]/30 p-6 md:p-10 shadow-2xl">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Event Details</h2>
          <p className="text-[#94a3b8] text-sm">
            Please fill out the form below so we can verify availability and
            provide an accurate quote.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* 🔽 EVERYTHING BELOW IS UNCHANGED JSX */}
          {/* Your original JSX stays exactly the same */}

          {/* Row 1 */}
          {/* ... NO CHANGES MADE TO UI ... */}
        </form>
      </div>
    </div>
  );
};

export default QuoteForm;
