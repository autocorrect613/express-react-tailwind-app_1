const express = require("express");
const app = express();
const path = require("path");

const buildPath = "./frontend/build";
app.use(express.static(path.join(__dirname, buildPath)));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, buildPath, "index.html"));
})

const PORT = process.env.PORT || 3001;
app.listen(PORT);