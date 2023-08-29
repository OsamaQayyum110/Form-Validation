const express = require("express");
require("./db/config");
const Form = require("./db/formSchema");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/register", async (req, res) => {
  let form = new Form(req.body);
  let result = await form.save();
  result = result.toObject();
  console.log(result);
  res.send(result);
});

const PORT = 4500;
app.listen(PORT, () => {
  console.log(`server listen at ${PORT}`);
});
