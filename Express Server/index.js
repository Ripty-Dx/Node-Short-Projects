import express from "express" ;
const app=express();
const port=5000;
console.log(app);
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})