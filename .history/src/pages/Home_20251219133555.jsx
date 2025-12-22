import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="bg-[#063826] text-white min-h-screen font-sans">
      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-10">
        <div
          className="relative min-h-[460px] rounded-2xl overflow-hidden flex items-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(53,3,94,0.45), rgba(140,143,64,0.55)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDMRPc-kVlJB6ECB3wNkGq2zEXLknq2czlgIr2156k1dYCj5yRXY0uvLCTIRw_sna_hwstZ2gB0GRC3tQfFFTiQAhfqFlDtoMH2OCwHLQXMfrLec7LjPatLLTvNkQ7HxvxJV560-VD5brhv3tVXKrS4glxmWgLryF_6NzrQpLdIyO2cG_6gfjIvKVDMNv8QZjRCdCXpXFb2cRPngCRQ-pLNoj1-Gov3Q-FSKxS6tHlJwUfg8WOcHBZE6hYKmBcyRL1M1oLOiZJYLc4z')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 max-w-2xl mx-auto px-8 text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-[#facc26] animate-[fadeUp_0.9s_ease-out_forwards]">
              Exquisite Catering for <br /> Unforgettable Moments
            </h1>

            <p
              className="mt-4 text-sm md:text-base text-[#d6efe6] animate-[fadeUp_0.9s_ease-out_forwards]"
              style={{ animationDelay: "0.25s" }}
            >
              Experience culinary excellence and impeccable service tailored to
              your special day.
            </p>

            <div
              className="mt-8 flex justify-center gap-6 flex-wrap animate-[fadeUp_0.9s_ease-out_forwards]"
              style={{ animationDelay: "0.45s" }}
            >
              <button
                onClick={() => navigate("/menu")}
                className="bg-[#facc15] text-green-900 px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(250,204,21,0.6)]"
              >
                View Menus
              </button>

              <button
                onClick={() => navigate("/quote")}
                className="bg-[#facc15]/60 border border-[#facc15] px-8 py-4 rounded-xl font-semibold backdrop-blur transition-all duration-300 hover:bg-[#facc15] hover:scale-105 hover:shadow-[0_0_25px_rgba(250,204,21,0.5)]"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <span className="text-xl font-bold uppercase tracking-widest text-[#e0b84c]">
            Our Expertise
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-serif">
            Curated Culinary Services
          </h2>
          <div className="mx-auto mt-6 h-[1px] w-24 bg-[#e0b84c]/50" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Birthday Feasts",
              img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
            },
            {
              title: "Dream Weddings",
              img: "https://images.unsplash.com/photo-1529636798458-92182e662485",
            },
            {
              title: "Corporate Galas",
              img: "https://images.unsplash.com/photo-1555244162-803834f70033",
            },
            {
              title: "Private Dining",
              img: "https://images.unsplash.com/photo-1544025162-d76694265947",
            },
          ].map((item, i) => (
            <div
              key={item.title}
              className="group rounded-2xl bg-[#0b4a34] shadow-lg overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(224,184,76,0.35)] animate-[fadeUp_0.9s_ease-out_forwards]"
              style={{ animationDelay: `${0.15 * i}s` }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#e0b84c]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[#cfe9df]">
                  Premium catering designed for unforgettable experiences.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY ================= */}
      <section className="bg-[#053b2a] py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#e0b84c] text-xl md:text-2xl font-semibold tracking-widest mb-4">
            WHY CHOOSE US
          </p>

          <h2 className="text-2xl md:text-3xl font-bold max-w-3xl mx-auto">
            We deliver an unparalleled catering experience by focusing on what
            matters most.
          </h2>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Bespoke Menus",
              "Impeccable Service",
              "Locally Sourced Ingredients",
              "100% Halal Certified",
              "No Artificial Colours",
              "Saffron Enhanced Dishes",
            ].map((title, i) => (
              <div
                key={title}
                className="bg-[#0b4a34] rounded-2xl p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(224,184,76,0.35)] animate-[fadeUp_0.9s_ease-out_forwards]"
                style={{ animationDelay: `${0.1 * i}s` }}
              >
                <h3 className="text-lg font-semibold text-[#e0b84c] mb-3">
                  {title}
                </h3>
                <p className="text-sm text-[#cfe9df]">
                  Crafted with care to meet cultural, dietary, and quality
                  standards.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="py-20 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#facc15]">
          Ready to plan your event?
        </h2>
        <p className="mt-4 text-[#d6efe6]">
          Reach out today and let’s create something unforgettable.
        </p>

        <button
          onClick={() => navigate("/quote")}
          className="mt-8 bg-[#facc15] text-green-900 px-10 py-4 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(250,204,21,0.6)]"
        >
          Get a Quote
        </button>
      </section>
    </main>
  );
}
