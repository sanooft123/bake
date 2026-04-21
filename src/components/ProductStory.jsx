import kozhiada from "../assets/kozhiada.png";

const ProductStory = () => {
  return (
    <section id="about" className="bg-[#f8f6f3] py-16 px-6 md:px-28 space-y-20">

      {/* TOP SECTION */}
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Image */}
        <div className="relative flex items-center justify-center">
          <img
            src={kozhiada}
            alt="Kozhiada"
            className="rounded-2xl"
          />
        </div>

        {/* Content */}
        <div>
          <p className="text-orange-500 text-xs tracking-widest uppercase">
            Experience
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-[#2b2b2b] mt-2">
            Taste the Authentic <br />
            Homemade Goodness
          </h2>

          <p className="mt-4 text-gray-600 text-sm leading-relaxed max-w-md">
            At Bakefills, every product is crafted with care using
            traditional recipes and fresh ingredients. We bring you
            the perfect balance of taste, quality, and comfort in
            every bite.
          </p>

          <button className="mt-5 text-orange-500 font-medium hover:underline">
            Explore More →
          </button>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Content */}
        <div>
          <p className="text-orange-500 text-xs tracking-widest uppercase">
            Ingredients
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-[#2b2b2b] mt-2">
            Fresh & Quality <br />
            Ingredients Only
          </h2>

          <p className="mt-4 text-gray-600 text-sm leading-relaxed max-w-md">
            We use only the finest ingredients to ensure every bite
            is rich in flavor and freshness. No shortcuts, no compromise—
            just pure bakery excellence.
          </p>

          <button className="mt-5 text-orange-500 font-medium hover:underline">
            Learn More →
          </button>
        </div>

        {/* Image Grid */}
        <div className="relative flex items-center justify-center">
          <img
            src={kozhiada}
            alt="Kozhiada"
            className="rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductStory;