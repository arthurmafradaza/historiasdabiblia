import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Bonuses from "@/components/Bonuses";


import PostPricing from "@/components/PostPricing";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen font-sans bg-white selection:bg-brand-pink selection:text-white">
      <Header />
      <Hero />
      <Categories />
      <Bonuses />


      <PostPricing />
      <Footer />
    </div>
  );
}
