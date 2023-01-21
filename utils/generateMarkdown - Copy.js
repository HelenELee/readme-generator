const fs = require('fs');

async function createFile(fileName) {
  fs.writeFile(fileName, "", (err) =>
    err ? console.error(err) : console.log('File created!')
    )
}

async function renderTitle(fileName, title) {
  let tempString = `# ${title}\n\n`;
  fs.appendFile(fileName, tempString, (err) =>
    err ? console.error(err) : console.log('Title written!')
    )
}

async function renderSubTitle(fileName, title) {
  let tempString = `## ${title}\n`;
  fs.appendFile(fileName, tempString, (err) =>
    err ? console.error(err) : console.log('SubTitle written!')
    )
}

async function renderText(fileName, text) {
  let tempString = `${text}\n\n`;
  fs.appendFile(fileName, tempString, (err) =>
    err ? console.error(err) : console.log('Text written!')
    )
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
async function generateMarkdown(fileName, response) {
  //return `# ${data.title}

  const valueA = createFile(fileName);

  const valueB = await valueA (renderTitle(fileName, response.projectTitle));

  const valueC = await valueB (renderSubTitle(fileName, "Description"));

    
  const valueD = await valueC (renderText(fileName, response.description));
  
  const valueE  = await valueD (renderSubTitle(fileName, "Installation Instructions"));

  const valueF = await valueE (renderText(fileName, response.installation));
    
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
