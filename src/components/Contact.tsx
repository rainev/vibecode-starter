// How customers can reach you, plus a form that saves messages.
// When someone submits the form, the browser sends the message to
// the server (server.js), which saves it into data/messages.json.
//
// ⚠️ Workshop limitation: that JSON file is NOT a real database.
// Messages are wiped whenever the site is redeployed.

import { useState, type FormEvent } from "react";
import data from "../data/business.json";

const { contact } = data;

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = Object.fromEntries(new FormData(form));

    setStatus("sending");
    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Request failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <h2>Get in Touch</h2>
        <div className="contact-grid">
          <ul className="contact-list">
            <li>
              <span>Email</span>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <span>Phone</span>
              <a href={`tel:${contact.phone}`}>{contact.phone}</a>
            </li>
            <li>
              <span>Visit us</span>
              {contact.address}
            </li>
          </ul>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input name="name" placeholder="Your name" required />
            <input name="email" type="email" placeholder="Your email" required />
            <textarea name="message" placeholder="Your message" rows={4} required />
            <button className="button" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "sent" && <p className="form-note">Thanks! Your message was saved.</p>}
            {status === "error" && (
              <p className="form-note">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
