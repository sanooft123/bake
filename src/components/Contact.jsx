import { useState } from "react";
import emailjs from "@emailjs/browser";

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
      <div className="max-w-xl mx-auto text-center">
        
        <h2 className="text-3xl font-semibold text-[#2b2b2b]">
          Contact Us
        </h2>

        <p className="mt-3 text-gray-600 text-sm">
          Have questions or feedback? Send us a message!
        </p>

        {/* Form */}
        <div className="mt-8 space-y-4 text-left">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 border rounded-lg"
          />

          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Success Message */}
          {success && (
            <p className="text-green-600 text-center">
              ✅ Message sent successfully!
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;