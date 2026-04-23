import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import logo from "../assets/bakefills.png";
const Footer = () => {
  return (
    <footer className="bg-[#2b2b2b] text-white px-6 md:px-28 py-12">

      {/* Top Section */}
      <div className="grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <img src={logo} alt="BakeFills Logo" className="h-16 mt-4" />
          <p className="mt-4 text-sm text-gray-300 leading-relaxed">
            Freshly baked delights made with love and tradition.
            Bringing happiness in every bite.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-orange-400 cursor-pointer">Home</li>
            <li className="hover:text-orange-400 cursor-pointer">Products</li>
            <li className="hover:text-orange-400 cursor-pointer">About</li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-orange-400 cursor-pointer">Veg</li>
            <li className="hover:text-orange-400 cursor-pointer">Non-Veg</li>
            <li className="hover:text-orange-400 cursor-pointer">Specials</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <p className="text-sm text-gray-300">📍 Calicut, Kerala</p>
          <p className="text-sm text-gray-300 mt-2">📞 +91 9744827013</p>
          <p className="text-sm text-gray-300 mt-2">✉️ bakefillsfoods@gmail.com</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <FaFacebook className="cursor-pointer hover:text-orange-400" size={18} />
            <FaInstagram className="cursor-pointer hover:text-orange-400" size={18} />
            <FaTwitter className="cursor-pointer hover:text-orange-400" size={18} />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-600 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Bakefills. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;