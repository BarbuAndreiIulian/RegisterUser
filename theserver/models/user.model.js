const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    qoute: { type: String },
  },
  { collection: "RegisterData" }
);

const model = mongoose.model("UserDataModel2", User);

module.exports = model;
