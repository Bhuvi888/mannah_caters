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
                onClick={() => navigate("/menu")}
                className="bg-[#facc15] text-green-900 px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
              >
                View Menus
              </button>

              <button
                onClick={() => navigate("/quote")}
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
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-xl font-bold uppercase tracking-widest text-[#e0b84c]">
            Our Expertise
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-serif">
            Curated Culinary Services
          </h2>
          <div className="mx-auto mt-6 h-[1px] w-24 bg-[#e0b84c]/50" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
          ].map((card) => (
            <div
              key={card.title}
              className="
          group rounded-2xl bg-[#0b4a34] shadow-lg overflow-hidden
          transition-all duration-500
          hover:-translate-y-2
          hover:shadow-[0_0_30px_rgba(224,184,76,0.35)]
        "
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="
              h-52 w-full object-cover
              transition-transform duration-700
              group-hover:scale-110
            "
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#e0b84c]">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-[#cfe9df] leading-relaxed">
                  {card.desc}
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
          {/* Heading */}
          <p className="text-[#e0b84c] text-xl md:text-2xl font-semibold tracking-widest mb-4">
            WHY CHOOSE US
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white max-w-3xl mx-auto">
            We deliver an unparalleled catering experience by focusing on what
            matters most.
          </h2>

          {/* Cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "📖",
                title: "Bespoke Menus",
                desc: "Every menu is crafted to your taste and dietary needs, ensuring a unique culinary journey.",
                quote: "“The menu felt like it was made just for us.”",
              },
              {
                icon: "🍽",
                title: "Impeccable Service",
                desc: "Our professional, attentive staff ensures a seamless and delightful event from start to finish.",
                quote: "“Service was flawless from start to finish.”",
              },
              {
                icon: "🌿",
                title: "Locally Sourced Ingredients",
                desc: "We pride ourselves on using the freshest ingredients, sourced from trusted local partners.",
                quote: "“Freshness you can taste in every bite.”",
              },
              {
                icon: "☪",
                title: "100% Halal Certified",
                desc: "All our ingredients and preparation processes strictly follow halal standards.",
                quote: "“Trust and purity in every meal.”",
              },
              {
                icon: "🚫",
                title: "No Artificial Colours",
                desc: "We avoid artificial additives to respect dietary, cultural, and religious preferences.",
                quote: "“Perfectly suited to our traditional values.”",
              },
              {
                icon: "🌸",
                title: "Saffron Enhanced",
                desc: "Select dishes are elevated with saffron for rich flavor and vibrant presentation.",
                quote: "“The saffron added a luxurious touch.”",
              },
            ].map((item) => (
              <div key={item.title} className="group [perspective:1000px]">
                <div
                  className="
              relative h-72 w-full rounded-2xl
              transition-transform duration-700
              [transform-style:preserve-3d]
              group-hover:[transform:rotateY(180deg)]
            "
                >
                  {/* FRONT */}
                  <div className="absolute inset-0 bg-[#0b4a34] rounded-2xl p-8 text-center shadow-lg [backface-visibility:hidden]">
                    <div className="flex justify-center mb-6">
                      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#0f5c42] text-[#e0b84c] text-2xl">
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-[#e0b84c] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#cfe9df] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* BACK */}
                  <div className="absolute inset-0 bg-[#0f5c42] rounded-2xl p-8 text-center shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
                    <p className="text-[#e0b84c] text-lg font-medium italic">
                      {item.quote}
                    </p>
                  </div>
                </div>
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
