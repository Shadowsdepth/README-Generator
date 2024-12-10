// generateMarkdown.js

// Function to return the license badge based on the selected license
function renderLicenseBadge(license) {
  if (!license || license === 'None') {
    return '';
  }
  return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// Function to return the license link
function renderLicenseLink(license) {
  if (!license || license === 'None') {
    return '';
  }
  if (license === 'MIT') {
    return '[MIT License](https://opensource.org/licenses/MIT)';
  }
  if (license === 'GPL 3.0') {
    return '[GPL 3.0 License](https://www.gnu.org/licenses/gpl-3.0)';
  }
  if (license === 'Apache 2.0') {
    return '[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)';
  }
}

// Function to generate the license section
function renderLicenseSection(license) {
  if (!license || license === 'None') {
    return '';
  }
  return `This project is licensed under the ${license} license. For more details, see the [${license} License](${renderLicenseLink(license)}).`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions, feel free to reach out to me at [${data.email}](mailto:${data.email}). You can also find more of my work on my [GitHub](https://github.com/${data.github}).
`;
}

export default generateMarkdown;
