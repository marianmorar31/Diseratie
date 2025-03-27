import express from "express";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Product Service is up and running booyah!");
});

console.log("Hallo 222");

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Product Service running on port ${PORT}`));
