import express from "express";
const app = express();
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));
var userPassword = "";

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.get("/submit", (req, res) => {
  console.log(req.body);
  userPassword = req.body;
});
app.post("/submit", (req, res) => {
  console.log(req.body);
  userPassword = req.body;
    if (userPassword.password == "QAZ") {
      res.sendFile(__dirname + "/public/secret.html");
    } else {
      res.redirect("/");
    }
});
