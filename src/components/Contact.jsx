import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const contactDetails = [
  { icon: Phone, label: "+91 7012471862", href: "tel:+917012471862" },
  { icon: Mail, label: "bakefillsfoods@gmail.com", href: "mailto:bakefillsfoods@gmail.com" },
  { icon: MapPin, label: "Calicut, Kerala", href: null },
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    // ✅ Validation
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      await emailjs.send(
        "bakefills_serv_mail_sonu",   // 🔁 replace
        "template_8oibhto",  // 🔁 replace
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "ZzjqfdLZCfVy6FJxO"    // 🔁 replace
      );

      setSuccess(true);

      // reset form
      setForm({
        name: "",
        email: "",
        message: "",
      });

    } catch (err) {
      console.error(err);
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#f8f6f3] py-16 px-6 md:px-16 scroll-mt-24"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-semibold text-[#2b2b2b]">
          Let's Talk About Your Order
        </h2>

        <p className="mt-3 text-gray-600 text-sm md:text-base max-w-md mx-auto">
          Freshly made snacks, catering, bulk orders &amp; custom requests.
        </p>
      </div>

      <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8">
        {/* Contact info */}
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <h3 className="font-semibold text-[#2b2b2b] mb-6">Contact Info</h3>

          <div className="space-y-5">
            {contactDetails.map((detail) => {
              const Icon = detail.icon;
              const Wrapper = detail.href ? "a" : "div";
              return (
                <Wrapper
                  key={detail.label}
                  {...(detail.href ? { href: detail.href } : {})}
                  className="flex items-center gap-4 text-sm text-gray-700 hover:text-orange-500 transition"
                >
                  <span className="w-10 h-10 shrink-0 rounded-full bg-orange-50 flex items-center justify-center">
                    <Icon size={18} className="text-orange-500" />
                  </span>
                  {detail.label}
                </Wrapper>
              );
            })}
          </div>

          <div className="flex gap-4 mt-8">
            <FaFacebook className="cursor-pointer text-gray-500 hover:text-orange-500 transition" size={20} />
            <FaInstagram className="cursor-pointer text-gray-500 hover:text-orange-500 transition" size={20} />
            <FaTwitter className="cursor-pointer text-gray-500 hover:text-orange-500 transition" size={20} />
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl p-8 shadow-sm text-left">
          <h3 className="font-semibold text-[#2b2b2b] mb-6">Contact Form</h3>

          <div className="space-y-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full p-3 border rounded-lg text-sm"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 border rounded-lg text-sm"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              rows="4"
              className="w-full p-3 border rounded-lg text-sm"
            />

            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-orange-500 text-white py-3 rounded-lg text-sm font-medium hover:bg-orange-600 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Success Message */}
            {success && (
              <p className="text-green-600 text-center text-sm">
                ✅ Message sent successfully!
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
