const square = require('shapes.js/square');
const triangle = require('shapes.js/triangle');
const circle = require('shapes.js/circle');

function generateLogo(data) {
    let shape = undefined
    if (data.shape === 'triangle') {
        shape = new triangle(data.shapeColor, data.text, data.color)
    } else if (data.shape ==='square') {
        shape = new square(data.shapeColor, data.text, data.color)
    } else if (data.shape === 'circle') {
        shape = new circle(data.shapeColor, data.text, data.color)
}
    return shape.render();
}

module.exports = generateLogo;