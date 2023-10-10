import express from "express";
const app = express();
const port = 5000;
import bodyParser from "body-parser";
// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, () => {
  console.log("server is running on port 5000");
});
app.get("/", (req, res) => {
  res.render("passingData.ejs", {});
});
app.post("/submit", (req, res) => {
  res.render("passingData.ejs", {
    fname: req.body.fname,
    lname: req.body.lname,
    length:req.body.fname.length+ req.body.lname.length
  });
//   console.log(req.body.fname.length+ req.body.lname.length);
});
