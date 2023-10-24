class UserInput {
     constructor() {
          this.text = "";
          this.textColor = "";
     }

     setText(text) {
          this.text = text;
     }

     setColor(textColor) {
          this.textColor = textColor;
     }

     render() {
          return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
     }
}

export default UserInput;