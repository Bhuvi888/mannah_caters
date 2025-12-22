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

  // Convert cart IDs → menu items
  const selectedItems = MENU_ITEMS.filter((item) => cart.includes(item.id));

  // Convert menu items → readable string
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

    // 🔥 IDENTIFY AS MENU QUOTE
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
        mode: "no-cors", // IMPORTANT for Apps Script
        body: payload,
      });

      alert("Menu inquiry submitted successfully!");

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
            Selected menu items will be sent along with this inquiry.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              className="w-full rounded-lg py-3 px-4 bg-[#011c12] border border-[#24473b] text-white"
              name="name"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={handleChange}
            />

            <input
              className="w-full rounded-lg py-3 px-4 bg-[#011c12] border border-[#24473b] text-white"
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Phone + Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              className="w-full rounded-lg py-3 px-4 bg-[#011c12] border border-[#24473b] text-white"
              name="phone"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onChange={handleChange}
            />

            <input
              className="w-full rounded-lg py-3 px-4 bg-[#011c12] border border-[#24473b] text-white"
              type="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          {/* Event Type + Guests */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <select
              className="w-full rounded-lg py-3 px-4 bg-[#011c12] border border-[#24473b] text-white"
              name="eventType"
              required
              value={formData.eventType}
              onChange={handleChange}
            >
              <option value="">Select Event Type</option>
              <option>Wedding</option>
              <option>Corporate Event</option>
              <option>Birthday Party</option>
              <option>Anniversary</option>
              <option>Other</option>
            </select>

            <input
              className="w-full rounded-lg py-3 px-4 bg-[#011c12] border border-[#24473b] text-white"
              type="number"
              name="guests"
              min="10"
              placeholder="Guest Count"
              required
              value={formData.guests}
              onChange={handleChange}
            />
          </div>

          {/* Notes */}
          <textarea
            className="w-full rounded-lg p-4 h-32 bg-[#011c12] border border-[#24473b] text-white"
            name="message"
            placeholder="Special instructions"
            value={formData.message}
            onChange={handleChange}
          />

          {/* Submit */}
          <button
            type="submit"
            className="bg-[#d4af37] text-[#013220] font-bold py-4 rounded-xl flex items-center justify-center gap-2"
          >
            Submit Menu Inquiry
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuoteForm;
