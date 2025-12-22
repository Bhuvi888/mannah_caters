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
// import Whyheader from "../components/Whyheader";

export default function WhyUs() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <div className="min-h-screen bg-[#0c120c] text-white overflow-hidden">
      {/* SPECIAL HEADER */}
      <Whyheader />

      {/* HERO BACKGROUND */}
      <div className="relative pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://partyslate.imgix.net/photos/1734724/photo-a9678605-fbaf-49bd-8ba0-ea710f19c02f.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#0c120c]/70 to-[#0c120c]" />
        </div>

        {/* HERO CONTENT */}
        <section className="relative z-10 px-6 lg:px-20 pb-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block mb-6 border border-[#e2b857] text-[#e2b857] text-[11px] px-4 py-1.5 rounded-full tracking-[0.2em] font-bold uppercase bg-black/30"
            >
              Why Choose Us
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className="text-[42px] lg:text-[72px] font-bold font-serif leading-[1.1]"
            >
              Excellence in <span className="text-[#e2b857]">Every Bite</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-xl text-gray-200"
            >
              From intimate gatherings to grand celebrations of 1000+ guests,
              discover why Mannah Caterers is trusted for unforgettable events.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-10 flex gap-4">
              <button className="bg-[#e2b857] text-black px-8 py-3.5 rounded font-bold shadow-lg">
                Book a Tasting
              </button>
              <button className="border border-white/30 px-8 py-3.5 rounded">
                View Sample Menu
              </button>
            </motion.div>
          </motion.div>
        </section>
      </div>

      {/* COMMITMENTS */}
      <section className="px-6 lg:px-20 py-20">
        <h2 className="text-[36px] lg:text-[48px] font-bold font-serif mb-6">
          Our <span className="text-[#e2b857]">Commitments</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            icon={<Leaf />}
            title="Fresh & Hygienic"
            desc="Farm-fresh ingredients prepared in certified kitchens."
          />
          <Card
            icon={<Clock />}
            title="On-Time Delivery"
            desc="Perfect timing, hot and fresh, every single event."
          />
          <Card
            icon={<ChefHat />}
            title="Expert Chefs"
            desc="Multi-cuisine specialists with years of experience."
          />
          <Card
            icon={<Users />}
            title="Scalable Events"
            desc="From small parties to 2000+ guest celebrations."
          />
          <Card
            icon={<Utensils />}
            title="Custom Menus"
            desc="Veg & Non-veg menus crafted for your taste and budget."
          />

          {/* IMAGE CARD */}
          <div className="relative rounded-xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1555244162-803834f70033"
              className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex items-end">
              <span className="text-[#e2b857] flex items-center gap-2">
                Browse Gallery <ArrowRight size={14} />
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* REUSABLE COMPONENTS */

function Card({ icon, title, desc }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-[#1b2636] border border-white/5 rounded-xl p-8 shadow-lg"
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#151d29] text-[#e2b857] mb-4">
        {icon}
      </div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{desc}</p>
    </motion.div>
  );
}
