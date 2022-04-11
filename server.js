const express = require("express");
const app = express();

const buildPath = "./dist/";
app.use(express.static(buildPath));
app.use(express.static(buildPath + "static/"));

app.set('port', (process.env.PORT || 5000));

app.get("/", (req, res) => {
  res.sendFile(`${buildPath}/index.html`, (err) => {
    res.json({"statuss": "neizdevās pārsūtīt failu bļeģ"})
  });
})

app.listen(app.get('port'));