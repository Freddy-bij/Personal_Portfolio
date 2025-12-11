const express = require("express");
const cors = require("cors");
require("dotenv").config(); 

const router = require("./routes/Contact.route.js");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://freddy-personal-portfolio.vercel.app" 
  ],
  methods: "GET,POST,PUT,DELETE,OPTIONS",
  credentials: true
}));

app.options("*", cors());  

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.get("/", (req, res) => {
  res.json("Portfolio api is running");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong"
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

