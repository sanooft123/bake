import { useEffect, useState } from "react";
import logo from "../assets/bakefills.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-16 py-4 text-white transition-all duration-300 ${
        scrolled
          ? "bg-[#2b2b2b]/90 backdrop-blur-md shadow-md"
          : "bg-gradient-to-b from-black/40 to-transparent backdrop-blur-md"
      }`}
    >
      {/* Logo */}
      <div className="text-xl font-semibold tracking-wide cursor-pointer">
        <a href="#home" aria-label="Bakefills home">
          <img src={logo} alt="Bakefills" className="h-9 md:h-10" />
        </a>
      </div>

    </nav>
  );
};

export default Navbar;
