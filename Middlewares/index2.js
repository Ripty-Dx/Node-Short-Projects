import express from "express";
import morgan from "morgan";
const app = express();
const port = 5000;
app.use(morgan("tiny"));
app.listen(port, () => {
  console.log("port is running on 5000");
});
app.get("/", (req, res) => {
  res.send("HOME PAGE");
  console.log(req.body);
});
