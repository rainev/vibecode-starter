// The bar at the top of the page with your business name and links.

import data from "../data/business.json";

const { business } = data;

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#" className="logo">
          {business.name}
        </a>
        <nav className="nav-links">
          <a href="#features">What We Offer</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
