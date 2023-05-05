const { Square, Triangle, Circle } = require('./shapes.js');



describe('circle',() => {
  test('renders correcty', () => {
    const shape = new Circle();
    shape.setColor('blue');
    expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100" fill="${shape.getColor()}"/>`)});
  });

describe('square',() => {
    test('renders correcty', () => {
        const shape = new Square();
        shape.setColor('blue');
        expect(shape.render()).toEqual(`<rect x="50" width="200" height="200" fill="${shape.getColor()}"/>`)});
    });

describe('triangle', () => {
    test('renders correcty', () => {
        const shape = new Triangle();
        shape.setColor('blue');
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 100,200 50,0" fill="${shape.getColor()}"`
        )}
    )});



