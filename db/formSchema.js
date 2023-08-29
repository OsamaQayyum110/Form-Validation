const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: String,
  gender: String,
  position: String,
  comment: String,
});

module.exports = mongoose.model("form", formSchema);