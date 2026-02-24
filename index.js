import express from "express";

const app = express();
app.use(express.json({ type: "*/*" }));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.status(200).send("Server running ✅"));

// ✅ Accept GET (Cashfree test sometimes does GET)
app.get("/cashfree-webhook", (req, res) => {
  return res.status(200).send("Webhook endpoint active ✅");
});

// ✅ Accept POST (real webhooks)
app.post("/cashfree-webhook", (req, res) => {
  console.log("Cashfree webhook received:", req.body);
  return res.status(200).send("OK");
});

// ✅ fallback
app.all("*", (req, res) => res.status(200).send("OK"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Listening on", PORT));
