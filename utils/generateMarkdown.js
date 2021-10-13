//function to generate markdown for README
function generateMarkdown(data) {
  
  let licenseBadge = "";

switch (data.license) {
  case "None":
      license = "";
      break;

      case "The Unlicense":
      licenseBadge =
        "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
        break;

      case "MIT License":
        licenseBadge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        break;

        case "Apache License 2.0":
          licenseBadge =
          "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
          break;

      case "Mozilla Public License 2.0":
        licenseBadge =
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
        break;

        case "GNU GPL v2":
        licenseBadge =
            "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
        break;

    case "GNU GPL v3":
        licenseBadge =
            "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
        break;

    case "GNU AGPL v3":
        licenseBadge =
            "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
        break;

    case "GNU LGPL v3":
        licenseBadge =
            "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
        break;
        
  case "ISC":
          licenseBadge =
              "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
          break;
}
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
  \`\`\` 
  npm i ${data.install}
  \`\`\` 
  ## Usage
  ${data.usage}
      
  ## Contributing
  ${data.contributing}
  
  ## License
 ${licenseBadge}
  
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

