import React from "react";
// import { useState } from "react";
export default function App() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // const [showIntro, setShowIntro] = useState(true);
  // const [fadeOut, setFadeOut] = useState(false);

  return (
    <>
      {/* INTRO VIDEO SECTION
        {showIntro && (
          <section
            className={`
              fixed inset-0 z-[9999]
              bg-black
              transition-opacity duration-1000
              ${fadeOut ? "opacity-20": "opacity-100"}
            `}
          >
            <div className="relative w-full h-full flex items-center">
            <div className="
          ml-12 md:ml-[-30px] 
          w-full max-w-[-420px]
          aspect-[16/9]
          overflow-hidden
          rounded-2xl
        ">
            <video
              className="w-full h-full object-contain"
              src="/intro.mp4"
              muted
              autoPlay
              playsInline
              onEnded={() => {
                setFadeOut(true);
                setTimeout(() => setShowIntro(false), 700);
              }}
            />
            </div>
            </div>
          </section>
        )}
         */}

      <di v className="bg-[#063826] text-white min-h-screen font-sans">
        {/* NAVBAR */}
        {/* <nav className="sticky top-0 z-50 bg-[#063826] border-b border-[#0e4a34]"> */}
        {/* <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">  */}

        {/* Logo */}
        {/* <div className="flex items-center gap-2 text-4xl font-bold text-[#facc15] animate-[fadeDown_0.8s_ease-out_forwards]">
      <span className="text-6xl">🍽</span> Mannah Caterers
    </div> */}

        {/* Menu */}
        {/* <ul className="hidden md:flex gap-8 text-lg">
      {["Services", "Menu", "Why Us", "Contact"].map((item, index) => (
        <li
          key={item}
          onClick={() =>
            item === "Services"
              ? scrollTo("services")
              : item === "Why Us"
              ? scrollTo("why")
              : item === "Contact"
              ? scrollTo("contact")
              : null
          }
          className="
            relative cursor-pointer
            text-white

            opacity-0
            animate-[fadeDown_0.8s_ease-out_forwards]
          "
          style={{ animationDelay: `${index * 0.15}s` }}
        >
          {item} */}

        {/* Underline */}
        {/* <span
            className="
              absolute left-1/2 -bottom-1
              h-[2px] w-0
              bg-[#facc15]
              transition-all duration-300 ease-out
              group-hover:w-full
            "
          ></span> */}

        {/* Hover underline fix */}
        {/* <style jsx>{``}</style>
        </li>
      ))}
    </ul> */}

        {/* Animations */}
        {/* <style>
    {`
      @keyframes fadeDown {
        0% {
          opacity: 0;
          transform: translateY(-20px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      ul li:hover span {
        width: 100%;
        left: 0;
      }
    `}
  </style>

          <button
  className="
    bg-[#facc15]
    text-[rgb(1,50,32)]
    background-color: #facc15;
    px-4 py-2
    rounded-lg
    text-lg
    font-semibold
    transition-all
    duration-300
    hover:text-green-900
    hover:shadow-[0_0_20px_rgba(250,204,21,0.9)]
    hover:bg-[#facc15]">Book Now</button>
        </div>
      </nav>  */}

        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 mt-8">
          <div
            className="rounded-2xl overflow-hidden min-h-[460px] flex items-center"
            style={{
              backgroundImage:
                "linear-gradient(rgba(53, 3, 94, 0.41),rgba(140, 143, 64, 0.66)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDMRPc-kVlJB6ECB3wNkGq2zEXLknq2czlgIr2156k1dYCj5yRXY0uvLCTIRw_sna_hwstZ2gB0GRC3tQfFFTiQAhfqFlDtoMH2OCwHLQXMfrLec7LjPatLLTvNkQ7HxvxJV560-VD5brhv3tVXKrS4glxmWgLryF_6NzrQpLdIyO2cG_6gfjIvKVDMNv8QZjRCdCXpXFb2cRPngCRQ-pLNoj1-Gov3Q-FSKxS6tHlJwUfg8WOcHBZE6hYKmBcyRL1M1oLOiZJYLc4z')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className="
    max-w-2xl mx-auto px-8 text-center
    animate-[fadeUp_1.1s_ease-out_forwards]
  "
            >
              <h1
                className="
      text-3xl md:text-5xl
      font-extrabold
      text-[#facc26]
      leading-tight
      opacity-0
      animate-[fadeUp_1.1s_ease-out_0.1s_forwards]
    "
              >
                Exquisite Catering for <br /> Unforgettable Moments
              </h1>

              <p
                className="
      mt-4 text-sm md:text-base
      text-[#d6efe6]
      opacity-0
      animate-[fadeUp_1.1s_ease-out_0.35s_forwards]
    "
              >
                Experience culinary excellence and impeccable service tailored
                to your special day. We bring passion, flavor, and elegance to
                every table.
              </p>

              <style>
                {`
      @keyframes fadeUp {
        0% {
          opacity: 0;
          transform: translateY(30px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}
              </style>

              <div
                className="
    mt-8 flex justify-center gap-6

    [&_button]:px-6
    [&_button]:py-3
    [&_button]:rounded-lg
    [&_button]:text-sm
    [&_button]:font-semibold
    [&_button]:animate-[float_5s_ease-in-out_infinite]

    [&_button:nth-child(2)]:animate-[float_7s_ease-in-out_infinite]
  "
              >
                <button
                  className="
     bg-[#facc15]
    text-green-900
    font-semibold
    px-6 py-3
    sm:px-8 sm:py-4
    lg:px-10 lg:py-4
    text-base sm:text-lg lg:text-xl
    rounded-xl
    shadow-lg
    hover:scale-105
    transition-all duration-300
    "
                >
                  View Menus
                </button>

                <button
                  onClick={() => scrollTo("contact")}
                  className="
       bg-[#facc15]/52
    text-green-900
    font-semibold
    px-6 py-3
    sm:px-8 sm:py-4
    lg:px-10 lg:py-4
    text-base sm:text-lg lg:text-xl
    rounded-xl
    border border-[#facc15]
    backdrop-blur-lg
    shadow-lg
    hover:bg-[#facc15]
    hover:scale-105
    transition-all duration-300
    "
                >
                  Book Now
                </button>

                <style>
                  {`
      @keyframes float {
        0% { transform: translateY(0px); }
        25% { transform: translateY(-4px); }
        50% { transform: translateY(0px); }
        75% { transform: translateY(4px); }
        100% { transform: translateY(0px); }
      }
    `}
                </style>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="relative mx-auto max-w-7xl px-6 py-20"
        >
          {/* Heading */}
          <div
            className="
      mb-14 text-center
      opacity-0
      animate-[fadeUp_1s_ease-out_forwards]
    "
          >
            <span className="text-xl font-bold uppercase tracking-widest text-[#e0b84c]">
              Our Expertise
            </span>
            <h2 className="mt-3 text-4xl font-serif text-white md:text-5xl">
              Curated Culinary Services
            </h2>
            <div className="mx-auto mt-6 h-[1px] w-24 bg-[#e0b84c]/50" />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Birthday Feasts",
                desc: "Celebrate another year with customized menus and joyful flavors.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcE5UfLz76p5uD_Y66VyBmQdwJo45_Les1LWgyQx4WEHT-H2d3Q7JIw5Ik7WOpOhFDWpDOHv4XMDqerNSiE3p-9N254hU6GsuGdTiAMyMh2l_pIWMoK8-qzCSusqrpBbSRMtYn8esWbywN0eCuFHWtnX09BRUiZcmV6GXin6JVAkc7scNZrBHpT_7GdQeTBQPyhglRJvCAqOIoL7bNIkGNkyTRx1dqkPj5VBX1CFY2Zswc-SBRqutfnhf2WVz8hvo9fulXG5jdu2wp",
              },
              {
                title: "Dream Weddings",
                desc: "Elegant presentations and exquisite flavors for your special day.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDR6s6jFs3tvxH2r7tcmDPbA7__iB7CqmdQkFEIw9fHIqohePZhHY-e3J6ESDQ1ffDKZuqHuqDKgltUNdiCoVlVn3AJINO8rooBDU8SDSzEQo9l1tq10vlxlbBYENgEMYlsvyecqjz4WluCI_cmZ9iCo8sKDBD-AYfqvMrzNDu3qBpU-m-sftBwoaJPXgqhhlCVi9Qo4NTNsPSza2r3VsClKg_GVaQPIZnGMjv_KqcIEe0_5HL6S37tVULAb1DcTnMmjp_0kwyBSDNy",
              },
              {
                title: "Corporate Galas",
                desc: "Professional catering designed to impress clients and teams.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuClFkdbB-wC8sjiUJoY9-pjkMyM6ttag6w6FVWqtBuEJduznRMqnmNOCbKz7xTNnbh-fwiAXyadgJSAmj-hgSSLXCGK9GNG_xIwZ5PmQfcpSO9CynXKXb0tGtQVAlBvSi1yCqHPRTE4BvKN99Lm0uTWeoluIJkbZYquxtWSvzhzb3rrby4ZOR6qifSUTayS504CqoAfsXjccAK4ODmrlorTlw21TTnnEoFV5jtqRzIc5LN0ERCUj0zuW84eL5jCI9-9irmmLEQD5Bcm",
              },
              {
                title: "Private Dining",
                desc: "Restaurant-quality dining in the comfort of your home.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqiIXNJJ5tWd6Qvd4iAjnfsv47EUtqW1uYOHOX10c_IzyvQj8K_hTqzFLPKfMlcqMUELgstVZmo162FKBi0R3WqZKThLJKtX1q9wBuS4SR2TEzQelNtDbm2iwGAPelK5SZNLaQzM6q_4ClKIdjtEj-GLGiaZNvN5Y0hwkP1zw3OtCCmw25lAUwW6th_gqhhfGf0TLPZ11ZepKPM5jfwYezFlVDX77Blu8xcNGwU9QvnuYuqQQFGfywnCtgohyuEPPUbATchMPHSkLD",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="
          group overflow-hidden rounded-2xl bg-[#0b4a34]
          shadow-lg
          opacity-0
          translate-y-6
          animate-[fadeUp_0.9s_ease-out_forwards]
          transition-all duration-500
          hover:-translate-y-2
          hover:shadow-[0_0_30px_rgba(224,184,76,0.35)]
        "
                style={{ animationDelay: `${0.2 + i * 0.15}s` }}
              >
                <div className="overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[#e0b84c]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#cfe9df]">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Animations */}
          <style>
            {`
      @keyframes fadeUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}
          </style>
        </section>

        {/* VIDEO SECTION */}
        <section className="bg-[#063826] py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div
              className="
      relative
      h-[720px] md:h-[820px]
      rounded-3xl overflow-hidden
      shadow-2xl
      border border-[#0e4a34]
      bg-black
    "
            >
              {/* Video */}
              <video
                className="
          absolute inset-0
          w-full h-full
          object-cover
        "
                src="/public/heroimage3.mp4"
                autoPlay
                loop
                muted
                playsInline
              />

              {/* Dark Gradient Overlay (for text readability) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Overlay Text */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center px-6 z-10">
                <h2 className="text-3xl md:text-5xl font-extrabold text-[#facc15]">
                  Crafted With Love & Flavor
                </h2>
                <p className="mt-2 text-sm md:text-base text-[#e7f3ee]">
                  A visual journey into our culinary excellence
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="bg-[#053b2a] py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            {/* Heading */}
            <p className="text-[#e0b84c] md:text-4xl font-semibold tracking-widest mb-4">
              WHY CHOOSE US
            </p>
            <h2 className="text-3xl md:text-2xl font-bold text-white max-w-3xl mx-auto">
              We deliver an unparalleled catering experience by focusing on what
              matters most.
            </h2>
            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
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
                  title: "No Artificial colours Added",
                  desc: "We ensure saffron-free cooking to respect dietary, cultural, and religious preferences.",
                  quote: "“Perfectly suited to our traditional values.”",
                },
                {
                  icon: "🌸",
                  title: "Saffron Added",
                  desc: "We enhance our dishes with saffron to provide a rich flavor and vibrant color.",
                  quote: "“The saffron added a luxurious touch.”",
                },
              ].map((item) => (
                <div key={item.title} className="group [perspective:1000px]">
                  <div className="relative h-72 w-full rounded-2xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* FRONT */}
                    <div className="absolute inset-0 bg-[#0b4a34] rounded-2xl p-8 text-center shadow-lg [backface-visibility:hidden]">
                      <div className="flex justify-center mb-6">
                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#0f5c42] text-[#e0b84c] text-2xl">
                          {item.icon}
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-yellow-400 mb-3">
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

        {/*here some video has to be played repeatedly */}
        {/* FOOTER */}
        {/* <footer className="bg-[#052f22] py-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6 text-sm text-[#cfe9df]">
          <div>
            <h4 className="text-[#e0b84c] font-semibold">Mannah Caterers ~ Food For Soul</h4>
            <p className="text-sm mt-2">Crafting unforgettable culinary experiences with passion and elegance.</p>
          </div>
          <div>
            <h4 className="text-[#e0b84c] font-semibold">Quick Links</h4>
            <ul className="text-sm mt-2 space-y-1">
              <li>Services</li>
              <li>Menu</li>
              <li>Gallery</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#e0b84c] font-semibold">Contact Us</h4>
            <p className="text-sm mt-2">contact@mannahcaters.com</p>
            <p className="text-sm">(123) 456-7890</p>
          </div>
          <div className="text-sm">© 2024 Mannah Caterers. All Rights Reserved.</div>
        </div>
      </footer> */}
      </di>
    </>
  );
}
