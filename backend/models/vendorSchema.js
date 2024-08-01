const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema({
  vendor: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  categories: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
});

const Vendor = mongoose.model("Vendor", vendorSchema);

module.exports = Vendor;
