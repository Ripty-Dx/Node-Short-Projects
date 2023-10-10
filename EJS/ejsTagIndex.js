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
  const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "mango"],
    htmlContent: "<em> this is some em text</em>",
  };
  res.render("ejsTagIndexView.ejs", data);
});
