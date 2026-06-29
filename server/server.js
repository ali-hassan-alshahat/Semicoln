const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const usersRoutes = require("./routes/auth.route");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", usersRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => console.log("DB Connected"));

app.listen(5000, () => {
  console.log("Server running");
});
