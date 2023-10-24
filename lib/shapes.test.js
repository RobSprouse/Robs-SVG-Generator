const { Circle, Square, Triangle } = require("./shapes");

describe("shape", () => {
     describe("triangle", () => {
          it("should create a triangle", () => {
               const shape = new Triangle();
               shape.setColor("blue");
               expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
          });
     });
     describe("square", () => {
          it("should create a square", () => {
               const shape = new Square();
                shape.setColor("red");
               expect(shape.render()).toEqual('<rect width="300" height="200" fill="red" />');
          });
     });
     describe("circle", () => {
          it("should create a circle", () => {
               const shape = new Circle();
               shape.setColor("green");
               expect(shape.render()).toEqual('<circle cx="150" cy="100" r="100" fill="green" />');
          });
     });
});
