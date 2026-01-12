import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, MessageCircle } from "lucide-react";
import DecryptedText from "./DecryptedText";

const Footer = () => {
  const location = useLocation();
  const isWhyPage = location.pathname === "/why-us";

  return (
    <footer
      className={`
        border-t transition-colors duration-300
        ${
          isWhyPage
            ? "bg-[#0c120c]/90 border-white/10"
            : "bg-[#013220]/95 border-[#24473b]"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-4 text-sm text-[#94a3b8]">
        {/* Brand */}
        <div>
          <h4 className="text-[#d4af37] font-bold text-base">
            Mannah Caterers
          </h4>
          <p className="mt-3 leading-relaxed max-w-xs">
            Non-Veg wedding & event catering specialists in Chennai, known for
            rich biryani, premium starters, and live counters.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-[#d4af37] font-bold mb-4">Quick Links</h4>
          <ul className="space-y-3">
            <li>
              <Link to="/menu" className="hover:text-white transition-colors">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/why-us" className="hover:text-white transition-colors">
                Why Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[#d4af37] font-bold mb-4">Contact Us</h4>

          <div className="space-y-3">
            {/* Phone 1 */}
            <a
              href="tel:+919884560607"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-[#d4af37]" />
              +91 98845 60607
            </a>

            {/* Phone 2 */}
            <a
              href="tel:+919884860607"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-[#d4af37]" />
              +91 98848 60607
            </a>

            {/* Email */}
            <a
              href="mailto:mannahcaterers07@gmail.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-[#d4af37]" />
              mannahcaterers07@gmail.com
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919884560607"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#d4af37] hover:underline"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="md:text-right text-xs flex items-end text-[#64748b]">
          © {new Date().getFullYear()} Mannah Caterers.
          <br />
          All rights reserved.
        </div>
      </div>

      {/* Developer Credit */}
      <div className="border-t border-[#24473b]/50 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-center">
          <a
            href="https://buildyourgenie.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#64748b] hover:text-[#d4af37] transition-colors flex items-center gap-1.5"
          >
            <span>Developed by</span>
            <DecryptedText
              text="B.U.G — Build Your Genie"
              speed={40}
              maxIterations={15}
              sequential={true}
              revealDirection="center"
              className="text-[#d4af37]"
              encryptedClassName="text-[#94a3b8]"
              animateOn="hover"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
