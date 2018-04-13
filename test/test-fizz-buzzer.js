const expect = require('chai').expect;

const fizzBuzzer = require("../fizzBuzzer");

describe("fizzBuzzer", function() {
  it("should return fizz-buzz when input is divisable by 15", function() {
    const normalCases = [
      {ans: 15},
      {ans: 30},
      {ans: 75}
    ];

    normalCases.forEach( (input) => {
      const answer = fizzBuzzer(input.ans)
      expect(answer).to.equal("fizz-buzz");
    });
  });

  it("should return buzz when input is divisable by 5", function() {
    const normalCases = [
      {ans: 5},
      {ans: 10},
      {ans: 25}
    ];

    normalCases.forEach( (input) => {
      const answer = fizzBuzzer(input.ans)
      expect(answer).to.equal("buzz");
    });
  });

  it("should return fizz when input is divisable by 3", function() {
    const normalCases = [
      {ans: 3},
      {ans: 9},
      {ans: 27}
    ];

    normalCases.forEach( (input) => {
      const answer = fizzBuzzer(input.ans)
      expect(answer).to.equal("fizz");
    });
  });


})
