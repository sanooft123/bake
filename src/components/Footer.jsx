import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import logo from "../assets/bakefills.png";
const Footer = () => {
  return (
    <footer className="bg-[#2b2b2b] text-white px-6 md:px-40 py-12">

      {/* Top Section */}
      <div className="grid md:grid-cols-3 gap-8 ">

        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <img src={logo} alt="BakeFills Logo" className="h-16" />
          
        </div>

        <div className="mt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Bakefills. All rights reserved.
      </div>

        <div className="flex flex-col items-center md:items-end gap-4 px-10">
          <p className="text-center text-sm text-gray-300 leading-relaxed">
            Freshly baked delights made with love and tradition.
            Bringing happiness in every bite.
          </p>
        </div>

 

      </div>
      
    </footer>
  );
};

export default Footer;