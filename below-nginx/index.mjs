import express from "express";
import os from "os";
import fetch from "node-fetch";
const app= express();
const port = 3000;


app.get("/", (req, res) => {
  console.log(`Request from version 2 : ${os.hostname()}`);
  res.send(`Hello World from version 2 wee  ${os.hostname()}`);
});


app.get("/ngnix",async  (req, res) => {
  const url="http://nginx";
  const response = await fetch(url);
  const text = await response.text();
  res.send(text);
 
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
