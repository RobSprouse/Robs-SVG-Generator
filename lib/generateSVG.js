// COMMENT: Imports the shapes, text, and fs modules. 
import { Triangle, Square, Circle } from "./shapes.js";
import UserInput from "./text.js";
import fs from "fs";

// COMMENT: Defines the generateSVG function that takes in the answers object as a parameter.
function generateSVG(answers) {

     // COMMENT: Creates and defines a new shape object based on the user's choice of shape and color.
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

     // COMMENT: Creates and defines a new text object based on the user's choice of text and color.
     const text = new UserInput();
     text.setText(answers.text);
     text.setColor(answers.textColor);

     // COMMENT: Defines the svgLogo variable that utilizes the render methods of the shape and text objects to create the SVG logo.
     const svgLogo = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

     ${shape.render()}

     ${text.render()}

</svg>
    `;

     // COMMENT: Defines the writeFile function that takes in the fileName and data parameters. Console logs if successful.
     function writeFile(fileName, data) {
          fs.writeFile(fileName, data, (err) => {
               if (err) return console.log(err);
               console.log(`\nGenerated logo.svg`);
               console.log(`\nOpen dist/logo.svg in your browser to view the logo.`)
               console.log(`Make sure to copy the file to another location if you want to save it. Running the application again will overwrite the file.`)
          });
     }

     // COMMENT: Calls the writeFile function and passes in the fileName and data parameters.
     writeFile("./dist/logo.svg", svgLogo);
}

// COMMENT: Exports the generateSVG function.
export default generateSVG;
