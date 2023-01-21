// TODO: Include packages needed for this application
const inquirer = require('inquirer');
//const fs = require('fs');
const {questions} = require("./utils/questions.js");
const {createFile, renderTitle, renderSubTitle, renderText} = require("./utils/generateMarkdown.js");
const licBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
const fileName = "README.md";

// TODO: Create an array of questions for user input


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then((response) => {
    console.log(response.projectTitle);
    console.log(response.description);
    console.log(response.installation);
    //console.log(response.license);
    //console.log(response.story);

    createFile(fileName);
    renderTitle(fileName, response.projectTitle);

    renderSubTitle(fileName, "Description");
    renderText(fileName, response.description);
    /*
    fs.writeFile('README.md', "These are your responses.\n", (err) =>
    err ? console.error(err) : console.log('Success!')
    )

    let tempString = '';

    for (const key in response) {
        tempString = tempString + (`${key}: ${response[key]}\n`);
    }
    //let tempString = `Name : ${response.username}\nLanguage : ${response.language}\nCommunication : ${response.communication}\n`
    fs.appendFile('log.txt', tempString, (err) =>
    err ? console.error(err) : console.log('Commit logged!')
    )*/

  })

}

// Function call to initialize app
init();
