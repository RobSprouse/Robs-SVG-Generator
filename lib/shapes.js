class Shape {
     constructor(shapeColor) {
          this.shapeColor = shapeColor;
     }

     setColor(color) {
          this.shapeColor = color;
     }

     render() {
          return "";
     }
}

class Triangle extends Shape {
     constructor(shapeColor) {
          super(shapeColor);
     }
     render() {
          return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
     }
}

class Square extends Shape {
     constructor(shapeColor) {
          super(shapeColor);
     }
     render() {
          return `<rect width="300" height="200" fill="${this.shapeColor}" />`;
     }
}

class Circle extends Shape {
     constructor(shapeColor) {
          super(shapeColor);
     }
     render() {
          return `<circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />`;
     }
}

module.exports = { Triangle, Square, Circle };
