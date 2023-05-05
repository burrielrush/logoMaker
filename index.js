const inquirer = require("inquirer");
const fs = require("fs");
const { Square, Triangle, Circle } = require('./lib/shapes.js');
const shape = require('./lib/shapes.js');


class SVG {
    constructor(shapeHTML) {
        this.textElement = "";
        this.shapeElement = "";
        this.shapeHTML = shapeHTML;
    }

    render() {
        return `<svg version="1.1" width="300" height="200" 
        xmlns="http://www.w3.org/2000/svg">${this.shapeHTML}</svg>`;
} 

setText(message, color) {
    if (message.length > 3) {
        throw new Error("Message must be less than 3 characters");
    }
    this.textElement = `,text x="150" y="150" fill="${color}" font-size="20">${message}</text`;
}

setShape(shape) {
    this.shapeElement = shape.render();
    }
}

const questions = [
    {
        type: "input",
        name: "characters",
        message: "Enter text (up to 3 characters):",
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter color of shape:",
    },
    {
        type: "checkbox",
        name: "shapes",
        message: "Choose shape for logo:",
        choices: [
            "circle",
            "square",
            "triangle",
        ]
    },
    {
        type: "input",
        name: "color",
        message: "Color of text:",
    }
];

function generateLogo(data) {
    const svg = new SVG();
  
    let shape;
    console.log(data)
  
    if (data.shapes.includes('triangle')) {
      shape = new Triangle(data.textColor, data.characters, data.color);
    } else if (data.shapes.includes('square')) {
      shape = new Square(data.textColor, data.characters, data.color);
    } else if (data.shapes.includes('circle')) {
      shape = new Circle(data.textColor, data.characters, data.color);
    } 

    console.log(shape)
    console.log(shape.render())
    const newsvg = new SVG(shape.render());
    console.log(newsvg)
    console.log(newsvg.render())
 

    return newsvg.render();
  }
  


function writeToFile(fileName, data) {
    const content = generateLogo(data);

    fs.writeFile(fileName, content, function(error) {
      if (error) {
        return console.log(error);
      }
      console.log("Logo generated and saved successfully as " + fileName);
    });
}


function init() {
    inquirer.prompt(questions).then(function (data) {
        var fileName = 'logo.svg';
        writeToFile(fileName, data);
    });
}

init();


    
