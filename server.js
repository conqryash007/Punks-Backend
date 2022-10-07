const express = require("express");
const app = express();
let cors = require("cors");

const { updatePrice } = require("./controller/updatePricing");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ ok: true, msg: "Crypt3DPunks Backend" });
});
app.get("/start", updatePrice);

const PORT = process.env.PORT || 3000;
//Start the server
app.listen(PORT, () => {
  console.log(`The application started successfully on port ${PORT}`);
});
