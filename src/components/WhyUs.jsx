import { Bike, Package, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Package,
    title: "Made Fresh to Order",
    text: "Every batch of Kozhiada is prepared after you order, never sitting in storage.",
  },
  {
    icon: Bike,
    title: "Fastest Delivery",
    text: "Packed hot and rushed to your door so it reaches you just the way it left our kitchen.",
  },
  {
    icon: ShieldCheck,
    title: "Pure, Honest Ingredients",
    text: "No shortcuts, no preservatives — just the same recipe passed down through generations.",
  },
];

const WhyUs = () => {
  return (
    <section
      id="about"
      className="bg-[#f8f6f3] py-16 px-6 md:px-28 space-y-20 scroll-mt-24"
    >


      {/* WHY BAKEFILLS */}
      <div>
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2b2b2b]">
            Why Bakefills?
          </h2>
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white rounded-3xl p-6 sm:p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >
                <div className="mx-auto w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center">
                  <Icon size={24} className="text-orange-500" />
                </div>
                <h3 className="mt-5 font-semibold text-[#2b2b2b]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
