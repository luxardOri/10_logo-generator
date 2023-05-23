// Constructor Shapes is imported.
const Shapes = require('./shapes.js');

// A testing suite for Shapes is created.
describe('Shapes', () => {
    // A test is created to check if shape.render() is pulling the right content
    describe('render', () => {
      it('should take two numbers and add them together', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
      });
    });
  });