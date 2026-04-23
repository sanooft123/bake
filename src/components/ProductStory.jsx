import kozhiada from "../assets/kozhiada.png";
import madak from "../assets/madak.png";
import ajoora from "../assets/ajoora.jpg";

const ProductStory = () => {
  return (
    <section
      id="about"
      className="bg-[#f8f6f3] py-16 px-6 md:px-28 space-y-20"
    >

      {/* KOZHIADA */}
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Image */}
        <div className="flex items-center justify-center">
          <img
            src={kozhiada}
            alt="Kozhiada"
            className="rounded-2xl"
          />
        </div>

        {/* Content */}
        <div>
          <p className="text-orange-500 text-xs tracking-widest uppercase">
            Signature Dish
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-[#2b2b2b] mt-2">
            Kozhiada – Crispy Outside, <br />
            Juicy Inside
          </h2>

          <p className="mt-4 text-gray-600 text-sm leading-relaxed max-w-md">
            Kozhiada is one of our most loved specialties at Bakefills.
            Made with a perfectly seasoned chicken filling wrapped in
            a soft dough and fried to golden perfection, it delivers
            a rich and satisfying bite every time. It’s a true taste
            of homemade comfort and traditional flavor.
          </p>
        </div>
      </div>

      {/* MADAK */}
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Content */}
        <div>
          <p className="text-orange-500 text-xs tracking-widest uppercase">
            Sweet Delight
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-[#2b2b2b] mt-2">
            Madak – A Traditional <br />
            Sweet Experience
          </h2>

          <p className="mt-4 text-gray-600 text-sm leading-relaxed max-w-md">
            Madak brings back nostalgic flavors with its soft outer
            layer and rich sweet filling inside. Carefully prepared
            using traditional methods, it offers the perfect balance
            of texture and sweetness. Every bite melts in your mouth,
            making it a delightful treat for any occasion.
          </p>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center">
          <img
            src={madak}
            alt="Madak"
            className="rounded-2xl"
          />
        </div>
      </div>

      {/* AJOORA */}
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Image */}
        <div className="flex items-center justify-center">
          <img
            src={ajoora}
            alt="Ajoora"
            className="rounded-2xl"
          />
        </div>

        {/* Content */}
        <div>
          <p className="text-orange-500 text-xs tracking-widest uppercase">
            Traditional Snack
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-[#2b2b2b] mt-2">
            Ajoora – Light, Tasty <br />
            & Timeless
          </h2>

          <p className="mt-4 text-gray-600 text-sm leading-relaxed max-w-md">
            Ajoora is a simple yet flavorful traditional snack that
            perfectly complements your tea-time cravings. Made with
            carefully selected ingredients, it offers a light texture
            with a subtle sweetness. Its authentic taste makes it a
            favorite across all age groups.
          </p>
        </div>
      </div>

    </section>
  );
};

export default ProductStory;