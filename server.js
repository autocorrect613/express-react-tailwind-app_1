require('dotenv').config();
const express = require("express");
const app = express();

const DEPLOY = (parseInt(process.env.DEPLOY));
const buildPath = DEPLOY ? "./dist" : "./frontend/build";

app.use(express.static(buildPath));
app.use(express.static(buildPath + "static/"));

app.set('port', (process.env.PORT || 5000));

app.get("/", (req, res) => {
  res.sendFile(`${buildPath}/index.html`, (err) => {
    res.json({"error": err})
  });
})

app.listen(app.get('port'));