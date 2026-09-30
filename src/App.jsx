import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Menu from "./components/Menu";
import WhyChooseUs from "./components/WhyChooseUs";
import SignatureDishes from "./components/SignatureDishes";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <Preloader onComplete={() => setLoading(false)} />
      )}

      <div
        className={`website-wrapper ${
          loading ? "website-wrapper--hidden" : "website-wrapper--visible"
        }`}
      >
        <div className="min-h-screen bg-[#f8f5ef] text-[#2d2119]">

          <Navbar />

          <main>
            <Hero />
            <About />
            <Services />
            <Menu />
            <WhyChooseUs />
            <SignatureDishes />
            <Gallery />
            <Testimonials />
            <Booking />
          </main>

          <Footer />

        </div>
      </div>
    </>
  );
}

export default App;