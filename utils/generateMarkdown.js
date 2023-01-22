//Include packages needed
//need license array for later when we want to get full details on chosen license
const { licenses } = require("./licenses.js");

//these sections should not be included in the table of contents
const excludeArray = ["welcome", "projectTitle", "github", "email"];

//convert first letter in each word to uppercase - used in TOC
function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}

//generate Table of Contents (TOC)
function createTableOfContents(response) {
  let toc='';
  let hyphenLabel;
  let titleCaseLabel;
  for (const label in response) {
    //check for excluded sections 
    if (!excludeArray.includes(label) && response[label] != "") {
      //remove XXX - added for Inquirer when section title needs a space between words
      titleCaseLabel = titleCase(label.replace(/XXX/g, ' ')); 
      //TOC needs to replace a space with a "-"
      hyphenLabel = label.replace(/XXX/g, '-').toLowerCase();
      toc+=` - [${titleCaseLabel}](#${hyphenLabel})\n`; 
    }
    
  }
  //return generated TOC
  if (toc != ""){
    return `## Table of Contents\n${toc}`
  } else {
    return "";
  }
  
}
//called from generateMarkDown
function renderLicenseSection(license, link) {  
  licenseText = `## License
  This project is covered by the "${license}" license.
  For more details click on the link below:
  [License](${link})
  `
  return licenseText;
}
//check if any contct details were provided, return blank if none
//called from renderQuestions
function renderContactDetails(response){
  let contactDetails;
  if (response.github != "" && response.email !=""){
    contactDetails = ` Github : ${response.github} Email : ${response.email}`;
  } else if (response.github != "") {
    contactDetails = ` Github : ${response.github}`;
  } else if (response.email !="") {
    contactDetails = `Email : ${response.email}`;
  } else {
    contactDetails = "";
  }
  return contactDetails;
}
//generate questions section and include contact details if supplied
function renderQuestions(response){
  const templateTitle = "## Questions"
  const contactDetails = renderContactDetails(response);
  let templateDetails;
  if (response.questions == "") {
    templateDetails = `${templateTitle}\n`;
    templateDetails +=` Contact details below:\n`; //no questions text supplied so add generic text
    templateDetails +=contactDetails;
  } else {
    templateDetails = `${templateTitle}\n`;
    templateDetails += ` ${response.questions}\n`;
    templateDetails += contactDetails;
  }
 
  return templateDetails;
}
//generic function to creat section that just needs a title and text
function renderSection(sectionTitle, sectionText){
  if (sectionText == ''){
    return "";
  }
  return `## ${sectionTitle}
  ${sectionText}
  `
}
//main function to generate the MarkDown text
function generateMarkdown(response) {
  //get details from license array for chosen license - name, badge, link
  const currentLicense = licenses.filter(obj => obj.name === response.license);
  //use destructuring to extract name, badge, link for chosen license
  const { name:licenseName, badge:licenseBadge, link:licenseLink } = currentLicense[0];

 //generate sections
  const toc = createTableOfContents(response);
  const questions = renderQuestions(response);
  const licenseText = renderLicenseSection(licenseName, licenseLink);
  const description = renderSection("Description", response.description);
  const installation = renderSection("Installation", response.installation);
  const usage = renderSection("Usage", response.usage);
  const contributing = renderSection("Contributing Guidelines", response.contributingXXXguidelines);
  const test = renderSection("Test Instructions", response.testXXXinstructions);
  //template for Readme
  const template = `
  # ${licenseBadge}(${licenseLink})\n
  # ${response.projectTitle}\n
  ${toc}  
  ${description}
  ${installation}
  ${usage}
  ${licenseText}
  ${contributing}
  ${test}
  ${questions}
  `
  return template;
}

module.exports = {generateMarkdown};


