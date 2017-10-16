const Triangle = require("../triangle.js");
const assert = require("assert"); // core module

describe("Triangle Interpreter", function() {
  describe("triangle module", function() {
    it("should have a interpret method", function() {
      assert.equal(typeof Triangle, "object");
      assert.equal(typeof Triangle.interpret, "function");
    });
  });
});
