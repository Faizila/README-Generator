//packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generate = require("./utils/generateMarkdown");

//array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'project',
    },
    {
        type: 'input',
        message: 'Write a brief description of your project: ',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter installation instructions if any: ',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Enter project usage information: ',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Choose the license for this project: ',
        choices: ["MIT", "GNU", "Apache","None"],  
        name: 'license',
    },
    {
        type: 'input',
        message: 'Who are the contributors of this project? ',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Enter test instructions: ',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Enter your GitHub username: ',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter your email address: ',
        name: 'email',
    }
    
];

//function to write README file
function writeToFile(fileName, data) {
    // fs.writeFile('README.md', data, (err) =>
    fs.writeFile(fileName, data, (err) =>    
    err ? console.log("Error, try again!") : console.log('Your README has been successfully created!')
);
}

// function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(res => { 
        //use the data from response to generate a README file
        const finalReadme = generateMarkdown(res)
        console.log(res)
        writeToFile('generatedREADME.md', finalReadme)
    })
}

//function call to initialize app
init();
