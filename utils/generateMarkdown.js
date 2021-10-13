//function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
  function renderLicenseBadge(license) {
    switch(license) {
      case 'MIT':
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
        break;
        case 'Apache':
          return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
          break;
      case 'Mozilla':
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
        break;
      default:
        return 'This project has no license'
        }
      }


// //function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// //function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

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
  ${data.contributing}

  ## License
  ${data.license}
  
  ## Tests
  ${data.tests}

  
  ## Questions
  - If you have any other questions or comments you can contact me at:
   <br>
   My GitHub: https://github.com/${data.username}
   <br>
   My Email : ${data.email}

  ---
© 2021 ${data.username}
  
`;
}

module.exports = generateMarkdown;

