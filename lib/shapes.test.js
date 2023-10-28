import { Circle, Square, Triangle } from "./shapes.js";

describe("shape", () => {
     describe("Triangle", () => {
          it("should create a triangle", () => {
               const shape = new Triangle();
               shape.setColor("blue");
               expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
          });
     });
     describe("Square", () => {
          it("should create a square", () => {
               const shape = new Square();
               shape.setColor("red");
               expect(shape.render()).toEqual('<rect x="50" width="200" height="200" fill="red" />');
          });
     });
     describe("Circle", () => {
          it("should create a circle", () => {
               const shape = new Circle();
               shape.setColor("green");
               expect(shape.render()).toEqual('<circle cx="150" cy="100" r="100" fill="green" />');
          });
     });
});
