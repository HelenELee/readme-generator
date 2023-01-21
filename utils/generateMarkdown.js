const { licenses } = require("./licenses.js");
const excludeArray = ["welcome", "projectTitle", "github", "email"];


function createTableOfContents(response) {
  let toc='';
  let lCase;
  for (const label in response) {
    if (!excludeArray.includes(label) && response[label] != "") {
      labelFormat = label.toLowerCase().replace(/\s/g, '-');
      toc+=` - [${label}](#${labelFormat})\n`; 
    }
    
  }
  if (toc != ""){
    return `## Table of Contents\n${toc}`
  } else {
    return "";
  }
  
}


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function getLicenseDetailsxxx(license) {
  var currentLicense = licenses.filter(obj => obj.name === license);
  return currentLicense;
}

function renderLicenseSection(license, link) {  
  licenseText = `## License
  This project is covered by the "${license}" license.
  For more details click on the link below:
  ${link}
  `
  return licenseText;
}

function renderQuestions(response){
  const templateTitle = "## Questions"
  let templateDetails;
  if (response.question == "") {
    templateDetails = `${templateTitle}\n`;
    templateDetails +=` Contact details below:\n`;
    templateDetails +=` Github : ${response.github} Email : ${response.email}`;
  } else {
    templateDetails = `${templateTitle}\n`;
    templateDetails += ` ${response.question}\n`;
    templateDetails += ` Github : ${response.github} Email : ${response.email}`;
  }
 // console.log("questions " + templateDetails);
  return templateDetails;
}

function renderSection(sectionTitle, sectionText){
  if (sectionText == ''){
    return "";
  }
  return `## ${sectionTitle}
  ${sectionText}
  `
}

function generateMarkdown(response) {
 // console.log("generate!!!!!!");
  const currentLicense = licenses.filter(obj => obj.name === response.license);
  //const licenseDetails = getLicenseDetails(response.license);
  const { name:licenseName, badge:licenseBadge, link:licenseLink } = currentLicense[0];

 // const licenseText = renderLicenseSection(licenseName);
  const toc = createTableOfContents(response);
  const questions = renderQuestions(response);
  const licenseText = renderLicenseSection(licenseName, licenseLink);
  const description = renderSection("Description", response.description);
  const installation = renderSection("Installation", response.installation);
  const usage = renderSection("Usage", response.usage);
  const contributing = renderSection("Contributing Guidelines", response.contributing);
  const test = renderSection("Test Insructions", response.test);

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

/*
module.exports = {
  createFile,
  renderTitle,
  renderSubTitle,
  renderText,
};
*/
