const express = require("express");

const app = express();
const port = process.env.PORT || 4000;

app.post("/iot-mt700", (req, res) => {
  res.sendStatus(200);
  res.send("Hello - World");
});

app.listen(port, () => {
  console.log(`Open port on ${port}`);
});
