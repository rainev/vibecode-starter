# Vibecode Starter

A starter business website for the **Technopreneurship Workshop**. You'll turn it into your own business site by prompting AI, then put it live on the internet.

> **Draft:** This guide is still being tested and may change before the workshop.

> ⚠️ **Workshop limitation:** This is a simplified project made for learning. It saves data in **JSON files** instead of a real database, and it doesn't include user accounts, payments, or security features. It is **not** a full-scale, full-stack framework. Treat what you build as a prototype, not a finished product. See [Limitations](#limitations) below.

## Before the workshop

Make these accounts ahead of time (please don't wait until the day itself):

- [ ] A **personal Gmail** account. School accounts may block AI Studio.
- [ ] A **GitHub** account at [github.com](https://github.com)
- [ ] A **Railway** account at [railway.com](https://railway.com). Sign in with GitHub.

## Step 1: Fork this repo

Click **Fork** at the top right of this page. That puts your own copy in your GitHub account.

## Step 2: Open it in Google AI Studio

1. Go to [aistudio.google.com](https://aistudio.google.com) and open **Build**.
2. Click the **+** button in the prompt box and choose **Import from GitHub**.
3. Pick your fork, then click **Import repository**.
4. Wait for the preview to show the Kape Kanto website.

## Step 3: Vibe code your business

Describe what you want in plain English. Some prompts to start with:

- "Change the business in `business.json` to [your business idea]."
- "Change the color scheme to feel [fun / premium / eco-friendly]."
- "Add a Testimonials section with three customer reviews."
- "Add a pricing section with three plans."

Check the preview after every prompt. If something breaks, tell the AI what you see.

## Step 4: Save to GitHub

Click **Sync to GitHub**. The first time, choose **Force push to <your-repo>**. That replaces the starter code in your fork with your new version.

## Step 5: Put it online with Railway

1. In Railway, click **New Project**, then **Deploy from GitHub repo**, and pick your fork.
2. Wait for the build to finish.
3. Open **Settings**, go to **Networking**, and click **Generate Domain**.
4. Open the link. Your website is live! 🎉

From now on, every time you sync from AI Studio, Railway updates your site automatically.

## How this project works

| File | What it does |
| --- | --- |
| `src/data/business.json` | All the text on your site, saved as JSON objects |
| `src/App.tsx` | The order of sections on the page |
| `src/components/` | One file per section (Navbar, Hero, Features, ...) |
| `src/index.css` | Colors, fonts, and spacing |
| `server.js` | The server: sends your site to visitors and saves contact form messages |
| `data/messages.json` | Where contact form messages get saved |
| `package.json` | The project's settings and the tools it needs |

**What happens when someone sends a message:** The contact form sends it to `server.js`, which adds it to `data/messages.json`. Visit `/api/messages` on your site to see every saved message.

**What happens when you deploy:** Railway downloads your code, runs `npm install` to get the tools, runs `npm run build` to turn your React code into a finished website in a `dist` folder, then runs `npm start` to launch `server.js`.

## Limitations

This project is kept small on purpose so you can learn how it works. A real business app would need more:

| In this workshop | In a full-scale app |
| --- | --- |
| Data saved in JSON files | A real database (Postgres, Firestore, etc.) |
| Messages **disappear every time Railway redeploys** | Data is kept safely and backed up |
| Anyone can view `/api/messages` | Only logged-in admins can see private data |
| No user accounts or logins | Sign-up, login, and passwords |
| No payments | A payment provider (GCash, Maya, Stripe, etc.) |
| Free trial hosting that may stop after 30 days | Paid hosting that stays online |

⚠️ Don't collect real customer information (like phone numbers or addresses) with this project. Anyone who knows your URL can see the saved messages.

## Run it on your own computer (optional)

You'll need [Node.js](https://nodejs.org) version 20 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Keep your API keys secret

If you add AI features later, you'll get a `GEMINI_API_KEY`. **Never paste it into your code.** Add it in Railway under your service's **Variables** tab instead. Anything in your code can be seen by everyone on the internet.
