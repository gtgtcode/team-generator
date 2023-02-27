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

let data = "";

let components = "";

const htmlTempTop = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Gloock&display=swap"
      rel="stylesheet"
    />
    <link href="../dist/output.css" rel="stylesheet" />
    <title>Team Generator</title>
  </head>
  <body>
  <header class="container mx-auto">
  <p
    class="py-10 pl-4 md:text-4xl text-2xl font-[Gloock]"
    aria-label="Header Title"
  >
    Team Generator
  </p>
</header>`;

const htmlTempBottom = `</body>
  </html>`;

console.log(`
Team Builder
https://github.com/gtgtcode

---
`);

inquirer
  .prompt([
    { name: "getManagerName", message: "What is the manager's name?" },
    { name: "getManagerId", message: "What is the manager's id?" },
    { name: "getManagerEmail", message: "What is the manager's email?" },
    {
      name: "getManagerOfficeNum",
      message: "What is the manager's office number?",
    },
    {
      name: "addEngineerPrompt",
      type: "list",
      message: "Would you like to add an engineer?",
      choices: ["Yes", "No"],
    },
  ])
  .then((answers) => {
    let manager = new Manager(
      answers.getManagerName,
      answers.getManagerId,
      answers.getManagerEmail,
      answers.getManagerOfficeNum
    );

    components = `    <div
    id="manager-container"
    class="md:h-[400px] md:w-[400px] max-md:max-w-[200px] max-md:h-[200px] mx-auto rounded-lg shadow-2xl text-center"
  >
    <h2
      class="md:text-xl md:mb-4 mt-5 md:mt-10 text-md font-[Gloock] text-gray-500 text-center "
    >
      Manager
    </h2>
    <h1 class="md:text-2xl md:mb-4 text-lg font-[Gloock] text-center">${manager.name}</h1>
    <h2 class="md:text-xl md:mb-4 text-md font-[Gloock] text-gray-500 text-center">
      #${manager.id}
    </h2>
    <h2 class="md:text-xl md:mb-4 text-md font-[Gloock] text-gray-500 text-center">
      Office #${manager.officeNumber}
    </h2>
    <a href="mailto:${manager.email}">
      <button
        class="md:mb-10 border p-4 mt-4 rounded-full hover:shadow-xl ease-linear"
      >
        <img
          src="../assets/images/icons8-mail-96.png"
          alt="Mail Icon"
          width="30"
        />
      </button>
    </a>
  </div>`;
    if (answers.addEngineerPrompt == "Yes") {
      inquirer
        .prompt([
          { name: "getEngineerName", message: "What is the engineer's name?" },
          { name: "getEngineerId", message: "What is the engineer's ID?" },
          {
            name: "getEngineerEmail",
            message: "What is the engineer's email?",
          },
          {
            name: "getEngineerGithub",
            message: "What is the engineer's GitHub?",
          },
          {
            name: "addEmployeePrompt",
            type: "list",
            choices: ["Yes", "No"],
            message: "Would you like to add an employee?",
          },
        ])
        .then((answers) => {
          let engineer = new Engineer(
            answers.getEngineerName,
            answers.getEngineerId,
            answers.getEngineerEmail,
            answers.getEngineerGithub
          );
          components =
            components +
            `<div
          id="engineer-container"
          class="md:h-[400px] md:w-[400px] mt-10 max-md:max-w-[200px] max-md:h-[200px] mx-auto rounded-lg shadow-2xl text-center"
        >
          <h2
            class="md:text-xl md:mb-4 md:mt-10 text-md font-[Gloock] text-gray-500 text-center mt-5"
          >
            Engineer
          </h2>
          <h1 class="md:text-2xl md:mb-4 text-lg font-[Gloock] text-center">${engineer.name}</h1>
          <h2 class="md:text-xl md:mb-4 text-md font-[Gloock] text-gray-500 text-center">
            #${engineer.id}
          </h2>
          <a href="${engineer.github}">
            <button
              class="border p-4 mt-4 rounded-full hover:shadow-xl ease-linear"
            >
              <img
                src="../assets/images/github-mark.png"
                alt="GitHub Icon"
                width="30"
              />
            </button>
          <a href="mailto:${engineer.email}">
            <button
              class="border p-4 mt-4 rounded-full hover:shadow-xl ease-linear"
            >
              <img
                src="../assets/images/icons8-mail-96.png"
                alt="Mail Icon"
                width="30"
              />
            </button>
          </a>
        </div>`;
          if (answers.addEmployeePrompt == "Yes") {
            inquirer
              .prompt([
                {
                  name: "getEmployeeName",
                  message: "What is the employee's name?",
                },
                {
                  name: "getEmployeeId",
                  message: "What is the employee's ID?",
                },
                {
                  name: "getEmployeeEmail",
                  message: "What is the employee's email?",
                },
                {
                  name: "addInternPrompt",
                  type: "list",
                  choices: ["Yes", "No"],
                  message: "Would you like to add an intern?",
                },
              ])
              .then((answers) => {
                let employee = new Employee(
                  answers.getEmployeeName,
                  answers.getEmployeeId,
                  answers.getEmployeeEmail
                );
                components =
                  components +
                  `<div
                id="engineer-container"
                class="md:h-[400px] md:w-[400px] mt-10 max-md:max-w-[200px] max-md:h-[200px] mx-auto rounded-lg shadow-2xl text-center"
              >
                <h2
                  class="md:text-xl md:mb-4 md:mt-10 text-md font-[Gloock] text-gray-500 text-center mt-5"
                >
                  Employee
                </h2>
                <h1 class="md:text-2xl md:mb-4 text-lg font-[Gloock] text-center">${employee.name}</h1>
                <h2 class="md:text-xl md:mb-4 text-md font-[Gloock] text-gray-500 text-center">
                  #${employee.id}
                </h2>
                <a href="mailto:${employee.email}">
                  <button
                    class="border p-4 mt-4 rounded-full hover:shadow-xl ease-linear"
                  >
                    <img
                      src="../assets/images/icons8-mail-96.png"
                      alt="Mail Icon"
                      width="30"
                    />
                  </button>
                </a>
              </div>`;
                if (answers.addInternPrompt == "Yes") {
                  inquirer
                    .prompt([
                      {
                        name: "getInternName",
                        message: "What is the intern's name?",
                      },
                      {
                        name: "getInternId",
                        message: "What is the intern's ID?",
                      },
                      {
                        name: "getInternSchool",
                        message: "What is the intern's school?",
                      },
                      {
                        name: "getInternEmail",
                        message: "What is the intern's email?",
                      },
                    ])
                    .then((answers) => {
                      let intern = new Intern(
                        answers.getInternName,
                        answers.getInternId,
                        answers.getInternEmail,
                        answers.getInternSchool
                      );
                      components =
                        components +
                        `<div
                id="engineer-container"
                class="md:h-[400px] md:w-[400px] mt-10 max-md:max-w-[200px] max-md:h-[200px] mx-auto rounded-lg shadow-2xl text-center"
              >
                <h2
                  class="md:text-xl md:mb-4 md:mt-10 text-md font-[Gloock] text-gray-500 text-center mt-5"
                >
                  Intern
                </h2>
                <h1 class="md:text-2xl md:mb-4 text-lg font-[Gloock] text-center">${intern.name}</h1>
                <h2 class="md:text-xl md:mb-4 text-md font-[Gloock] text-gray-500 text-center">
                  #${intern.id}
                </h2>
                <h2 class="md:text-xl md:mb-4 text-md font-[Gloock] text-gray-500 text-center">
                  ${intern.school}
                </h2>
                <a href="mailto:${intern.email}">
                  <button
                    class="border p-4 mt-4 rounded-full hover:shadow-xl ease-linear"
                  >
                    <img
                      src="../assets/images/icons8-mail-96.png"
                      alt="Mail Icon"
                      width="30"
                    />
                  </button>
                </a>
              </div>`;
                      data = htmlTempTop + components + htmlTempBottom;
                      fs.writeFile("src/index.html", data, (err) => {});
                      console.log(answers);
                    });
                } else {
                  data = htmlTempTop + components + htmlTempBottom;
                  fs.writeFile("src/index.html", data, (err) => {});
                  console.log(answers);
                }
              });
          }
        });
    } else {
      data = htmlTempTop + components + htmlTempBottom;
      fs.writeFile("src/index.html", data, (err) => {});
    }
  });
