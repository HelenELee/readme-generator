// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const {questions} = require("./utils/questions.js");
const { generateMarkdown } = require("./utils/generateMarkdown.js");
//const {createFile, renderTitle, renderSubTitle, renderText} = require("./utils/generateMarkdown.js");
const licBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
const fileName = "README.md";




// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

function createFile(fileName, text) {
  fs.writeFile(fileName, text, (err) =>
    err ? console.error(err) : console.log('File created!')
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then((response) => {
    //console.log(response);
    //console.log(response.projectTitle);
    //console.log(response.description);
    //console.log(response.installation);
    const template = generateMarkdown(response);
    return template;   
  })
  .then((response) => {
    createFile(fileName, response);
  })

}

// Function call to initialize app
init();
