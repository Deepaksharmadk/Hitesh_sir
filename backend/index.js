require("dotenv").config();
const express = require("express");
const app = express();
console.log(app);
console.log(process.env);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/twitter", (req, res) => {
  res.send("Hello Deepak sharma");
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
app.s;
