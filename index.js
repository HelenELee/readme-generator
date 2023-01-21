// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const {questions} = require("./utils/questions.js");
const { generateMarkdown } = require("./utils/generateMarkdown.js");
//const {createFile, renderTitle, renderSubTitle, renderText} = require("./utils/generateMarkdown.js");
const licBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
const fileName = "README.md";

const { licenses } = require("./utils/licenses.js");
//console.log(licenses);
//const licenseNames = licenses.map(element => element.name);
//console.log(licenseNames);
//const currentLicense = licenses.filter(obj => obj.name === "The MIT License");
//console.log(currentLicense);
//var currentLicense = licenses.filter(obj => obj.name === "The MIT License");
//console.log(currentLicense);
//console.log(currentLicense[0]);

//const { name, badge, link } = currentLicense[0];
//console.log(badge);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

function createFile(fileName, text) {
  fs.writeFile(fileName, text, (err) =>
    err ? console.error(err) : console.log('Your README file has been created!')
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then((response) => {
    console.log(response);
    //console.log(response);
    //console.log(response.projectTitle);
    //console.log(response.description);
    //console.log(response.installation);
    if (response.welcome === true) {
      const template = generateMarkdown(response);
      return template; 
    } else {
      return Promise.reject('Exit');
    }
  })
  .then((response) => {
    createFile(fileName, response);
  })
  .catch(function(error) {
    console.log("Goodbye!");
})

}

// Function call to initialize app
init();
