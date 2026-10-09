// =============================================================
// THE SERVER
// This file runs your website, both on your computer and on
// Railway. It has two jobs:
//   1. Send your website to anyone who visits your URL.
//   2. Save contact form messages into data/messages.json.
//
// ⚠️ WORKSHOP LIMITATION: messages are saved in a plain JSON
// file, not a real database. On Railway the file is reset every
// time you redeploy, so saved messages will disappear. A real
// business app would use a database (like Postgres or Firestore).
// =============================================================

import express from "express";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === "production";
const MESSAGES_FILE = path.join(__dirname, "data", "messages.json");

// Railway tells us which port to use through the PORT variable.
// On your own computer we fall back to 3000.
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

// ---------- API: the server's "back office" ----------

async function readMessages() {
  try {
    return JSON.parse(await fs.readFile(MESSAGES_FILE, "utf8"));
  } catch {
    return [];
  }
}

// A simple health check: visit /api/health to see if the server is alive.
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

// See every saved message: visit /api/messages
app.get("/api/messages", async (_req, res) => {
  res.json(await readMessages());
});

// Save a new message sent from the contact form.
app.post("/api/messages", async (req, res) => {
  const { name, email, message } = req.body ?? {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  const messages = await readMessages();
  const newMessage = {
    id: Date.now(),
    name: String(name).slice(0, 100),
    email: String(email).slice(0, 100),
    message: String(message).slice(0, 1000),
    createdAt: new Date().toISOString(),
  };
  messages.push(newMessage);

  await fs.mkdir(path.dirname(MESSAGES_FILE), { recursive: true });
  await fs.writeFile(MESSAGES_FILE, JSON.stringify(messages, null, 2));
  res.status(201).json(newMessage);
});

// ---------- The website itself ----------

if (isProduction) {
  // "dist" is the folder created by `npm run build`.
  // It holds the final, optimized version of your website.
  const distPath = path.join(__dirname, "dist");
  app.use(express.static(distPath));
  app.get("*", (_req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
} else {
  // While developing, Vite rebuilds the site every time you save a file.
  const { createServer } = await import("vite");
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: "spa",
  });
  app.use(vite.middlewares);
}

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
