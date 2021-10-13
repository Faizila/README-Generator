//function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

//function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

//function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

//function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}
      
  ## Contributing
  Contributors in this project: ${data.contributing}

  ## License
  License used in this project: ${data.license}
  
  ## Tests
  ${data.tests}

  
  ## Questions
  - If you have any other questions or comments you can contact me at:
   My GitHub: https://github.com/${data.username}
   My Email : ${data.email}

  ---
© 2021 ${data.username}
  
`;
}

module.exports = generateMarkdown;

