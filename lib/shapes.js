class Shape {
     constructor() {
          this.shapeColor = "";
     }

     setColor(shapeColor) {
          this.shapeColor = shapeColor;
     }

     render() {
          return "";
     }
}

class Triangle extends Shape {
     render() {
          return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
     }
}

class Square extends Shape {
     render() {
          return `<rect x="50" width="200" height="200" fill="${this.shapeColor}" />`;
     }
}

class Circle extends Shape {
     render() {
          return `<circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />`;
     }
}

export { Triangle, Square, Circle };
