// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import renderLicenseSection from './utils/generateMarkdown.js';
// TODO: Create an array of questions for user input
const questions = [
    {
        message: 'What is your project title?',
        name: 'name',
    },
    {
        message: 'What is your project description?',
        name: 'description',
    },
    {
        message: 'What are the installation instructions?',
        name: 'installation',
    },
    {
        message: 'What is the usage information?',
        name: 'usage',
    },
    {
        message: 'What are the contribution guidelines?',
        name: 'contribution',
    },
    {
        message: 'What are the test instructions?',
        name: 'test',
    },
    {   message: 'What license would you like to use?',
        name: 'license',
        type: 'checkbox',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },
    {
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        message: 'What is your email address?',
        name: 'questions',
    },    
];

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        const readmeContent = createReadme(response);
        fs.writeFile('README.md', readmeContent, (err) => {
            err ? console.error(err) : console.log('README file created successfully!');
        });
    });
}
//Creates th readme file with questions answered
function createReadme(data) {
    return `
# Title
${data.name}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Tests
${data.test}

${renderLicenseSection(data.license)}


## Questions
For any questions, please contact me at [${data.questions}](mailto:${data.questions}).
You can also find more of my work at [${data.github}](https://github.com/${data.github}).
`;
}
// Function call to initialize app
init();
