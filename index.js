const inquirer = require("inquirer");
const fs = require("fs");
const SVG = require('./svg');
const { Square, Triangle, Circle } = require('./lib/shapes.js');
const shape = require('./lib/shapes.js');



const questions = [
    {
        type: "input",
        name: "characters",
        message: "Enter text (up to 3 characters):",
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter color of text:",
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
        message: "Color of shape:",
    }
];

function generateLogo(data) {
    const svg = new SVG();
  
    let shape;
  
    if (data.shapes.includes('Triangle')) {
      shape = new Triangle(data.textColor, data.characters, data.color);
    } else if (data.shapes.includes('Square')) {
      shape = new Square(data.textColor, data.characters, data.color);
    } else if (data.shapes.includes('Circle')) {
      shape = new Circle(data.textColor, data.characters, data.color);
    } 
 

    return svg.toString();
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


    
