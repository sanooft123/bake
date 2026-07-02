import { ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";
import logo from "../assets/bakefills.png";

const Navbar = () => {
  const { cart, setIsCartOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cart count
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-16 py-4 text-white transition-all duration-300 ${
        scrolled
          ? "bg-[#2b2b2b]/90 backdrop-blur-md shadow-md"
          : "bg-gradient-to-b from-black/40 to-transparent backdrop-blur-md"
      }`}
    >
      {/* Logo */}
      <h1 className="text-xl font-semibold tracking-wide cursor-pointer">
        <a href="#home">
          <img src={logo} alt="BakeFills Logo" className="h-9 md:h-10" />
        </a>
      </h1>

      {/* Cart */}
      <div
        onClick={() => setIsCartOpen(true)}
        className="relative cursor-pointer"
      >
        <ShoppingBag size={20} />

        <span className="absolute -top-2 -right-2 bg-orange-500 text-[10px] px-1.5 py-0.5 rounded-full">
          {cartCount}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
