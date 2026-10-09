// The small strip at the very bottom of the page.

import data from "../data/business.json";

const { business } = data;

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        © {new Date().getFullYear()} {business.name}. All rights reserved.
      </div>
    </footer>
  );
}
