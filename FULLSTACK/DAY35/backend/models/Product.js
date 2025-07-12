const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
  ratings: [
    {
      user: String,
      rating: Number,
      comment: String,
    },
  ],
});

module.exports = mongoose.model("Product", productSchema);
