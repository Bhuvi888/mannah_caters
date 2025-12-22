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

  // Convert cart IDs → full menu items
  const selectedItems = MENU_ITEMS.filter((item) => cart.includes(item.id));

  // Convert items → readable string for backend
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

    const formDataToSend = new FormData();

    // 🔥 MENU QUOTE FLAG
    formDataToSend.append("type", "menu");

    // User details
    formDataToSend.append("name", formData.name);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("eventType", formData.eventType);
    formDataToSend.append("eventDate", formData.date);
    formDataToSend.append("guestCount", formData.guests);

    // Menu + notes
    formDataToSend.append("items", itemsString);
    formDataToSend.append("notes", formData.message);

    try {
      await fetch(WEB_APP_URL, {
        method: "POST",
        body: formDataToSend, // ❌ no headers
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
    <div className="flex-1">
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
          {/* Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-bold text-[#d4af37]">
                Full Name *
              </label>
              <input
                className="w-full mt-2 rounded-lg py-3 px-4 bg-[#011c12] border border-[#24473b] text-white"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-sm font-bold text-[#d4af37]">
                Email Address *
              </label>
              <input
                className="w-full mt-2 rounded-lg py-3 px-4 bg-[#011c12] border border-[#24473b] text-white"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Phone + Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-bold text-[#d4af37]">
                Phone Number *
              </label>
              <input
                className="w-full mt-2 rounded-lg py-3 px-4 bg-[#011c12] border border-[#24473b] text-white"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-sm font-bold text-[#d4af37]">
                Event Date *
              </label>
              <input
                className="w-full mt-2 rounded-lg py-3 px-4 bg-[#011c12] border border-[#24473b] text-white"
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Event Type + Guests */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-bold text-[#d4af37]">
                Event Type *
              </label>
              <select
                className="w-full mt-2 rounded-lg py-3 px-4 bg-[#011c12] border border-[#24473b] text-white"
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
            </div>

            <div>
              <label className="text-sm font-bold text-[#d4af37]">
                Guest Count *
              </label>
              <input
                className="w-full mt-2 rounded-lg py-3 px-4 bg-[#011c12] border border-[#24473b] text-white"
                type="number"
                name="guests"
                min="10"
                required
                value={formData.guests}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="text-sm font-bold text-[#d4af37]">
              Special Instructions / Message
            </label>
            <textarea
              className="w-full mt-2 rounded-lg p-4 h-28 bg-[#011c12] border border-[#24473b] text-white"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-4 bg-[#d4af37] text-[#013220] font-bold py-4 rounded-xl"
          >
            Submit Menu Inquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuoteForm;
