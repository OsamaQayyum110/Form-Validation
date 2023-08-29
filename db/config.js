const mongoose = require("mongoose");

mongoose
  .connect("URL")
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));
