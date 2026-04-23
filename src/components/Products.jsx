import { useState } from "react";
import { Plus } from "lucide-react";
import kozhiada from "../assets/kozhiada.png";
import madak from "../assets/madak.png"
import ajoora from "../assets/ajoora.jpg"
import { useCart } from "../context/CartContext";

// Sample data
const productsData = [
  {
    id: 1,
    name: "Kozhiada",
    price: 600,
    weight: "1Kg",
    image: kozhiada,
    type: "non-veg",
  },
  {
    id: 2,
    name: "Madak",
    price: 250,
    weight: "1Kg",
    image: madak,
    type: "veg",
  },
  {
    id: 3,
    name: "Ajoora",
    price: 200,
    weight: "1Kg",
    image: ajoora,
    type: "veg",
  },
];

const Products = () => {
  const [category, setCategory] = useState("all");
  const { addToCart } = useCart();

  const filteredProducts =
    category === "all"
      ? productsData
      : productsData.filter((item) => item.type === category);

  return (
    <section
      id="products"
      className="bg-[#f8f6f3] py-16 px-6 md:px-28 scroll-mt-24"
    >
      {/* Title */}
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-semibold text-[#2b2b2b]">
          Best Selling Products
        </h2>

        {/* Category Filter */}
        <div className="mt-6 inline-flex bg-gray-200 rounded-full p-1 text-sm">
          <button
            onClick={() => setCategory("all")}
            className={`px-4 py-1 rounded-full transition ${
              category === "all" ? "bg-white shadow" : ""
            }`}
          >
            All
          </button>

          <button
            onClick={() => setCategory("veg")}
            className={`px-4 py-1 rounded-full transition ${
              category === "veg" ? "bg-white shadow" : ""
            }`}
          >
            Veg
          </button>

          <button
            onClick={() => setCategory("non-veg")}
            className={`px-4 py-1 rounded-full transition ${
              category === "non-veg" ? "bg-white shadow" : ""
            }`}
          >
            Non-Veg
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
          >
            {/* Image */}
            <div className="flex justify-center">
              <img
                src={item.image}
                alt={item.name}
                className="h-32 object-contain"
              />
            </div>

            {/* Content */}
            <div className="mt-4">
              <p className="text-xs text-gray-400">Bakefills</p>
              <h3 className="text-md font-semibold">{item.name}</h3>
              <p className="text-xs text-orange-500 font-medium mt-1">
                {item.weight}
              </p>

              {/* Rating */}
              <div className="text-orange-400 text-sm mt-1">
                ★★★★★
              </div>

              {/* Price + Add */}
              <div className="flex items-center justify-between mt-4">
                <span className="font-semibold">₹{item.price}</span>

                <button
                  onClick={() => addToCart(item)}
                  className="bg-[#1e2a3b] text-white p-2 rounded-full hover:bg-[#2c3e50] active:scale-90 transition"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;