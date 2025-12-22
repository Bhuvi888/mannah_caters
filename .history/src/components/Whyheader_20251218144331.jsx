import { motion } from "framer-motion";
import { Utensils } from "lucide-react";
import { Link } from "react-router-dom";

const SpecialHeader = () => {
  return (
    <div className="relative z-10">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-5 lg:px-5 py-4 bg-[#0c120c]/80 backdrop-blur-md border-b border-white/10"
      >
        <div className="flex items-center gap-2 text-xl font-bold tracking-tight font-serif cursor-pointer">
          <span className="text-[#e2b857]">
            <Utensils size={24} className="fill-current" />
          </span>
          Mannah Caterers
        </div>

        <div className="hidden md:flex gap-10 text-[20px] font-medium text-gray-300 tracking-wide">
          <Link to="/" className="hover:text-[#e2b857] transition-colors">
            Home
          </Link>
          <Link to="/menu" className="hover:text-[#e2b857] transition-colors">
            Menu
          </Link>
          <Link
            to="/contact"
            className="hover:text-[#e2b857] transition-colors"
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
    </div>
  );
};

export default SpecialHeader;
