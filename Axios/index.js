import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    // console.log(response);
    const result = response.data;
    res.render("index.ejs", { data: result });
  } catch (error) {
    console.log(error);
  }
});
app.post("/submit", async (req, res) => {
  let value = req.body;
  console.log(value);
  try {
    const response = await axios.get(`https://bored-api.appbrewery.com/filter?type=${req.body.activity}&participants=${req.body.participants}`);
    const result = response.data;
    res.render("index.ejs", { data: result[Math.floor(Math.random()*result.length)] });
  } catch (error) {
    console.log(error);
    res.render("index.ejs", { error: "No activities that match your criteria." });

  }
});
app.listen(5000, () => {
  console.log("server is running on port 5000");
});
