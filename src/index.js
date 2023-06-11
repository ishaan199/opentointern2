// "mongodb+srv://ishaan:ishaan007@cluster1.wumfpap.mongodb.net/openToIntern";
const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes/route");
const app = express();

app.use(express.json());


let url =
  "mongodb+srv://ishaan:ishaan007@cluster1.wumfpap.mongodb.net/openToIntern";
let port = process.env.PORT || 3000;

mongoose
  .connect(url, { useNewUrlParser: true })
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

app.use("/", route);

app.listen(port, function () {
  console.log("Express app running on port " + port);
});