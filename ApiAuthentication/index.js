import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
app.unlock(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
const api_url = "https://secrets-api.appbrewery.com/";
const myUsername = "ramram";
const myPassword = "ramram";
const api_key = "54c24aaf-2d52-4769-b445-8dde095c7e65";
const bearer_token = "8698bd8c-5569-4b15-a425-d8be5fab1d20";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Click on button to get API response" });
});
// no authentication
app.get("/random", async (req, res) => {
  try {
    const response = await axios.get(`${api_url}random`);
    res.render("index.ejs", { content: JSON.stringify(response.data) });
  } catch (error) {
    console.log(error.response.data.error);
    res.render("index.ejs", { content: `Error:${error.response.status} ${error.message} ==> ${error.response.data}` });
    // res.status(404).send("Error:", error.message);
  }
});

// basic authentication
app.get("/basicAuth", async (req, res) => {
  try {
    const response = await axios.get(`${api_url}all?page=1`, {
      auth: {
        username: myUsername,
        password: myPassword,
      },
    });
    res.render("index.ejs", { content: JSON.stringify(response.data) });
    // console.log(response.data);
  } catch (error) {
    console.log(error);
    res.render("index.ejs", { content: `Error:${error.response.status} ${error.message} ==> ${JSON.stringify(error.response.data)}` });
  }
});

// api key authentication
app.get("/apiKey", async (req, res) => {
  try {
    // const response = await axios.get(`${api_url}filter?score=5&apiKey=${api_key}`);
    const response = await axios.get(`${api_url}filter`,{
        params:{
            score:5,
            apiKey:api_key
        }
    });
    res.render("index.ejs", { content: JSON.stringify(response.data) });
  } catch (error) {
    res.render("index.ejs", { content: `Error:${error.response.status} ${error.message} ==> ${JSON.stringify(error.response.data)}` });
  }
});

// bearerToken authentication
const config={
    headers:{
        Authorization:`Bearer ${bearer_token}`
    }
}
app.get("/bearerToken",async(req,res)=>{
    try {
        const response = await axios.get(`${api_url}secrets/10`,config);
        res.render("index.ejs", { content: JSON.stringify(response.data) });
      } catch (error) {
        res.render("index.ejs", { content: `Error:${error.response.status} ${error.message} ==> ${JSON.stringify(error.response.data)}` });
      } 
})
app.listen(5000, () => {
  console.log("server is running on port 5000");
});
