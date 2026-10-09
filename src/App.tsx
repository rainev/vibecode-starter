// =============================================================
// THE PAGE LAYOUT
// A React website is built from "components": small,
// reusable pieces. This file stacks them top to bottom.
//
// Try prompting: "Add a Testimonials section between
// Features and Contact."
// =============================================================

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
