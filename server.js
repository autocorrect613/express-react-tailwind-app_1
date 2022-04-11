const express = require("express");
const app = express();

const buildPath = "./frontend/build";
app.use(express.static(buildPath));

app.get("/", (req, res) => {
  res.sendFile(`${buildPath}/index.html`);
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log("Listening to port ", PORT));