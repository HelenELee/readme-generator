//const { __generator } = require("tslib");

// TODO: Create an array of questions for user input
const instructions = [
  {
    type: 'confirm',
    message: '---------------\nWelcome to the Reamde generator\n------------------------',
    name: 'welcome',
  },
]
const questions = [
    {
      type: 'input',
      message: 'What is your Project Title?',
      name: 'projectTitle',
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
      type: 'input',
      message: 'Please enter your Project description:',
      name: 'description',
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
    },
    {
      type: 'input',
      message: 'Please enter your Usage Instructions:',
      name: 'usage',
    },
    
    {
      message : "Please choose your License:",
      type : 'list',
      choices: [
            { name: 'Apache 2.0 License', value: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)' },
            { name: 'Boost', value: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)' },
            { name: 'Boost Software License 1.0', value: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'},
            { name: 'BSD 3-Clause License', value: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'},
            { name: 'CC0', value: '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'},
            { name: 'Attribution 4.0 International', value: '[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)'},
            { name: 'Eclipse Public License 1.0', value: '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'},
            { name: 'GNU GPL v3', value: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'},
            { name: 'The Hippocratic License 3.0', value: '[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)'},
            { name: 'IBM Public License Version 1.0', value: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'},
            { name: 'ISC License (ISC)', value: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'},
            { name: 'The MIT License', value: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'},
            { name: 'Attribution License (BY)', value: '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)'},
            { name: 'The Perl License', value: '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'},
            { name: 'The Unlicense', value: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'},
      ],  
       name : "license",
       default: "The MIT License",
    },
    /*
    {
      type: 'input',
      message: 'Please enter your Contributing Guidelines:',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'Please enter your Test Instructions:',
      name: 'test',
    },
    {
      type: 'input',
      message: 'Please enter your Question Instructions:',
      name: 'question',
    },
    {
      type: 'input',
      message: 'Please enter your GitHub username:',
      name: 'github',
    },
    {
      type: 'input',
      message: 'Please enter your Email Address:',
      name: 'email',
    },
    {
      type: 'editor',
      name: 'story',
      message: 'Tell me a story, a really long one!',
    },
    */
];

module.exports.questions = questions;