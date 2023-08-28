import express from "express";
import os from "os";

const app= express();
const port = 3000;


app.get("/", (req, res) => {
  console.log(`Request from version 2 : ${os.hostname()}`);
  res.send("Hello World from version 2 wee  ${os.hostname()}");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
