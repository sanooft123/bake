const testimonials = [
  {
    id: 1,
    name: "Ameen Rahman",
    role: "Food Lover",
    review:
      "The Kozhiada was absolutely delicious! Crispy outside and juicy inside. Felt like homemade.",
  },
  {
    id: 2,
    name: "Sneha Nair",
    role: "Customer",
    review:
      "Bakefills never disappoints. Fresh, tasty and perfectly baked every time!",
  },
  {
    id: 3,
    name: "Arjun Das",
    role: "Regular Buyer",
    review:
      "Best bakery snacks in town. The flavors are rich and authentic.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white py-16 px-6 md:px-28">

      {/* Title */}
      <div className="text-center">
        <p className="text-orange-500 text-xs tracking-widest uppercase">
          Testimonials
        </p>
        <h2 className="text-2xl md:text-4xl font-semibold text-[#2b2b2b] mt-2">
          What Our Customers Say
        </h2>
      </div>

      {/* Cards */}
      <div className="mt-12 grid md:grid-cols-3 gap-8">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-[#f8f6f3] rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300"
          >
            {/* Profile (No Image) */}
            <div>
              <h4 className="text-md font-semibold">{item.name}</h4>
              <p className="text-xs text-gray-500">{item.role}</p>
            </div>

            {/* Review */}
            <p className="text-sm text-gray-600 mt-4 leading-relaxed">
              "{item.review}"
            </p>

            {/* Stars */}
            <div className="text-orange-400 text-sm mt-4">
              ★★★★★
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;