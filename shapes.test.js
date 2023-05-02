const {circle, square, triangle} = require('shapes.js');

describe('circle',() => {
  test('renders correcty', () => {
    const shape = new circle();
    var color = ('blue') 
    shape.setColor(color);
    expect(shape.render()),toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100" fill="${color}"/>`)});
  });

describe('square',() => {
    test('renders correcty', () => {
        const shape = new square();
        var color = ('green')
        shape.setColor(color);
        expect(shape.render()),toEqual(`<rect x="50" width="200" height="200" fill="${color}"/>`)});
    });

describe('triangle', () => {
    test('renders correcty', () => {
        const shape = new triangle();
        var color = ('red')
        shape.setColor(color);
        expect(shape.render()),toEqual(`<polygon height="100%" width="100%" points="0,200 100,200 50,0" fill="${color}"`
        )}
    )});
    


