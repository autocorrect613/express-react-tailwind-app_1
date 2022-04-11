const express = require("express");
const app = express();
const path = require("path");

const buildPath = "/frontend/build";
app.use(express.static(path.join(__dirname, buildPath)));
app.set('port', (process.env.PORT || 5000));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, buildPath, "index.html"));
})

app.listen(app.get('port'));