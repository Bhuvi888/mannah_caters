import React from "react";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navigate = useNavigate();

  return (
    <main className="bg-[#063826] text-white min-h-screen font-sans">
      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-10">
        <div
          className="rounded-2xl overflow-hidden min-h-[460px] flex items-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(53,3,94,0.41),rgba(140,143,64,0.66)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDMRPc-kVlJB6ECB3wNkGq2zEXLknq2czlgIr2156k1dYCj5yRXY0uvLCTIRw_sna_hwstZ2gB0GRC3tQfFFTiQAhfqFlDtoMH2OCwHLQXMfrLec7LjPatLLTvNkQ7HxvxJV560-VD5brhv3tVXKrS4glxmWgLryF_6NzrQpLdIyO2cG_6gfjIvKVDMNv8QZjRCdCXpXFb2cRPngCRQ-pLNoj1-Gov3Q-FSKxS6tHlJwUfg8WOcHBZE6hYKmBcyRL1M1oLOiZJYLc4z')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-2xl mx-auto px-8 text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#facc26] leading-tight">
              Exquisite Catering for <br /> Unforgettable Moments
            </h1>

            <p className="mt-4 text-sm md:text-base text-[#d6efe6]">
              Experience culinary excellence and impeccable service tailored to
              your special day.
            </p>

            <div className="mt-8 flex justify-center gap-6 flex-wrap">
              <button
                onClick={() => scrollTo("services")}
                className="bg-[#facc15] text-green-900 px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
              >
                View Menus
              </button>

              <button
                onClick={() => scrollTo("contact")}
                className="bg-[#facc15]/60 border border-[#facc15] px-8 py-4 rounded-xl font-semibold backdrop-blur hover:bg-[#facc15] transition"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-20">
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
            "Birthday Feasts",
            "Dream Weddings",
            "Corporate Galas",
            "Private Dining",
          ].map((title) => (
            <div
              key={title}
              className="rounded-2xl bg-[#0b4a34] shadow-lg overflow-hidden hover:-translate-y-2 transition"
            >
              <div className="h-48 bg-black/20" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#e0b84c]">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-[#cfe9df]">
                  Premium catering designed for unforgettable experiences.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= VIDEO ================= */}
      <section className="bg-[#063826] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative h-[520px] rounded-3xl overflow-hidden border border-[#0e4a34] shadow-2xl">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/heroimage3.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#facc15]">
                Crafted With Love & Flavor
              </h2>
              <p className="mt-2 text-[#e7f3ee]">
                A visual journey into our culinary excellence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY ================= */}
      <section id="why" className="bg-[#053b2a] py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#e0b84c] text-xl md:text-2xl font-semibold tracking-widest">
            WHY CHOOSE US
          </p>

          <h2 className="mt-4 text-2xl md:text-3xl font-bold max-w-3xl mx-auto">
            We deliver an unparalleled catering experience by focusing on what
            matters most.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              "Bespoke Menus",
              "Impeccable Service",
              "Locally Sourced Ingredients",
              "100% Halal Certified",
              "No Artificial Colours",
              "Saffron Enhanced Dishes",
            ].map((item) => (
              <div
                key={item}
                className="bg-[#0b4a34] rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition"
              >
                <h3 className="text-lg font-semibold text-[#e0b84c] mb-3">
                  {item}
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
      <section id="contact" className="py-20 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#facc15]">
          Ready to plan your event?
        </h2>
        <p className="mt-4 text-[#d6efe6]">
          Reach out today and let’s create something unforgettable.
        </p>

        <button className="mt-8 bg-[#facc15] text-green-900 px-10 py-4 rounded-xl font-semibold hover:scale-105 transition shadow-lg">
          Get a Quote
        </button>
      </section>
    </main>
  );
}
