import React from "react";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";
import Products from "../../components/Products/Products";
import Testimonials from "../../components/Testimonials/Testimonials";
import Blog from "../../components/Blog/Blog";
import Footer from "../../components/Footer/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Products />
      <Testimonials />
      <Blog />
      <Footer />
    </main>
  );
}


