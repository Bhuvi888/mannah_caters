import React from "react";
import {
  Leaf,
  Clock,
  ChefHat,
  Users,
  Utensils,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Routes, Route, Link } from "react-router-dom";
import Whyheader from "../components/";
export default function WhyUs() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#0c120c] text-white selection:bg-[#e2b857] selection:text-black overflow-hidden">
      {/* HEADER SECTION WRAPPER (NAV + HERO) */}
      <div className="relative">
        {/* Header Background Image with Gradient Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage:
              'url("https://partyslate.imgix.net/photos/1734724/photo-a9678605-fbaf-49bd-8ba0-ea710f19c02f.jpg?ixlib=js-3.8.0&auto=compress%2Cformat&bg=fff&cs=srgb")',
          }}
        >
          {/* Gradient overlay to fade into the body background and darken image for text */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#0c120c]/70 to-[#0c120c]"></div>
        </div>

        {/* CONTENT (Relative to sit on top of background) */}
        <div className="relative z-10">
          {/* NAVBAR */}
          <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            //className="flex items-center justify-between px-6 lg:px-20 py-8"
            className="fixed top-0 left-0 w-full z-10 flex items-center justify-between px-5 lg:px-5 py-4 bg-[#0c120c]/80 backdrop-blur-md border-b border-white/10"
          >
            <div className="flex items-center gap-2 text-xl font-bold tracking-tight font-serif cursor-pointer">
              <span className="text-[#e2b857]">
                <Utensils size={24} className="fill-current" />
              </span>
              Mannah Caterers
            </div>
            <div className="hidden md:flex gap-10 text-[20px] font-medium text-gray-300 tracking-wide">
              <Link
                to="/"
                className="hover:text-[#e2b857] transition-colors relative group"
              >
                Home
              </Link>
              <Link
                to="/menu"
                className="hover:text-[#e2b857] transition-colors relative group"
              >
                Menu
              </Link>
              <Link
                to="/contact"
                classNa="hover:text-[#e2b857] transition-colors relative group"
              >
                Contact
              </Link>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#e2b857] hover:bg-[#cda446] transition-colors text-black px-7 py-2.5 rounded text-[13px] font-bold tracking-wide shadow-lg uppercase"
            >
              Get a Quote
            </motion.button>
          </motion.nav>

          {/* HERO */}
          <section className="px-6 lg:px-20 pt-25 pb-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-4xl"
            >
              <motion.span
                variants={fadeInUp}
                className="inline-block mb-6 border border-[#e2b857] text-[#e2b857] text-[11px] px-4 py-1.5 rounded-full tracking-[0.2em] font-bold uppercase bg-black/30 backdrop-blur-sm"
              >
                Why Choose Us
              </motion.span>
              <motion.h1
                variants={fadeInUp}
                className="text-[42px] lg:text-[72px] font-bold font-serif leading-[1.1] text-white"
              >
                Excellence in <span className="text-[#e2b857]">Every Bite</span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="mt-6 max-w-xl text-[16px] leading-relaxed text-gray-200 font-light"
              >
                From intimate gatherings to grand celebrations of 1000+ guests,
                discover why Mannah Caterers is the preferred choice for
                memorable events.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="mt-10 flex flex-wrap gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#e2b857] hover:bg-[#cda446] transition-colors text-black px-8 py-3.5 rounded text-[14px] font-bold tracking-wide shadow-[0_0_20px_rgba(226,184,87,0.3)] hover:shadow-[0_0_30px_rgba(226,184,87,0.5)]"
                >
                  Book a Tasting
                </motion.button>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-white/30 hover:border-[#e2b857] hover:text-[#e2b857] transition-colors bg-white/5 backdrop-blur-sm px-8 py-3.5 rounded text-[14px] font-medium tracking-wide"
                >
                  View Sample Menu
                </motion.button>
              </motion.div>
            </motion.div>

            {/* STATS */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-20 bg-[#1b2636]/80 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl relative overflow-hidden"
            >
              {/* Subtle texture for stats bg */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-30"></div>
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
                <Stat value="2000+" label="GUEST CAPACITY" />
                <Stat value="7+" label="YEARS EXPERIENCE" />
                <Stat value="400+" label="EVENTS HOSTED" />
              </div>
            </motion.div>
          </section>
        </div>
      </div>

      {/* COMMITMENTS */}
      <section className="px-6 lg:px-20 py-16 bg-[#0c120c]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-[36px] lg:text-[48px] font-bold font-serif">
            Our <span className="text-[#e2b857]">Commitments</span>
          </h2>
          <p className="mt-4 max-w-xl text-[16px] text-gray-400 leading-relaxed font-light">
            We bring a trustworthy and professional touch to every event,
            ensuring your special day is perfect with{" "}
            <span className="text-[#e2b857] font-medium">gold-standard</span>{" "}
            service.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <Card
            icon={<Leaf size={20} className="text-[#e2b857]" />}
            title="Fresh & Hygienic"
            desc="Farm-fresh ingredients prepared in certified sterile kitchens. We prioritize health without compromising taste."
          />
          <Card
            icon={<Clock size={20} className="text-[#e2b857]" />}
            title="On-Time Delivery"
            desc="Punctuality is our promise. Your food arrives hot, fresh, and ready to serve exactly when you need it."
          />
          <Card
            icon={<ChefHat size={20} className="text-[#e2b857]" />}
            title="Experienced Chefs"
            desc="Culinary experts with decades of multi-cuisine experience, bringing authentic flavors to every dish."
          />
          <Card
            icon={<Users size={20} className="text-[#e2b857]" />}
            title="Scalable Capacity"
            desc="Expert handling of events from small intimate groups to grand celebrations with 2000+ guests."
          />
          <Card
            icon={<Utensils size={20} className="text-[#e2b857]" />}
            title="Custom Menus"
            desc="Tailored Veg & Non-Veg menus to suit your specific palate and budget, crafted with care."
          />

          {/* Image Card */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            className="relative rounded-xl overflow-hidden bg-[#1b2636] group cursor-pointer border border-white/5 min-h-[260px] shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop"
              alt="Taste"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700"
            />
            <div className="relative p-8 flex flex-col justify-end h-full bg-gradient-to-t from-black/90 to-transparent">
              <h3 className="font-bold text-lg">Taste the Difference</h3>
              <p className="text-[13px] text-[#e2b857] mt-2 flex items-center gap-1 font-medium group-hover:gap-2 transition-all">
                Browse Gallery <ArrowRight size={14} />
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-20 text-center bg-[#0f150f] relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#e2b857]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#e2b857]/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="px-6 z-10"
        >
          <div className="text-[#e2b857] text-6xl mb-8 font-serif opacity-50">
            “
          </div>
          <p className="text-[20px] md:text-[26px] font-serif italic leading-relaxed max-w-4xl mx-auto text-gray-200">
            "Mannah Caterers made our wedding absolutely magical. The food was
            the highlight of the evening, and the service was impeccable. Highly
            recommended for anyone looking for perfection."
          </p>
          <div className="mt-12 flex flex-col items-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#e2b857] mb-4 shadow-lg"
            >
              <img
                src="https://partyslate.imgix.net/photos/1734724/photo-a9678605-fbaf-49bd-8ba0-ea710f19c02f.jpg?ixlib=js-3.8.0&auto=compress%2Cformat&bg=fff&cs=srgb"
                alt="User"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <p className="text-[#e2b857] font-bold text-lg tracking-wide font-serif">
              David & Sarah
            </p>
            <p className="text-[12px] text-gray-400 mt-1 uppercase tracking-wider font-medium">
              Wedding Reception, 2023
            </p>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-20 py-24 bg-[#0c120c]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#0f150f] border border-white/5 rounded-3xl p-12 lg:p-24 text-center relative overflow-hidden group"
        >
          {/* Decorative glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#e2b857]/5 blur-3xl rounded-full group-hover:bg-[#e2b857]/10 transition-colors duration-1000"></div>

          <div className="relative z-10">
            <h2 className="text-[32px] lg:text-[44px] font-bold font-serif">
              Ready to plan your <span className="text-[#e2b857]">menu?</span>
            </h2>
            <p className="mt-6 max-w-xl mx-auto text-[16px] text-gray-400 leading-relaxed font-light">
              Contact us today to create a memorable culinary experience for
              your guests. We handle the details so you can enjoy the party.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#e2b857] hover:bg-[#cda446] transition-colors text-black px-8 py-3.5 rounded text-[14px] font-bold shadow-lg tracking-wide"
              >
                Get a Free Quote
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/20 hover:border-[#e2b857] hover:text-[#e2b857] transition-colors bg-transparent px-8 py-3.5 rounded text-[14px] font-medium tracking-wide"
              >
                Contact Us
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      {/* <footer className="px-6 lg:px-20 py-8 border-t border-white/5 bg-[#0a0f0a] flex flex-col md:flex-row justify-between items-center text-[13px] text-gray-500 gap-4">
        <div className="flex items-center gap-2 font-serif text-gray-300">
          <span className="text-[#e2b857]"><Utensils size={16} className="fill-current" /></span> Mannah Caterers
        </div>
        <div className="flex gap-6">
        </div>
        <span>© 2024 Mannah Caterers. All rights reserved.</span>
      </footer> */}
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="text-center py-6 md:py-8 hover:bg-white/5 transition-colors duration-300 group cursor-default">
      <motion.h3
        initial={{ scale: 0.9, opacity: 0.8 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-[32px] md:text-[44px] font-bold text-[#e2b857] font-serif group-hover:scale-110 transition-transform duration-300"
      >
        {value}
      </motion.h3>
      <p className="mt-2 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-white transition-colors">
        {label}
      </p>
    </div>
  );
}

function Card({ title, desc, icon }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -5 }}
      className="bg-[#1b2636] border border-white/5 rounded-xl p-8 hover:bg-[#233042] transition-colors group shadow-lg"
    >
      <div className="w-12 h-12 rounded-full bg-[#151d29] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#e2b857] group-hover:text-black transition-all duration-300">
        {React.cloneElement(icon, {
          className: "group-hover:text-black transition-colors",
        })}
      </div>
      <h3 className="mb-3 font-bold text-[18px] text-white font-serif">
        {title}
      </h3>
      <p className="text-[14px] leading-relaxed text-gray-400 font-light">
        {desc}
      </p>
    </motion.div>
  );
}
