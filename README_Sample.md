
  # [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  # Readme Generator

  ## Table of Contents
 - [Description](#description)
 - [Installation](#installation)
 - [Usage](#usage)
 - [License](#license)
 - [Test Instructions](#test-instructions)
 - [Questions](#questions)
  
  ## Description
  This is a command line application which creates a professional Readme File for users. The user is prompted for information through a series of question prompts. The information supplied is gathered and used to create the readme. The README file includes a Table of Contents, Title and Description sections. Other optional sections are installation instructions, usage information, contribution guidelines, test instructions and contact details. Sections are only created where the information has been provided.

The application is developed using the following technologies:


- javascript
- node.js
- inquirer

The main challenges in developing this application were familiarisation with Node and Inquirer.


  
  ## Installation
  Ensure node is installed. Test by running


```
node -v
```

Install Inquirer :

```
npm i inquirer@8.2.4
```

  
  ## Usage
  To run this application enter:
```
node index.js
```
The user is initially provided with some information on how the application works and asked if they want to continue. If they choose "Yes" to continue, they will be brought through all the other questions. If they choose "No" to continue the application will exit.


![Here is a screenshot of the application instructions.](./utils/images/instructions.png)

Some questions require more details and therefore an editor will automatically open and allow the user enter several paragraphs of text. The user can include their own MarkDown code in these response, including links to images etc. The project Title and Description are mandatory and if the user omits to answer them they will be prompted repeatedly till they answer them. The License section provides a list of Licenses. To choose one the user can use the up and down arrow on the keyboard and click enter to select one. Once all the questions have been answered the README file will be generated. It will be saved into the same directory the application is in and is called README_Sample.md.

![Here is a screenshot of the application after all questions have been answered.](./utils/images/completed.png)

  
  ## License
  This project is covered by the "The MIT License" license.
  For more details click on the link below:
  [License](https://opensource.org/licenses/MIT)
  
  
  ## Test Instructions
  N/A
  
  ## Questions
 If you have any questions or feedback please contact me. My details are below. As this is a learning challenge for me I would appreciate any feedback, or ideas for improvement.
 Github : https://github.com/helenelee Email : helenelee3@outlok.com
  