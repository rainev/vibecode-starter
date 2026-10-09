// Shows one card for each item in the `features` list in data/business.json.
// `.map()` means "do this for every item in the list".

import data from "../data/business.json";

const { features } = data;

export default function Features() {
  return (
    <section id="features" className="section">
      <div className="container">
        <h2>What We Offer</h2>
        <div className="card-grid">
          {features.map((feature) => (
            <div key={feature.title} className="card">
              <div className="card-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
