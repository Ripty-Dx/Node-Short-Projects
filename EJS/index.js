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
  const today = new Date();
  const day = today.getDay();
  console.log(day);
  let dayType = "a weekday";
  let adv = "it's time to work hard";
  if (dayType == 0 || dayType == 6) {
    dayType = "the weekend";
    adv = "it's time to have some fun";
  }
  res.render("index.ejs", {
    dayType: dayType,
    advice: adv,
  });
});
