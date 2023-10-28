import inquirer from "inquirer";
import generateSVG from "./lib/generateSVG.js";


const questions = [
     {
          type: "input",
          name: "text",
          message: "Enter at least one to three characters",
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

function init() {
     inquirer.prompt(questions).then((answers) => {
          generateSVG(answers);
     });
}

init();