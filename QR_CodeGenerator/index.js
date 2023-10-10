import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

// To create qr generator and save input-text in txt file and response in the form of qr-code in png file
// step 1: install inquirer to get user input from terminal
// step 2: install qr-image to convert text into qr image i.e png
// step 3: save user input into text file
inquirer
  .prompt([
    /* Pass your questions in here */
    { message: "Type your URL:", name: "URL" },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    // console.log(answers);
    const URL = answers.URL;
    var qr_svg = qr.image(URL);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));
    fs.writeFile("./URL.txt", URL, (err, data) => {
      if (err) throw err;
      console.log("Data is saved in URL.txt file");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
