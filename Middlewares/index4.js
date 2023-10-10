import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const app = express();
app.listen(5000, () => {
  console.log("port is running on 5000");
});
app.use(bodyParser.urlencoded({extended:true}))
var info="";
const __dirname = dirname(fileURLToPath(import.meta.url));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
  console.log(req.body);
});
app.post("/submit", (req, res) => {
  console.log(req.body);
  info=req.body;
  res.send("hello"+ info.email )
});
// app.get("/submit", (req, res) => {
//     console.log(req.body);
//   });
