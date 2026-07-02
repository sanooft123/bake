import heroVideo from "../assets/hero-video.mp4";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section id="home">
      <div className="relative w-full h-screen min-h-[600px] overflow-hidden bg-[#2b2b2b]">
        <Navbar />

        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="relative z-10 flex items-center h-full px-6 sm:px-10 md:px-28">
          <div className="text-center md:text-left max-w-xl mx-auto md:mx-0">
            <p className="text-orange-400 text-xs md:text-sm tracking-[0.3em] uppercase mb-4">
              Handmade &middot; Traditional &middot; Fresh
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-white">
              Meet Our Signature <br />
              Kozhiada
            </h1>

            <p className="mt-5 text-sm md:text-base text-gray-200 opacity-90 max-w-md mx-auto md:mx-0">
              At Bakefills, we pour tradition into every twist of dough. Right
              now we're pouring all of it into one thing &mdash; our
              crispy-outside, juicy-inside Kozhiada, made fresh to order.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#products"
                className="bg-orange-500 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-orange-600 transition"
              >
                Order Kozhiada
              </a>
              <a
                href="#about"
                className="border border-white/60 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition"
              >
                Our Story
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
