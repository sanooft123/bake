import CartModal from "./components/CartModal";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Products from "./components/Products";
import ProductStory from "./components/ProductStory";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Hero />
      <Products />
      <ProductStory />
      <Testimonials />
      <Footer />

      <CartModal/>
    </>
  );
}

export default App;