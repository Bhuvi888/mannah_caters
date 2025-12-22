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

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    eventType: "",
    guests: "",
    message: "",
  });
  const WEB_APP_URL = "PASTE_YOUR_WEB_APP_URL_HERE";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! Your inquiry has been sent.");
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
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-[#d4af37]">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative group">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94a3b8] group-focus-within:text-[#d4af37]" />
                <input
                  className="w-full rounded-lg py-3 pl-10 pr-4 bg-[#011c12] border border-[#24473b] text-white placeholder-[#94a3b8]/70 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]"
                  name="name"
                  placeholder="John Doe"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-[#d4af37]">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94a3b8] group-focus-within:text-[#d4af37]" />
                <input
                  className="w-full rounded-lg py-3 pl-10 pr-4 bg-[#011c12] border border-[#24473b] text-white placeholder-[#94a3b8]/70 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-[#d4af37]">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="relative group">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94a3b8] group-focus-within:text-[#d4af37]" />
                <input
                  className="w-full rounded-lg py-3 pl-10 pr-4 bg-[#011c12] border border-[#24473b] text-white placeholder-[#94a3b8]/70 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]"
                  name="phone"
                  placeholder="+91 98765 43210"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Date */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-[#d4af37]">
                Event Date <span className="text-red-500">*</span>
              </label>
              <div className="relative group">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94a3b8] group-focus-within:text-[#d4af37]" />
                <input
                  className="w-full rounded-lg py-3 pl-10 pr-4 bg-[#011c12] border border-[#24473b] text-white focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] [color-scheme:dark]"
                  name="date"
                  type="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Event Type */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-[#d4af37]">
                Event Type <span className="text-red-500">*</span>
              </label>
              <div className="relative group">
                <PartyPopper className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94a3b8] group-focus-within:text-[#d4af37]" />
                <select
                  className="w-full rounded-lg py-3 pl-10 pr-10 bg-[#011c12] border border-[#24473b] text-white focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] appearance-none"
                  name="eventType"
                  required
                  value={formData.eventType}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select Event Type
                  </option>
                  <option>Wedding</option>
                  <option>Corporate Event</option>
                  <option>Birthday Party</option>
                  <option>Anniversary</option>
                  <option>Other</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#d4af37]" />
              </div>
            </div>

            {/* Guests */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-[#d4af37]">
                Guest Count <span className="text-red-500">*</span>
              </label>
              <div className="relative group">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94a3b8] group-focus-within:text-[#d4af37]" />
                <input
                  className="w-full rounded-lg py-3 pl-10 pr-4 bg-[#011c12] border border-[#24473b] text-white placeholder-[#94a3b8]/70 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]"
                  name="guests"
                  type="number"
                  min="10"
                  placeholder="e.g. 150"
                  required
                  value={formData.guests}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-[#d4af37]">
              Special Instructions / Message
            </label>
            <textarea
              className="w-full rounded-lg p-4 h-32 resize-none bg-[#011c12] border border-[#24473b] text-white placeholder-[#94a3b8]/70 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]"
              name="message"
              placeholder="Dietary restrictions, timing requirements, etc."
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          {/* Submit */}
          <div className="pt-4 flex flex-col md:flex-row gap-6 items-center">
            <button
              type="submit"
              className="w-full md:w-auto flex-1 bg-[#d4af37] hover:bg-[#c29d4d] text-[#013220] font-bold text-lg py-4 px-8 rounded-xl shadow-lg shadow-yellow-900/20 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Submit Inquiry
              <Send className="w-5 h-5" />
            </button>

            <p className="text-xs text-[#94a3b8] text-center md:text-left max-w-xs">
              By submitting this form, you agree to our privacy policy. We will
              contact you within 24 hours.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuoteForm;
