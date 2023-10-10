import express from "express";
const app = express();
const port = 5000;
app.listen(port, () => {
  console.log("server is running on port 5000");
});

const logger = (req, res, next) => {
  console.log("Request URL",req.url);
  console.log("Request Method",req.method);
//   console.log(req.body);
  next();
};
app.use(logger);
app.get("/", (req, res) => {
  res.send("Homepage");
});
