import React from "react";

export default function Home() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#063826] text-white min-h-screen font-sans">
      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 mt-8">
        <div
          className="rounded-2xl overflow-hidden min-h-[460px] flex items-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(53,3,94,0.41), rgba(140,143,64,0.66)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDMRPc-kVlJB6ECB3wNkGq2zEXLknq2czlgIr2156k1dYCj5yRXY0uvLCTIRw_sna_hwstZ2gB0GRC3tQfFFTiQAhfqFlDtoMH2OCwHLQXMfrLec7LjPatLLTvNkQ7HxvxJV560-VD5brhv3tVXKrS4glxmWgLryF_6NzrQpLdIyO2cG_6gfjIvKVDMNv8QZjRCdCXpXFb2cRPngCRQ-pLNoj1-Gov3Q-FSKxS6tHlJwUfg8WOcHBZE6hYKmBcyRL1M1oLOiZJYLc4z')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-2xl mx-auto px-8 text-center animate-[fadeUp_1.1s_ease-out_forwards]">
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#facc26] leading-tight opacity-0 animate-[fadeUp_1.1s_ease-out_0.1s_forwards]">
              Exquisite Catering for <br /> Unforgettable Moments
            </h1>

            <p className="mt-4 text-sm md:text-base text-[#d6efe6] opacity-0 animate-[fadeUp_1.1s_ease-out_0.35s_forwards]">
              Experience culinary excellence and impeccable service tailored to
              your special day. We bring passion, flavor, and elegance to every
              table.
            </p>

            <div className="mt-8 flex justify-center gap-6">
              <button className="bg-[#facc15] text-green-900 px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-300 animate-[float_5s_ease-in-out_infinite]">
                View Menus
              </button>

              <button
                onClick={() => scrollTo("contact")}
                className="bg-[#facc15]/60 border border-[#facc15] px-8 py-4 rounded-xl font-semibold backdrop-blur shadow-lg hover:bg-[#facc15] hover:scale-105 transition-all duration-300 animate-[float_7s_ease-in-out_infinite]"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="mb-14 text-center opacity-0 animate-[fadeUp_1s_ease-out_forwards]">
          <span className="text-xl font-bold uppercase tracking-widest text-[#e0b84c]">
            Our Expertise
          </span>
          <h2 className="mt-3 text-4xl font-serif text-white md:text-5xl">
            Curated Culinary Services
          </h2>
          <div className="mx-auto mt-6 h-[1px] w-24 bg-[#e0b84c]/50" />
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Birthday Feasts",
              desc: "Celebrate another year with customized menus and joyful flavors.",
              img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1200&auto=format&fit=crop",
            },
            {
              title: "Dream Weddings",
              desc: "Elegant presentations and exquisite flavors for your special day.",
              img: "https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=1200&auto=format&fit=crop",
            },
            {
              title: "Corporate Galas",
              desc: "Professional catering designed to impress clients and teams.",
              img: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1200&auto=format&fit=crop",
            },
            {
              title: "Private Dining",
              desc: "Restaurant-quality dining in the comfort of your home.",
              img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-2xl bg-[#0b4a34] shadow-lg opacity-0 translate-y-6 animate-[fadeUp_0.9s_ease-out_forwards] hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(224,184,76,0.35)] transition-all duration-500"
              style={{ animationDelay: `${0.2 + i * 0.15}s` }}
            >
              <img
                src={card.img}
                alt={card.title}
                className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#e0b84c]">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-[#cfe9df]">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= VIDEO ================= */}
      <section className="bg-[#063826] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative h-[720px] md:h-[820px] rounded-3xl overflow-hidden shadow-2xl border border-[#0e4a34]">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/heroimage3.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center px-6">
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
      <section className="bg-[#053b2a] py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#e0b84c] md:text-4xl font-semibold tracking-widest mb-4">
            WHY CHOOSE US
          </p>
          <h2 className="text-3xl md:text-2xl font-bold max-w-3xl mx-auto">
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
              "Saffron Enhanced",
            ].map((title) => (
              <div
                key={title}
                className="bg-[#0b4a34] rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-[#e0b84c] mb-3">
                  {title}
                </h3>
                <p className="text-sm text-[#cfe9df]">
                  Crafted with care to meet quality, cultural, and taste
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
    </div>
  );
}
