// const { error } = require("console");
// const fs = require("fs");

// 1. write a file
// fs.writeFile("message.txt", "hello! very first file", (error, data) => {
//   if (error) throw error;
//   console.log("file has been saved", data);
// });

// 2. no encode option while reading a file
// fs.readFile("./message.txt",(err,data)=>{
//     if (err) throw err;
//     console.log("File has been read.",data);
// })

// 3. read a file with encoding option
// fs.readFile("./message.txt","utf8",(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })

// 4. import external module
// 4.1 CJS way
// const superHeroes=require("superheroes");
// console.log(superHeroes.all);
// console.log(superHeroes.random());

// 4.2 ejs way
import superheroes from "superheroes";
console.log(superheroes.random());

