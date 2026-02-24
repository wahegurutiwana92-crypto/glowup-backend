import express from "express";

const app = express();
app.use(express.json({ type: "*/*" }));

app.get("/", (req, res) => res.send("Server running"));

app.post("/cashfree-webhook", (req, res) => {
  console.log("Cashfree webhook:", req.body);
  res.status(200).send("OK");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Listening on", PORT));