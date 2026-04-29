import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductShowcase from "../components/ProductShowcase";
import Promotions from "../components/Promotions";
import StoreExperience from "../components/StoreExperience";
import Gallery from "../components/Gallery";
import StoreInfo from "../components/StoreInfo";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-axis-black text-white">
      <Navbar />
      <Hero />
      <ProductShowcase />
      <Promotions />
      <StoreExperience />
      <Gallery />
      <StoreInfo />
      <FinalCTA />
      <Footer />
    </main>
  );
}