const inquirer = require("inquirer");
const fs = require("fs");
const shape = require('./lib/shapes');
const generateLogo = require("./generateLogo");




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

console.log(questions);

function writeToFile(fileName, data) {
    var content = generateLogo(data);
    
    fs.writeFile(fileName, content, function(error) {
      if (error) {
        return console.log(error);
      }
      console.log("The file was saved!");
    });
  }
  
function inti() {
    inquirer.prompt(questions).then(function (data) {
        var fileName = 'logo.svg';
        writeToFile(fileName, data);
});
}

inti();



