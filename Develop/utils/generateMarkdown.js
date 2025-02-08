// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license.length === 0 || license.includes('None')) {
    return '';
}
const licenseMap = {
    'MIT': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
    'Apache': '![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
    'GPL': '![License: GPL](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    'BSD': '![License: BSD](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)',
};
return licenseMap[license[0]] || ''; // Return the badge for the first selected license
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license.length === 0 || license.includes('None')) {
    return '';
  }
  const licenseMap = {
    'MIT': '[MIT License](https://opensource.org/licenses/MIT)',
    'Apache': '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)',
    'GPL': '[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)',
    'BSD': '[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)',
  };
  return licenseMap[license[0]] || ''; // Return the link for the first selected license
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license.length === 0 || license.includes('None')) {
    return '';
  }
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);
  return `
## License
${badge}
This project is licensed under the ${link}.
`;
}


export default renderLicenseSection;
