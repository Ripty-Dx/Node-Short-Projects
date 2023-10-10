import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from 'body-parser';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 5000;
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  //   res.send("Home Page");
  console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});
app.get("/about", (req, res) => {
  res.send("About Page");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
});
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
