const expect = require('chai').expect;

const fizzBuzzer = require("../fizzBuzzer");

describe("fizzBuzzer", function() {

  describe("Happy path :)", function() {
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

  describe("Sad Path :(", function() {
    it("should return number when input is not divisable by 3,5, or 15", function() {
      const sadCases = [
        {ans: 2},
        {ans: 37},
        {ans: 14}
      ];

      sadCases.forEach( (input) => {
        const answer = fizzBuzzer(input.ans)
        expect(answer).to.equal(input.ans);
      });
    });

    xit("should raise an error when input is not a number", function() {
      const sadCases = [
        {ans: "rabbit"},
        {ans: ["can of worms"]}
      ];

      sadCases.forEach( (input) => {
        expect(function() {
          fizzBuzzer(input.ans)
        }).to.throw(Error)
      });

    });

    it("should throw NaN when input is not a number", function() {
      const sadCases = [
        {ans: "rabbit"},
        {ans: ["can of worms"]}
      ];

      sadCases.forEach( (input) => {
        expect(function() {
          fizzBuzzer(input.ans)
        }).to.be.NaN;
      });

    });

  })
})
