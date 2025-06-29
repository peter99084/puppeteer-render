const express = require("express");
const { scrapeLogic } = require("./scrapeLogic");

const app = express();

// ✅ Bind to PORT provided by Render, fallback to 4000 locally
const PORT = process.env.PORT || 4000;

// 👇 Optional: Log incoming requests (for debugging)
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// 🧠 Scraping endpoint
app.get("/scrape", async (req, res) => {
  try {
    await scrapeLogic(res);
  } catch (error) {
    console.error("Error during scraping:", error);
    res.status(500).send("Scraping failed.");
  }
});

// 🔹 Health check or root endpoint
app.get("/", (req, res) => {
  res.send("Render Puppeteer server is up and running!");
});

// ✅ Bind to 0.0.0.0 for cloud hosting compatibility
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server is listening on http://0.0.0.0:${PORT}`);
});
