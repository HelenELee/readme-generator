//Include package needed
const { licenses } = require("./licenses.js");
//just get an array that only contains the license names - used in the "choices" part of the License question
const licenseNames = licenses.map(element => element.name);

// Array of questions for user input

const questions = [
  {
    //first "question" is instructions for user on how application works
    //They can choose to continue or exit at that stage
    type: 'confirm',
    message: '------------------------------\n' +
    'Welcome to the README Generator\n' +
    '--------------------------------\n' +
    'You will be prompted for details to be included in the Readme.\n' +
    'Project Title and Description are mandatory.\n' +
    'When prompted for some details a text editor will pop up.\n' +
    'Please enter details in the text editor, save and exit.\n' +
    'If you do not enter details for a section it will be omitted from the README.\n' +
    '--------------------------------\n' +
    'Do you want to continue?',
    name: 'welcome',
  },
    {
      type: 'input',
      message: 'What is your Project Title?',
      name: 'projectTitle',
      //only ask next questions if user chose to continue after instructions were provided
      when: (answers) => answers.welcome === true, 
      //this question is mandatory
      validate: proj => {
        if (proj) {
            return true;
        } else {
            console.log('Please provide a project title!');
            return false;
        }
      }
    },
    {
      //chose to use the editor here are it allows the user enter more details 
      //and over several lines
      type: 'editor',
      message: 'Please enter your Project description:',
      name: 'description',
      when: (answers) => answers.welcome === true,
      //this question is mandatory
      validate: desc => {
        if (desc) {
            return true;
        } else {
            console.log('Please provide a project description!');
            return false;
        }
    }
    },
    
    {
      type: 'input',
      message: 'Please enter your Installation Instructions:',
      name: 'installation',
      when: (answers) => answers.welcome === true,
    },
    {
      //chose to use the editor here as the user may have a long usage explanation and
      //can include images if they know how to using markdown
      type: 'editor',
      message: 'Please enter your Usage Instructions:',
      when: (answers) => answers.welcome === true,
      name: 'usage',
    },
    {
      message : "Please choose your License:",
      type : 'list',
      //uses variable created above from license.js
      choices :licenseNames,
      name : "license",
      when: (answers) => answers.welcome === true,
      default: "The MIT License",
    },
  //adding XXX for spaces - these will be removed in TOC
    {
      type: 'input',
      message: 'Please enter your Contributing Guidelines:',
      name: 'contributingXXXguidelines',
      when: (answers) => answers.welcome === true,
    },
    //adding XXX for spaces - these will be removed in TOC
    {
      type: 'input',
      message: 'Please enter your Test Instructions:',
      name: 'testXXXinstructions',
      when: (answers) => answers.welcome === true,
    },
    {
      type: 'input',
      message: 'Please enter your Question Instructions:',
      name: 'questions',
      when: (answers) => answers.welcome === true,
    },
    {
      type: 'input',
      message: 'Please enter your GitHub username:',
      name: 'github',
      when: (answers) => answers.welcome === true,
    },
    {
      type: 'input',
      message: 'Please enter your Email Address:',
      name: 'email',
      when: (answers) => answers.welcome === true,
    },
    
    
];

module.exports.questions = questions;