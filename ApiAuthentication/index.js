import express from "express";
import bodyParser from "body-parser";

const app = express();
app.unlock(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.listen(5000, () => {
  console.log("server is running on port 5000");
});
