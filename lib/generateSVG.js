import { Triangle, Square, Circle } from "./shapes.js";
import UserInput from "./text.js";
import fs from "fs";

function generateSVG(answers) {
     let shape;
     switch (answers.shape) {
          case "triangle":
               shape = new Triangle();
               break;
          case "square":
               shape = new Square();
               break;
          case "circle":
               shape = new Circle();
               break;
     }
     shape.setColor(answers.shapeColor);

     const text = new UserInput();
     text.setText(answers.text);
     text.setColor(answers.textColor);

     const svgLogo = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

     ${shape.render()}

     ${text.render()}

</svg>
    `;

     function writeFile(fileName, data) {
          fs.writeFile(fileName, data, (err) => {
               if (err) return console.log(err);
               console.log("Generated logo.svg");
          });
     }
     
     writeFile("./dist/logo.svg", svgLogo);
}
export default generateSVG;
