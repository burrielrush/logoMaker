class Shape {
    constructor(textColor) {
        this.textColor = textColor;
    }
  

    setTextColor(textColor) {
        this.textColor = (textColor);
    }
}

class Circle extends Shape {
    constructor(textColor, shape, characters) {
      super(textColor);
      this.shape = shape;
      this.characters = characters;
    }
  
    render() {
      return `
        <svg width="200" height="200">
          <circle cx="50%" cy="50%" r="100" fill="${this.textColor}" />
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">
            <tspan font-size="80" font-weight="bold">${this.shape}</tspan>
            
          </text>
        </svg>
      `;
    }
  }
    

  class Square extends Shape {
    constructor(textColor, shape, characters) {
      super(textColor);
      this.shape = shape;
      this.characters = characters;
    }
  
    render() {
      return `
        <svg width="200" height="200">
          <rect x="50" y="50" width="300" height="200" fill="${this.textColor}" />
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">
            <tspan font-size="80" font-weight="bold">${this.shape}</tspan>
            
          </text>
        </svg>
      `;
    }
  }
  

  class Triangle extends Shape {
    constructor(textColor, shape, characters) {
      super(textColor);
      this.shape = shape;
      this.characters = characters;
    }
  
    render() {
      return `
        <svg width="200" height="200">
          <polygon x="50" y="50" points="0,0 100,100 0,100" fill="${this.textColor}" />
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">
            <tspan font-size="80" font-weight="bold">${this.shape}</tspan>
          </text>
        </svg>
      `;
    }
  }
  

module.exports = {Circle, Square, Triangle};
  