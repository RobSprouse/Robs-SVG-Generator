import UserInput from "./text.js";

describe("UserInput", () => {
     it("should create the inputted text with the inputted color", () => {
          const userInput = new UserInput();
          userInput.setText("SVG");
          userInput.setColor("white");
          expect(userInput.render()).toEqual(
               '<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>'
          );
     });
});
