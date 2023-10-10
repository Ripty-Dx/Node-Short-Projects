import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const apiURL = "https://secrets-api.appbrewery.com/";
app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for the option to be clicked....." });
});
const bearer_token = "8698bd8c-5569-4b15-a425-d8be5fab1d20";
const config = {
  headers: {
    Authorization: `bearer ${bearer_token}`,
  },
};
app.post("/getSecret", async (req, res) => {
  try {
    let id = req.body.secretId;
    const response = await axios.get(`${apiURL}secrets/${id}`, config);
    res.render("index.ejs", { content: JSON.stringify(response.data) });
  } catch (error) {
    res.render("index.ejs", { content: `Error: ${error.response.status} ${error.message}==>${JSON.stringify(error.response.data)} ` });
  }
});
app.post("/postSecret", async (req, res) => {
  try {
    let secret = req.body.secretEntry;
    let score = req.body.secretScore;
    // console.log(req.body);
    const response = await axios.post(
      `${apiURL}secrets`,
      {
        secret: secret,
        score: score,
      },
      config
    );
    res.render("index.ejs", { content: JSON.stringify(response.data) });
  } catch (error) {
    res.render("index.ejs", { content: `Error: ${error.response.status} ${error.message}==>${JSON.stringify(error.response.data)} ` });
  }
});
app.post("/putSecret", async (req, res) => {
  try {
    let id = req.body.secretId;
    let secret = req.body.secretEntry;
    let score = req.body.secretScore;
    console.log(req.body);
    const response = await axios.put(
      `${apiURL}secrets/${id}`,
      {
        secret: secret,
        score: score,
      },
      config
    );
    res.render("index.ejs", { content: JSON.stringify(response.data) });
  } catch (error) {
    res.render("index.ejs", { content: `Error: ${error.response.status} ${error.message}==>${JSON.stringify(error.response.data)} ` });
  }
});
app.post("/patchSecret", async (req, res) => {
  try {
    let id = req.body.secretId;
    let secret = req.body.secretEntry;
    let score = req.body.secretScore;
    console.log(req.body);
    const response = await axios.patch(
      `${apiURL}secrets/${id}`,
      {
        //   "secret": secret,
        score: score,
      },
      config
    );
    res.render("index.ejs", { content: JSON.stringify(response.data) });
  } catch (error) {
    res.render("index.ejs", { content: `Error: ${error.response.status} ${error.message}==>${JSON.stringify(error.response.data)} ` });
  }
});
app.post("/deleteSecret", async (req, res) => {
  try {
    let id = req.body.secretId;
    console.log(req.body);
    const response = await axios.delete(`${apiURL}secrets/${id}`, config);
    res.render("index.ejs", { content: JSON.stringify(response.data) });
  } catch (error) {
    res.render("index.ejs", { content: `Error: ${error.response.status} ${error.message}==>${JSON.stringify(error.response.data)} ` });
  }
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
