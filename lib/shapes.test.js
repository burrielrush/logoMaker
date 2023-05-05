const { Square, Triangle, Circle } = require('./shapes.js');

describe('circle',() => {
  test('renders correctly', () => {
    const shape = new Circle('blue', 'circle', 'O');
    shape.setTextColor('blue');
    expect(shape.render()).toEqual(`
        <svg width="200" height="200">
          <circle cx="50%" cy="50%" r="100" fill="blue" />
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">
            <tspan font-size="80" font-weight="bold">circle</tspan>
          </text>
        </svg>
      `);
  });
});

describe('square',() => {
  test('renders correctly', () => {
    const shape = new Square('blue', 'square', 'S');
    shape.setTextColor('blue');
    expect(shape.render()).toEqual(`
        <svg width="200" height="200">
          <rect x="50" y="50" width="100" height="100" fill="blue" />
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">
            <tspan font-size="80" font-weight="bold">square</tspan>
          </text>
        </svg>
      `);
  });
});

describe('triangle', () => {
  test('renders correctly', () => {
    const shape = new Triangle('blue', 'triangle', 'T');
    shape.setTextColor('blue');
    expect(shape.render()).toEqual(`
        <svg width="200" height="200">
          <polygon points="100,50 150,150 50,150" fill="blue" />
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">
            <tspan font-size="80" font-weight="bold">triangle</tspan>
          </text>
        </svg>
      `);
  });
});
