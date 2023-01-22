// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//get access to questions array
const {questions} = require("./utils/questions.js");
const { generateMarkdown } = require("./utils/generateMarkdown.js");
//set name for file that will be genrated
const fileName = "README_Sample.md";
//get access to all license details
const { licenses } = require("./utils/licenses.js");

// function to write data to README file
function createFile(fileName, text) {
  fs.writeFile(fileName, text, (err) =>
    err ? console.error(err) : console.log('Your README file has been created!')
    )
}

// function to initialize app
function init() {
    inquirer
  .prompt(questions) //questions is the array of questions, pass to inquirer
  .then((response) => {
    //first questions is an explanation of how the app works and 
    //ask the user if they want to continue
    //only continue if this response is 'true'
    if (response.welcome === true) {
      const template = generateMarkdown(response);
      return template; 
    } else {
      //user chose not to continue so exit
      return Promise.reject('Exit');
    }
  })
  .then((response) => {
    //once all data has been gathered write to the Readme file
    createFile(fileName, response);
  })
  .catch(function(error) {
    console.log("Goodbye!"); //catch any errors and exit gracefully
})

}

// actually initialize app
init();
