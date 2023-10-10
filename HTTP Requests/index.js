import express from "express";
const app=express();
const port=5000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
app.get("/",(req,res)=>{
    // console.log(req);
    res.send("<h1>Hello World</h1>");
})
app.get("/contact",(req,res)=>{
    res.send("contact page")
})
app.get("/about",(req,res)=>{
    res.send("about page")
})