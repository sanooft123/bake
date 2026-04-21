import { useCart } from "../context/CartContext";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const CartModal = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);

  if (!isCartOpen) return null;

  // 💰 Calculations
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const discount = total > 300 ? total * 0.1 : 0;
  const finalAmount = total - discount;

  // 🔄 Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🚀 Submit
  const handleSubmit = async () => {
    // ✅ Validation
    if (!form.name || !form.phone || !form.email || !form.address) {
        alert("Please fill all required fields");
        return;
    }

    if (!/^[0-9]{10}$/.test(form.phone)) {
        alert("Enter valid phone number");
        return;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
        alert("Enter valid email address");
        return;
    }

    if (cart.length === 0) {
        alert("Cart is empty");
        return;
    }

    const orderText = cart
        .map(
        (item) =>
            `${item.name} x ${item.quantity} = ₹${
            item.price * item.quantity
            }`
        )
        .join("\n");

    try {
        setLoading(true);

        // 📧 1. Send order to ADMIN
        await emailjs.send(
        "bakefills_serv_mail_sonu",
        "bakefills_tem_mail_sonu",
        {
            name: form.name,
            phone: form.phone,
            email: form.email,
            address: form.address,
            order: orderText,
            total: finalAmount,
        },
        "ZzjqfdLZCfVy6FJxO"
        );

        // 📧 2. Send confirmation to CUSTOMER
        await emailjs.send(
        "bakefills_serv_mail_sonu",
        "template_dbg55ml",
        {
            name: form.name,
            email: form.email,
            order: orderText,
            total: finalAmount,
        },
        "ZzjqfdLZCfVy6FJxO"
        );

        // ✅ Success
        alert("Order placed successfully! Check your email.");

        // 🔄 Reset form
        setForm({
        name: "",
        phone: "",
        email: "",
        address: "",
        });

        // 🛒 Optional: clear cart (recommended)
        // setCart([]);

        setIsCartOpen(false);

    } catch (err) {
        console.error(err);
        alert("Failed to place order. Please try again.");
    } finally {
        setLoading(false);
    }
    };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      
      <div className="bg-white w-full max-w-2xl rounded-2xl p-6 relative">

        {/* Close */}
        <button
          onClick={() => setIsCartOpen(false)}
          className="absolute top-3 right-4 text-lg hover:text-red-500"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>

        {/* 🛒 Items */}
        <div className="space-y-4 max-h-60 overflow-y-auto pr-2">
          {cart.length === 0 ? (
            <p className="text-sm text-gray-500">Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-3"
              >
                {/* Item */}
                <div className="flex-1">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-xs text-gray-500">
                    ₹{item.price} × {item.quantity}
                  </p>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-2 mx-4">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="w-7 h-7 flex items-center justify-center rounded bg-gray-200 hover:bg-orange-400 hover:text-white transition"
                  >
                    <Minus size={16} />
                  </button>

                  <span className="text-sm font-medium w-5 text-center">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="w-7 h-7 flex items-center justify-center rounded bg-gray-200 hover:bg-orange-400 hover:text-white transition"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                {/* Price */}
                <div className="w-16 text-right font-semibold text-sm">
                  ₹{item.price * item.quantity}
                </div>
              </div>
            ))
          )}
        </div>

        {/* 💰 Summary */}
        <div className="mt-6 text-sm space-y-2 border-t pt-4">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹{total}</span>
          </div>

          <div className="flex justify-between text-green-600">
            <span>Discount</span>
            <span>-₹{discount}</span>
          </div>

          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>₹{finalAmount}</span>
          </div>
        </div>

        {/* 📝 Form */}
        <div className="mt-6 space-y-3">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg"
          />

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full border p-3 rounded-lg"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Delivery Address"
            rows="3"
            className="w-full border p-3 rounded-lg"
          />

          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
          >
            {loading ? "Placing Order..." : "Place Order"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;