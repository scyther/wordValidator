const express = require("express");
const path = require("path");
const cors = require("cors");
const { searchWord } = require("./controllers/word");
require("dotenv").config();

const app = express();
// var bodyParser = require('body-parser');
// app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 3000;

app.get("/api/search/:word", searchWord);

app.use("/", express.static(path.join(__dirname, "./client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Express App listening on ${port}`);
});
