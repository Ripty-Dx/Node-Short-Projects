import express from "express";
const app = express();
import bodyParser from "body-parser";
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("index.ejs");
});
const bandNames = [
  " Throwing Muses",
  " Butthole Surfers",
  " Meat Puppets",
  " Paradise Vendors",
  " Sunny Day",
  " Throbbing Gristle",
  " The Velvet Underground",
  " The Flaming Lips",
  " The Apples in Stereo",
  " Drive-By Truckers",
  " Talking Heads",
  " Velvet Concord",
  " Ecstasy",
  " Afternoon Daydream",
  " Turning Jane",
  " Elaborate Constellations",
  " Double Helix",
  " Zombie Hoax",
  " Hero of Refusal",
  " Armageddon Day",
  " Perpetual Sorrow",
  " Kinetic Street",
  " Greatest Day",
  " Tokyo Lights",
  " Ghost Town",
  " Ultraviolet",
  " Titan Walk",
  " Pretty Ugly",
  " Boys of Creation",
];
app.get("/submit", (req, res) => {
  let randomNumber = Math.floor(Math.random() * bandNames.length + 1);
  res.render("index.ejs", {
    name: bandNames[randomNumber],
  });
});
app.listen(5001, () => {
  console.log("server is running on port 5001");
});
