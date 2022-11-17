const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    inventory: {
      type: Number,
    },
    sold: {
      type: Number,
    },
    type: { type: String, require: true },
    nation: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("account", accountSchema);
