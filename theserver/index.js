const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const model = require("./models/user.model");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/registerdata");

app.post("/api/register", (req, res) => {
  console.log(req.body);

  try {
    const user = model.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.json({ status: "user created" });
  } catch (err) {
    res.json({ status: "error", error: "Duplicate email" });
  }
});

app.listen(9000, () => console.log("Server started on port 9000"));
