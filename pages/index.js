import Categorie from "../components/Categorie";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Product from "../components/Product";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Product />
      <Categorie />
      <Footer />
    </div>
  );
}
