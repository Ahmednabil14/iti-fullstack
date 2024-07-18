//problem1

const { expect, should, assert } = require('chai');
should();

const capitalizeText = (input) => {
  if (typeof input !== "string") {
    throw new TypeError("parameter should be string");
  }
  return input.toUpperCase();
};

const createArray = (number) => {
  const myArray = Array.from(Array(number).keys());
  return myArray;
};

// Tests
describe('capitalizeText', function() {
  it('should return a string when given a string', function() {
    expect(capitalizeText('test')).to.be.a('string');
  });

  it('should capitalize the input string', function() {
    expect(capitalizeText('iti')).to.equal('ITI');
  });

  it('should throw a TypeError when given a number', function() {
    expect(() => capitalizeText(12)).to.throw(TypeError, "parameter should be string");
  });

  it('should not return "hello" when given "iti"', function() {
    assert.notEqual(capitalizeText('iti'), 'hello');
  });

  it('should throw a TypeError when given an object', function() {
    expect(() => capitalizeText({})).to.throw(TypeError, "parameter should be string");
  });
});
//problem2
describe('createArray', function() {
  let testNumber = 1;

  beforeEach(function() {
    testNumber += 1;
  });

  it('should return an array', function() {
    expect(createArray(testNumber)).to.be.an('array');
  });

  it('should return an array of length 3 when given 3', function() {
    const result = createArray(3);
    result.should.have.lengthOf(3);
    result.should.include(1);
  });

  it('should return an array that includes 2 when given 3', function() {
    expect(createArray(3)).to.include(2);
  });

  it('should return an array of length 4 when given 4', function(done) {
    setTimeout(() => {
      expect(createArray(4)).to.have.lengthOf(4);
      done();
    }, 5000);
  });

  it('should return an array of length 5 when given 5', function() {
    const result = createArray(5);
    assert.lengthOf(result, 5);
    assert.include(result, 3);
  });

  it('pending test case');
});