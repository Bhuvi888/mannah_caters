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
import { useNavigate } from "react-router-dom";
export default function WhyUs() {
  const navigate = useNavigate();
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
      {/* HERO */}
      <div className="relative pt-32">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage:
              'url("https://partyslate.imgix.net/photos/1734724/photo-a9678605-fbaf-49bd-8ba0-ea710f19c02f.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#0c120c]/70 to-[#0c120c]" />
        </div>

        {/* Hero Content */}
        <section className="relative z-10 px-6 lg:px-20 pb-20">
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
              className="text-[42px] lg:text-[72px] font-bold font-serif leading-[1.1]"
            >
              Excellence in <span className="text-[#e2b857]">Every Bite</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-xl text-gray-200 leading-relaxed"
            >
              From intimate gatherings to grand celebrations of 1000+ guests,
              discover why Mannah Caterers is trusted for unforgettable events.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#e2b857] hover:bg-[#cda446] cursor-pointer text-black px-8 py-3.5 rounded font-bold shadow-lg"
                onClick={() => navigate("/quote")}
              >
                Book a Tasting
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/30 hover:border-[#e2b857] hover:text-[#e2b857] px-8 py-3.5 rounded backdrop-blur-sm"
                onClick={() => navigate("/menu")}
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
            className="mt-20 bg-[#1b2636]/80 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
              <Stat value="2000+" label="GUEST CAPACITY" />
              <Stat value="7+" label="YEARS EXPERIENCE" />
              <Stat value="400+" label="EVENTS HOSTED" />
            </div>
          </motion.div>
        </section>
      </div>

      {/* COMMITMENTS */}
      <section className="px-6 lg:px-20 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-[36px] lg:text-[48px] font-bold font-serif">
            Our <span className="text-[#e2b857]">Commitments</span>
          </h2>
          <p className="mt-4 max-w-xl text-gray-400">
            Gold-standard service with uncompromising quality and reliability.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <FeatureCard
            icon={<Leaf />}
            title="Fresh & Hygienic"
            desc="Certified kitchens and farm-fresh ingredients."
          />
          <FeatureCard
            icon={<Clock />}
            title="On-Time Delivery"
            desc="Hot, fresh, and perfectly timed service."
          />
          <FeatureCard
            icon={<ChefHat />}
            title="Experienced Chefs"
            desc="Multi-cuisine experts with decades of skill."
          />
          <FeatureCard
            icon={<Users />}
            title="Scalable Events"
            desc="From intimate parties to 2000+ guests."
          />
          <FeatureCard
            icon={<Utensils />}
            title="Custom Menus"
            desc="Tailored veg & non-veg menus."
          />

          {/* Image Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="relative rounded-xl overflow-hidden bg-[#1b2636] border border-white/5 min-h-[260px] shadow-lg group"
          >
            <img
              src="https://images.unsplash.com/photo-1555244162-803834f70033"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-all duration-700"
            />
            <div className="relative p-8 h-full flex flex-col justify-end bg-gradient-to-t from-black/90 to-transparent">
              <h3 className="font-bold text-lg">Taste the Difference</h3>
              <p className="mt-2 text-[#e2b857] flex items-center gap-1 text-sm">
                Browse Gallery <ArrowRight size={14} />
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-20 text-center bg-[#0f150f] relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="px-6 max-w-4xl mx-auto"
        >
          <div className="text-[#e2b857] text-6xl mb-6 font-serif opacity-50">
            “
          </div>
          <p className="text-[20px] md:text-[26px] font-serif italic text-gray-200">
            Mannah Caterers made our wedding unforgettable. The food and service
            were flawless.
          </p>
          <p className="mt-8 text-[#e2b857] font-bold">David & Sarah</p>
          <p className="text-xs text-gray-400 uppercase">Wedding Reception</p>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-20 py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#0f150f] border border-white/5 rounded-3xl p-12 lg:p-24 text-center"
        >
          <h2 className="text-[32px] lg:text-[44px] font-bold font-serif">
            Ready to plan your <span className="text-[#e2b857]">menu?</span>
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-gray-400">
            Let us craft a memorable culinary experience for your guests.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button
              onClick={() => navigate("/quote")}
              className="bg-[#e2b857] cursor-pointer text-black px-8 py-3.5 rounded font-bold shadow-lg"
            >
              Get a Free Quote
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="border cursor-pointer border-white/20 hover:border-[#e2b857] hover:text-[#e2b857] px-8 py-3.5 rounded"
            >
              Contact Us
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

/* COMPONENTS */

function Stat({ value, label }) {
  return (
    <div className="text-center py-8">
      <motion.h3 className="text-[36px] font-bold text-[#e2b857] font-serif">
        {value}
      </motion.h3>
      <p className="mt-2 text-xs uppercase tracking-widest text-gray-400">
        {label}
      </p>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -5 }}
      className="bg-[#1b2636] border border-white/5 rounded-xl p-8 shadow-lg"
    >
      <div className="w-12 h-12 rounded-full bg-[#151d29] flex items-center justify-center mb-4 text-[#e2b857]">
        {icon}
      </div>
      <h3 className="font-bold text-lg mb-2 font-serif">{title}</h3>
      <p className="text-sm text-gray-400">{desc}</p>
    </motion.div>
  );
}
