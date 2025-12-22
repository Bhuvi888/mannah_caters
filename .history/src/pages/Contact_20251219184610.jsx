import React, { useState, useEffect } from "react";
import {
  Phone,
  MessageSquare,
  MapPin,
  Mail,
  Clock,
  Instagram,
} from "lucide-react";

const App = ({ companyName = "Mannah Caterers" }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-950 to-green-950 overflow-x-hidden">
      {/* HERO */}
      <div
        className={`relative h-56 sm:h-72 md:h-96 lg:h-[500px] overflow-hidden transition-opacity duration-1000 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center md:hover:scale-110 transition-transform duration-[10s]"
          style={{
            backgroundImage:
              "url(https://media.istockphoto.com/id/1428412216/photo/a-male-chef-pouring-sauce-on-meal.jpg)",
            opacity: 0.3,
          }}
        />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-yellow-400 text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-gray-200 text-sm sm:text-lg max-w-2xl font-semibold">
            Ready to create unforgettable memories? Reach out to our expert team
            for bespoke catering solutions.
          </p>
        </div>
      </div>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT */}
          <div
            className={`transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-yellow-400 text-xs font-semibold tracking-widest mb-2">
              GET IN TOUCH
            </p>

            <h2 className="text-white text-2xl sm:text-4xl font-bold mb-4">
              Let’s Plan Your Perfect Event
            </h2>

            <p className="text-gray-300 mb-8 leading-relaxed">
              Whether it's a grand wedding, a corporate gala, or an intimate
              birthday party, Mannah Caterers brings culinary excellence to your
              table.
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="tel:+919884560607"
                className="bg-yellow-400 text-green-900 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg active:scale-95"
              >
                <Phone size={18} /> Call Now
              </a>

              <a
                href="https://wa.me/919884860607"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-yellow-400 text-yellow-400 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 active:scale-95"
              >
                <MessageSquare size={18} /> WhatsApp
              </a>
            </div>

            {/* CONTACT INFO */}
            <div className="space-y-4">
              {[
                {
                  icon: MapPin,
                  title: "Our Location",
                  text: "23/1 TS Gopal Nagar, Thiruvottiyur, Chennai – 600019",
                  link: "https://www.google.com/maps/search/?api=1&query=23/1+TS+Gopal+Nagar+Thiruvottiyur+Chennai+600019",
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  text: "mannahcaterers07@gmail.com",
                  link: "mailto:mannahcaterers07@gmail.com",
                },
                {
                  icon: Clock,
                  title: "Working Hours",
                  text: "Mon–Sat: 9 AM – 8 PM\nSun: By Appointment",
                },
              ].map((item, i) => {
                const Wrapper = item.link ? "a" : "div";
                return (
                  <Wrapper
                    key={i}
                    href={item.link}
                    target="_blank"
                    className="flex items-start gap-4 p-4 rounded-xl bg-green-900/30"
                  >
                    <div className="bg-yellow-400 p-3 rounded-full">
                      <item.icon size={20} className="text-green-900" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{item.title}</h3>
                      <p className="text-gray-300 whitespace-pre-line text-sm">
                        {item.text}
                      </p>
                    </div>
                  </Wrapper>
                );
              })}
            </div>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://www.instagram.com/mannah_caterers/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-300 rounded flex items-center justify-center"
              >
                <Instagram size={20} className="text-green-900" />
              </a>

              <a
                href="sms:9884560607"
                className="w-10 h-10 bg-green-400 rounded flex items-center justify-center"
              >
                <MessageSquare size={20} className="text-white" />
              </a>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div
            className={`bg-green-900 border-2 border-yellow-400 rounded-2xl p-6 sm:p-8 transition-all duration-700 ${
              loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-white text-xl font-bold mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-4">
              {[
                { label: "Full Name", type: "text", placeholder: "John Doe" },
                { label: "Event Date", type: "date" },
                { label: "Guest Count", type: "text", placeholder: "e.g. 150" },
              ].map((f, i) => (
                <div key={i}>
                  <label className="text-sm text-white block mb-1">
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    className="w-full bg-transparent border border-yellow-400 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
              ))}

              <textarea
                rows={4}
                placeholder="Tell us about your requirements..."
                className="w-full bg-transparent border border-yellow-400 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-yellow-400"
              />

              <button className="w-full bg-yellow-400 text-green-900 py-4 rounded-lg font-bold active:scale-95">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* MAP */}
      <section className="w-full h-64 sm:h-80">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps?q=Tiruvottiyur,+Chennai&output=embed"
          loading="lazy"
        />
      </section>

      {/* FOOTER */}
      <footer className="border-t border-green-800 py-6 text-center">
        <p className="text-yellow-400 text-sm">
          © 2023 {companyName}. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
