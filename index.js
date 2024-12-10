// index.js

// Include packages needed for this application
import generateMarkdown from './utils/generateMarkdown.js';
import inquirer from 'inquirer';
import fs from 'fs';

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information for the project:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'GPL 3.0', 'Apache 2.0', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide contribution guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions:',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

// Function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const markdown = generateMarkdown(answers);
      writeToFile('README.md', markdown);
      console.log('README.md file has been generated!');
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log('Prompt could not be rendered in the current environment');
      } else {
        console.log('Error: ' + error);
      }
    });
}

// Function call to initialize app
init();
