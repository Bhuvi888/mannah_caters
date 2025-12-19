import React from "react";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function App() {
  const navigate = useNavigate()
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
 
    <div className="bg-[#063826] text-white min-h-screen font-sans overflow-x-hidden">

      {/* NAVBAR */}
      {/* <nav className="sticky top-0 z-50 bg-[#063826] border-b border-[#0e4a34]"> */}
  {/* <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">  */}

    {/* Logo */}
    {/* <div className="flex items-center gap-2 text-4xl font-bold text-[#facc15] animate-[fadeDown_0.8s_ease-out_forwards]">
      <span className="text-6xl">🍽</span> Mannah Caters
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
   <section className="relative w-full h-[90vh] sm:h-[95vh] overflow-hidden bg-[#012a1c]">

  {/* 🖼 Background Image */}
  <img
    src="/biriyani.png" // 🔴 replace with your image path
    alt="Grand Biryani Preparation"
    className="
      absolute inset-0
      w-full h-full
      object-cover
      scale-105
      animate-[slowZoom_18s_ease-in-out_infinite]
    "
  />

  {/* 🌑 Cinematic Overlays */}
  <div className="absolute inset-0 bg-black/40" />
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30" />

  {/* ✨ Gold Glow (subtle luxury) */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(250,204,21,0.15),transparent_30%)]" />

  {/* ✨ Film Grain */}
  <div className="absolute inset-0 opacity-[0.08] bg-[url('/grain.png')] pointer-events-none" />

  {/* 🧾 Content */}
  <div className="relative z-10 h-full flex items-end sm:items-center">
    <div className="max-w-7xl mx-auto px-6 sm:px-10 pb-20 sm:pb-0 w-full">

      <div className="max-w-3xl">

        <span className="
          inline-block mb-4
          px-4 py-2
          text-xs tracking-[0.35em] uppercase
          border border-[#facc15]/60
          text-[#facc15]
          bg-black/30 backdrop-blur-sm rounded-full
        ">
          Mannah Caters
        </span>

        <h1 className="
          text-4xl sm:text-5xl lg:text-7xl
          font-extrabold
          leading-tight
          text-white
        ">
          Crafted for
          <span className="text-[#facc15]"> Grand Celebrations</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-[#e6f4ee] max-w-xl">
          Authentic biryani, rich flavors, and large-scale perfection —
          cooked with care for weddings, functions, and unforgettable moments.
        </p>

        {/* 🎯 CTA */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">

          <button
            className="
              relative overflow-hidden
              bg-[#facc15]
              text-[#012a1c]
              font-semibold
              px-8 py-4
              rounded-xl
              shadow-lg
              animate-[floatSoft_4s_ease-in-out_infinite]
              hover:-translate-y-2
              hover:shadow-[0_18px_40px_-8px_rgba(250,204,21,0.9)]
              hover:animate-none
              transition-all duration-300
            "
          >
            View Menu
          </button>

          <button
            className="
              relative overflow-hidden
              border border-[#facc15]
              text-[#facc15]
              bg-black/30 backdrop-blur-md
              font-semibold
              px-8 py-4
              rounded-xl
              animate-[floatSoft_5.5s_ease-in-out_infinite]
              hover:bg-[#facc15]
              hover:text-[#012a1c]
              hover:-translate-y-2
              hover:animate-none
              transition-all duration-300
            "
          >
            Book for Your Event
          </button>

        </div>

        {/* ✅ Trust strip */}
        <div className="mt-10 flex flex-wrap gap-6 text-sm text-[#d6efe6]">
          <span>✔ 100% Halal</span>
          <span>✔ No Artificial Colors</span>
          <span>✔ Natural Saffron</span>
        </div>

      </div>
    </div>
  </div>

  {/* ⬇ Scroll hint */}
  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#facc15] text-xs tracking-widest animate-pulse">
    SCROLL
  </div>

  {/* 🎥 Animations */}
  <style>
    {`
      @keyframes slowZoom {
        0% { transform: scale(1); }
        50% { transform: scale(1.08); }
        100% { transform: scale(1); }
      }

      @keyframes floatSoft {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-6px); }
        100% { transform: translateY(0px); }
      }
    `}
  </style>

{/* Right-side visual anchor */}
<div className="
  absolute right-[-120px] top-1/2 -translate-y-1/2
  w-[420px] h-[420px]
  rounded-full
  bg-[radial-gradient(circle,rgba(250,204,21,0.25),transparent_65%)]
  blur-3xl
  pointer-events-none
" />

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
            loading="lazy"
          />
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold text-[#e0b84c]">
            {card.title}
          </h3>
          <p className="mt-2 text-sm text-[#cfe9df]">
            {card.desc}
          </p>
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

    <div className="
  relative
  h-[420px] sm:h-[560px] md:h-[720px] lg:h-[820px]
  rounded-3xl overflow-hidden
  shadow-2xl
  border border-[#0e4a34]
  bg-black
">


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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">

      {[
        {
  icon: "📖",
  title: "Menu = Your Choice",
  desc: "Tell us what you want. We’ll make it happen — simple as that.",
  quote: "“No copy-paste menus here.”",
},
{
  icon: "🍽",
  title: "Service That Just Works",
  desc: "Food on time, plates full, guests happy.",
  quote: "“That’s how catering should be.”",
},
{
  icon: "🌿",
  title: "Fresh Means Fresh",
  desc: "If it’s not fresh, it doesn’t go into the kitchen.",
  quote: "“You can tell from the first bite.”",
},
{
  icon: "☪",
  title: "Halal, Always",
  desc: "No shortcuts, no confusion — halal standards followed strictly.",
  quote: "“Trust matters.”",
},
{
  icon: "🚫",
  title: "Artificial Colors? No Thanks",
  desc: "We keep chemicals out of our food — period.",
  quote: "“Clean food wins.”",
},
{
  icon: "🌸",
  title: "Saffron > Food Color",
  desc: "Natural saffron does the job better than artificial colors ever could.",
  quote: "“Natural is the new luxury.”",
},

      ].map((item) => (
        <div key={item.title} className="group [perspective:1000px]">
          <div className="relative h-72 w-full rounded-2xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]
group-active:[transform:rotateY(180deg)]
">
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
            <h4 className="text-[#e0b84c] font-semibold">Mannah Caters ~ Food For Soul</h4>
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
          <div className="text-sm">© 2024 Mannah Caters. All Rights Reserved.</div>
        </div>
      </footer> */}
    </div>
  </>);
}