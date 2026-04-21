import { Search, ShoppingBag } from "lucide-react";
import kozhiada from "../assets/kozhiada.png";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section id="home">
      <div className="relative mb-20 w-full bg-gradient-to-b from-[#2b2b2b] via-[#ffffff] to-white overflow-hidden">

      <Navbar/>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-28 mt-10 md:mt-28">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-3xl md:text-6xl font-bold leading-tight text-[#2b2b2b]">
            Freshly Baked <br />
            Happiness in Every Bite
          </h1>

          <p className="mt-5 text-sm md:text-base text-[#444] opacity-80">
            Discover the taste of tradition with a modern twist.
            From crispy Kozhiada to delightful baked treats,
            Bakefills brings warmth to every bite.
          </p>

          {/* Search */}
          <div className="mt-6 mb-10 flex items-center bg-white shadow-md rounded-full p-2 w-full max-w-md">
            <input
              type="text"
              placeholder="Search for baked goodies..."
              className="flex-1 bg-transparent outline-none px-4 text-sm placeholder-gray-500"
            />

            <button className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition">
              <Search size={18} className="text-white" />
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative mb-10 md:mb-0">
          <img
            src={kozhiada}
            alt="Kozhiada"
            className="w-[260px] md:w-[420px] drop-shadow-2xl"
          />

          {/* Glow effect */}
          <div className="absolute inset-0 bg-orange-200 blur-3xl opacity-30 -z-10"></div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>

    </section>
    
  );
};

export default Hero;