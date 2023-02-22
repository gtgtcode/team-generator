const {
  Employee,
  Engineer,
  Intern,
  Manager,
} = require("./components/employee");
var fs = require("fs");
const inquirer = require("inquirer");
const { sample } = require("rxjs");

let employeeAmount = 0;
let engineerAmount = 0;
let internAmount = 0;

console.log(`
Team Builder
https://github.com/gtgtcode

---
`);

inquirer
  .prompt([{ name: "example", message: "How do you answer?" }])
  .then((answers) => {
    console.log("Answer:", answers.example);
  });

fs.writeFile(
  "src/index.html",
  `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="../index.js"></script>
    <title>Team Generator</title>
  </head>
  <body></body>
</html>
`,
  function (err) {
    if (err) throw err;
  }
);
