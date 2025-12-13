const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./routes/Contact.route.js");

require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://freddy-personal-portfolio.vercel.app"
  ],
  methods: ["GET", "POST", "OPTIONS"],
  credentials: true
}));



app.use(express.json());
app.use("/api/contact", router);

app.get("/", (req, res) => {
  res.send("Backend is running...");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
