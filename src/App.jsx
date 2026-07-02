import CartModal from "./components/CartModal";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Products from "./components/Products";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Hero />
      <WhyUs />
      <Products />
      
      <Testimonials />
      <Contact />
      <Footer />

      <CartModal/>
    </>
  );
}

export default App;