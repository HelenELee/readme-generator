

function createTableOfContents(response) {
  let toc = '';
  let lCase;
  for (const label in response) {
    if (label != "projectTitle" && label != "welcome") {
      labelFormat = label.toLowerCase().replace(/\s/g, '-');
      toc+=`[${label}](#${labelFormat})\n\t`;
    }
    
  }
  return toc;
}

/*
## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [User Instructions](#user-instructions)
  */

function generateMarkdown(response) {
  const toc = createTableOfContents(response);
  const template = `
  
  # ${response.license}
  # ${response.projectTitle}

  ## Table Of Contents
  ${toc}  
  ## Description
  ${response.description}\n
  ## Installation
  ${response.installation}\n
  ## User Instructions
  ${response.usage}\n
  `
  return template;
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdownxx(fileName, response) {
  //return `# ${data.title}
  

  createFile(fileName, template);

  /*
  renderTitle(fileName, response.projectTitle);

  renderSubTitle(fileName, "Description");

  renderText(fileName, response.description);
  
  renderSubTitle(fileName, "Installation Instructions");

 renderText(fileName, response.installation);
    */
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
