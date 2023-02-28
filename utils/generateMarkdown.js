
// This gathers the license from Github into the README
const renderLicenseBadge = (license) => {
  if(license !== "None"){
    return `![Github license](https://img.shields.io/badge/license-$(license)-blue.svg)`
  }
  return ''
}

const renderLicenseLink = (license) => {
  if(license !== "None") {
    return `* [License](#license)\n`
  }
  return '';
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ### Description

  ${data.description}

  ### Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  ${renderLicenseLink(data.license)}

  * [Contributing](#contributing)

  * [Test](#tests)

  * [Questions](#questions)

  ## Installation

  To install necessary dependencies, run the following command: 

  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage

  ${data.usage}

  ## License 

  This project is licensed under the ${data.license} license

  ## Contributing

  ${data.contributing}

  ## Tests

  To run tests, run following command:

  \`\`\`
  ${data.test}
  \`\`\`

  ## Questions

  If you have any questions regarding the repo, open an issue or directly contact me at ${data.email}.

  You can find more of my work at [${data.github}](https://github.com/${data.github}).

`;
}

module.exports = generateMarkdown;
