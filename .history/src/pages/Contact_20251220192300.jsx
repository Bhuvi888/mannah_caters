import React, { useState, useEffect } from "react";
import {
  Phone,
  MessageSquare,
  MapPin,
  Mail,
  Clock,
  Instagram,
} from "lucide-react";

const WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycby_gTClTv04-nN5LU9ZXGKad38B8TzEFfw-nz08r3hfe06J9fnldWuKvtutwQyao3dM/exec";

const App = ({ companyName = "Mannah Caterers" }) => {
  const [loaded, setLoaded] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    eventDate: "",
    guestCount: "",
    eventType: "",
    notes: "",
  });

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = new FormData();

    // SIMPLE QUOTE
    payload.append("name", formData.name);
    payload.append("eventDate", formData.eventDate);
    payload.append("guestCount", formData.guestCount);
    payload.append("eventType", formData.eventType);
    payload.append("notes", formData.notes);

    try {
      await fetch(WEB_APP_URL, {
        method: "POST",
        mode: "no-cors",
        body: payload,
      });

      alert("Thank you! Your inquiry has been sent.");

      setFormData({
        name: "",
        eventDate: "",
        guestCount: "",
        eventType: "",
        notes: "",
      });
    } catch (err) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-950 to-green-950 overflow-x-hidden">
      {/* HERO + LEFT CONTENT REMAINS UNCHANGED */}

      {/* Right Column - Form */}
      <div
        className={`bg-green-900 border-2 border-yellow-400 rounded-2xl p-8 transform transition-all duration-1000 delay-500 ${loaded ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}
      >
        <h3 className="text-white text-2xl font-bold mb-6 flex items-center gap-2">
          Send us a Message
        </h3>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="text-white text-sm font-medium mb-2 block">
              Full Name
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-transparent border border-yellow-400 rounded-lg px-4 py-3 text-white"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-white text-sm font-medium mb-2 block">
                Event Date
              </label>
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-yellow-400 rounded-lg px-4 py-3 text-white"
              />
            </div>

            <div>
              <label className="text-white text-sm font-medium mb-2 block">
                Guest Count
              </label>
              <input
                name="guestCount"
                value={formData.guestCount}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-yellow-400 rounded-lg px-4 py-3 text-white"
              />
            </div>
          </div>

          <div>
            <label className="text-white text-sm font-medium mb-2 block">
              Event Type
            </label>
            <select
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              required
              className="w-full bg-transparent border border-yellow-400 rounded-lg px-4 py-3 text-white"
            >
              <option value="">Select an event type</option>
              <option>Wedding</option>
              <option>Corporate Event</option>
              <option>Birthday Party</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="text-white text-sm font-medium mb-2 block">
              Your Message
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={5}
              className="w-full bg-transparent border border-yellow-400 rounded-lg px-4 py-2 text-white"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-green-900 py-4 rounded-lg font-bold text-lg"
          >
            Send Inquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
