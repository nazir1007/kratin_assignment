const mongoose = require("mongoose");

const HealthSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Health = mongoose.model("Health", HealthSchema);

module.exports = Health;