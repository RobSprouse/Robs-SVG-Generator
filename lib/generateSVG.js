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

     const svgLogo = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shape.render()}
            ${text.render()}
        </svg>
    `;

     function writeFileSync(fileName, data) {
          fs.writeFileSync(fileName, data, (err) => {
               if (err) {
                    throw err;
               }
               console.log("Generated logo.svg");
          });
     }
     writeFileSync("./dist/logo.svg", svgLogo);
}
export default generateSVG;
