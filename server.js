const express = require("express");
const app = express();

const buildPath = "./frontend/build";
app.use(express.static(buildPath));
app.set('port', (process.env.PORT || 5000));

app.get("/", (req, res) => {
  res.sendFile(`${buildPath}/index.html`);
})

app.listen(app.get('port'));