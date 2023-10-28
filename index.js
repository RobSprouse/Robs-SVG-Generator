// Instructions: This application requires NODE.js to run. Please see https://nodejs.org/en/ for more information.
// To start the command-line application, open the terminal and navigate to where this file is located and run `npm i` to install the required modules. 
// Then run `node index` to start the application.

// COMMENT: Imports the inquirer and generateSVG modules.
import inquirer from "inquirer";
import generateSVG from "./lib/generateSVG.js";

// COMMENT: Defines the questions that will be asked to the user with Inquirer.
const questions = [
     {
          type: "input",
          name: "text",
          message: "Enter at least one to three characters",
          // COMMENT: Validates that the user has entered at least one to three characters.
          validate: function (value) {
               if (value.length > 0 && value.length <= 3) return true;
               return "Please enter at least one to three characters.";
          },
     },
     {
          type: "input",
          name: "textColor",
          message: "Enter a color keyword or a hexadecimal number for the text color.",
     },
     {
          type: "list",
          name: "shape",
          message: "Choose a shape from the list",
          choices: ["circle", "triangle", "square"],
     },
     {
          type: "input",
          name: "shapeColor",
          message: "Enter a color keyword or a hexadecimal number for the shape's color.",
     },
];

// COMMENT: Defines the init function that uses Inquirer to prompt the user with the questions and then calls the generateSVG function with the answers object as a parameter.
function init() {
     inquirer.prompt(questions).then((answers) => {
          generateSVG(answers);
     });
}

// COMMENT: Calls the init function when npm index is run.
init();