import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  MessageSquare,
  MapPin,
  Mail,
  Clock,
  Instagram,
  Menu,
  X,
} from "lucide-react";

const WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycby_gTClTv04-nN5LU9ZXGKad38B8TzEFfw-nz08r3hfe06J9fnldWuKvtutwQyao3dM/exec";

const App = ({ companyName = "Mannah Caterers" }) => {
  const [loaded, setLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
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
    payload.append("name", formData.name);
    payload.append("phone", formData.phone);
    payload.append("eventDate", formData.eventDate);
    payload.append("guestCount", formData.guestCount);
    payload.append("eventType", formData.eventType);
    payload.append("notes", formData.notes);

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
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-950 to-green-950 overflow-x-hidden">
      {/* Navigation */}

      {/* Hero Section */}
      {/* Added animate-fade-in-up class for entrance */}
      <div
        className={`relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] ease-in-out hover:scale-110"
          style={{
            backgroundImage:
              "url(https://media.istockphoto.com/id/1428412216/photo/a-male-chef-pouring-sauce-on-meal.jpg?s=612x612&w=0&k=20&c=8U3mrgWsuB7pB8axtGj89MXRkHDKodEli9F6wKgPT4A=)",
            opacity: 0.3,
          }}
        ></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 animate-fade-in-up">
          <h1 className="text-yellow-400 text-6xl font-bold mb-4 drop-shadow-lg hover:tracking-wide transition-all duration-500 cursor-default">
            Contact Us
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl font-bold drop-shadow-md animate-fade-in-up-delay">
            Ready to create unforgettable memories? Reach out to our expert team
            for bespoke catering solutions.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Left Column */}
          <div
            className={`transform transition-all duration-1000 delay-300 ${loaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
          >
            <div className="mb-8 group">
              <p className="text-yellow-400 text-sm font-semibold mb-2 uppercase tracking-wider group-hover:tracking-[0.2em] transition-all duration-300">
                GET IN TOUCH
              </p>
              <h2 className="text-white text-4xl font-bold mb-4 group-hover:text-yellow-100 transition-colors">
                Let's Plan Your Perfect Event
              </h2>
              <p className="text-gray-300 leading-relaxed hover:text-white transition-colors duration-300">
                Whether it's a grand wedding, a corporate gala, or an intimate
                birthday party, Mannah Caterers brings culinary excellence to
                your table. Contact us today to discuss your vision.
              </p>
            </div>

            <div className="flex gap-4 mb-12">
              {/* CALL BUTTON */}
              <a
                href="tel:+919884560607"
                className="flex-1 bg-yellow-400 text-green-900 px-6 py-4 rounded-lg font-semibold shadow-lg transition-all duration-300 hover:bg-yellow-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(250,204,21,0.5)] active:scale-95 flex items-center justify-center gap-2 group"
              >
                <Phone
                  size={20}
                  className="group-hover:animate-bounce-subtle"
                />
                Call Now
              </a>

              {/* WHATSAPP BUTTON */}
              <a
                href="https://wa.me/+919884860607"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-transparent border-2 border-yellow-400 text-yellow-400 px-6 py-4 rounded-lg font-semibold shadow-lg transition-all duration-300 hover:bg-yellow-400 hover:text-green-900 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(250,204,21,0.5)] active:scale-95 flex items-center justify-center gap-2 group"
              >
                <MessageSquare
                  size={20}
                  className="group-hover:animate-pulse"
                />
                WhatsApp Now
              </a>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              {[
                {
                  icon: MapPin,
                  title: "Our Location",
                  text: "23/1 TS Gopal Nagar, Thiruvottiyur, Chennai – 600019",
                  action:
                    "https://www.google.com/maps/search/?api=1&query=23/1+TS+Gopal+Nagar+Thiruvottiyur+Chennai+600019",
                  hint: "Open in Google Maps",
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  text: "mannahcaterers07@gmail.com",
                  action: "mailto:mannahcaterers07@gmail.com",
                  hint: "Send us an email",
                },
                {
                  icon: Clock,
                  title: "Working Hours",
                  text: "Mon – Sat: 9:00 AM – 8:00 PM\nSun: By Appointment",
                  action: null,
                  hint: null,
                },
              ].map((item, i) => {
                const Wrapper = item.action ? "a" : "div";

                return (
                  <Wrapper
                    key={i}
                    href={item.action || undefined}
                    target={
                      item.action?.startsWith("http") ? "_blank" : undefined
                    }
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-xl group
                   hover:bg-green-900/30 transition-all duration-300
                   active:scale-[0.98]"
                  >
                    {/* Icon */}
                    <div
                      className="bg-yellow-400 p-3 rounded-full
                        transition-all duration-300
                        group-hover:scale-110 group-hover:rotate-6
                        shadow-md group-hover:shadow-yellow-400/50"
                    >
                      <item.icon size={22} className="text-green-900" />
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-lg group-hover:text-yellow-400 transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-gray-300 whitespace-pre-line leading-relaxed group-hover:text-white">
                        {item.text}
                      </p>

                      {item.hint && (
                        <p className="mt-1 text-xs text-yellow-400/80 opacity-0 group-hover:opacity-100 transition-opacity">
                          {item.hint} →
                        </p>
                      )}
                    </div>
                  </Wrapper>
                );
              })}
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-8 flex-wrap">
              <a
                href="https://www.instagram.com/mannah_caterers/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 bg-pink-300 rounded flex items-center justify-center cursor-pointer shadow-md transition-all duration-300 hover:scale-125 hover:-translate-y-1 hover:rotate-6 hover:shadow-[0_0_15px_rgba(249,168,212,0.8)]">
                  <Instagram size={20} className="text-green-900" />
                </div>
              </a>

              <a href="sms:9884560607">
                <div className="w-10 h-10 bg-green-400 rounded flex items-center justify-center cursor-pointer shadow-md transition-all duration-300 hover:scale-125 hover:-translate-y-1 hover:-rotate-6 hover:shadow-[0_0_15px_rgba(74,222,128,0.8)]">
                  <MessageSquare size={20} className="text-white" />
                </div>
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div
            className={`bg-green-900 border-2 border-yellow-400 rounded-2xl p-8 transform transition-all duration-1000 delay-500 hover:shadow-[0_0_30px_rgba(250,204,21,0.15)] ${loaded ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}
          >
            <h3 className="text-white text-2xl font-bold mb-6 flex items-center gap-2">
              Send us a Message
              <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
            </h3>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="group">
                  <label className="text-white text-sm font-medium mb-2 block group-hover:text-yellow-400 transition-colors">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border border-yellow-400 rounded-lg px-4 py-3 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                  />
                </div>

                {/* Phone Number */}
                <div className="group">
                  <label className="text-white text-sm font-medium mb-2 block group-hover:text-yellow-400 transition-colors">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border border-yellow-400 rounded-lg px-4 py-3 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="group">
                  <label className="text-white text-sm font-medium mb-2 block group-hover:text-yellow-400 transition-colors">
                    Event Date
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-yellow-400 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 focus:scale-[1.02] focus:bg-green-800/50 focus:shadow-lg hover:border-yellow-300"
                  />
                </div>
                <div className="group">
                  <label className="text-white text-sm font-medium mb-2 block group-hover:text-yellow-400 transition-colors">
                    Guest Count
                  </label>
                  <input
                    type="text"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleChange}
                    placeholder="e.g. 150"
                    className="w-full bg-transparent border border-yellow-400 rounded-lg px-4 py-3 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 focus:scale-[1.02] focus:bg-green-800/50 focus:shadow-lg hover:border-yellow-300"
                  />
                </div>
              </div>

              <div className="group">
                <label className="text-white text-sm font-medium mb-2 block group-hover:text-yellow-400 transition-colors">
                  Event Type
                </label>
                <div className="relative">
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-yellow-400 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 appearance-none transition-all duration-300 focus:scale-[1.02] focus:bg-green-800/50 focus:shadow-lg hover:border-yellow-300 cursor-pointer"
                  >
                    <option>Select an event type</option>
                    <option>Wedding</option>
                    <option>Corporate Event</option>
                    <option>Birthday Party</option>
                    <option>Other</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-yellow-400">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="group">
                <label className="text-white text-sm font-medium mb-2 block group-hover:text-yellow-400 transition-colors">
                  Your Message
                </label>
                <textarea
                  rows={5}
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Tell us about your dietary requirements, or any special requests..."
                  className="w-full bg-transparent border border-yellow-400 rounded-lg px-4 py-2 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none transition-all duration-300 focus:scale-[1.02] focus:bg-green-800/50 focus:shadow-lg hover:border-yellow-300"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-green-900 py-4 rounded-lg font-bold text-lg shadow-[0_0_15px_rgba(244,208,0,0.4)] transition-all duration-300 ease-out hover:bg-yellow-300 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-[0_15px_30px_-5px_rgba(244,208,0,0.6)] active:scale-95 active:shadow-inner"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="w-full h-64 sm:h-80 md:h-[360px] grayscale hover:grayscale-0 transition-all duration-700 ease-in-out relative overflow-hidden group">
        <div className="absolute inset-0 bg-yellow-400/10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <iframe
          title="map"
          className="w-full h-full"
          src="https://www.google.com/maps?q=Tiruvottiyur,+Chennai,+Tamil+Nadu&output=embed"
          loading="lazy"
        />
      </section>

      {/* Footer */}
      {/* <footer className="bg-green-950 border-t border-green-800 py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-2 mb-6 flex-wrap group cursor-default">
            <span className="text-yellow-400 text-xl font-bold group-hover:rotate-180 transition-transform duration-700">✕</span>
            <span className="text-white text-xl font-bold group-hover:text-yellow-400 transition-colors duration-300">{companyName}</span>
          </div>
          
          <div className="flex items-center justify-center gap-8 mb-6 text-sm flex-wrap">
            {['Home', 'Menu', 'Contact'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-gray-400 hover:text-yellow-400 transition-all duration-300 font-bold hover:scale-110 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div> */}
      <footer>
        <div className="border-t border-green-800 pt-6 pb-6">
          <p className="text-center text-yellow-400 hover:text-yellow-200 transition-colors cursor-default">
            © {new Date().getFullYear()} Mannah Caterers. Designed with
            elegance.
          </p>
        </div>
      </footer>
      {/* <footer className="border-t border-[#d4af37]/10"/> */}
    </div>
  );
};

export default App;
