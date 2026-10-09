// The "hero" is the big first section visitors see.
// It should say what you do in one glance.
//
// Try prompting: "Add a photo of coffee to the right side of the hero."

import data from "../data/business.json";

const { business } = data;

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1>{business.name}</h1>
        <p className="tagline">{business.tagline}</p>
        <p className="description">{business.description}</p>
        <a href="#features" className="button">
          {business.ctaText}
        </a>
      </div>
    </section>
  );
}
