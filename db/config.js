const mongoose = require("mongoose");
// mongoose.connect(
//   "mongodb+srv://osamaqayyum110:Oq*12345@cluster0.ajandn6.mongodb.net/?retryWrites=true&w=majority"
// );
mongoose
  .connect("mongodb://127.0.0.1:27017")
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));
