/*eslint-env node*/
const Triangle = require("../triangle.js");
const assert = require("assert"); // core module

describe("Triangle Interpreter", function() {
  describe("triangle module", function() {
    it("should have a interpret method", function() {
      assert.equal(typeof Triangle, "object");
      assert.equal(typeof Triangle.interpret, "function");
    });

    describe("interpret method", function () {
      const triangle = Triangle.interpret;
      
      // Check that you haven't changed the triangle type constants.  (If you do, it
      // spoils automatic marking, when your program is linked with a test program.)

      // Tests 1 to 2: check equilateral
      it("Should detect equilateral triangles", function() {
        assert.equal(triangle("8", "8", "8"), "Equilateral", "when 8, 8, 8");
        assert.equal(triangle("1073", "1073", "1073"), "Equilateral", "when 1073, 1073, 1073");
      });

      // Tests 3 to 5: check isosceles
      it("Should detect Isosceles triangles", function() {
        assert.equal(triangle("25", "25", "27"), "Isosceles", "when 25, 25, 27");
        assert.equal(triangle("25", "27", "25"), "Isosceles", "when 25, 27, 25");
        assert.equal(triangle("27", "25", "25"), "Isosceles", "when 27, 25, 25");
      });

      // Tests 6 to 14: check right angled
      it("Should detect Right triangles", function() {
        assert.equal(triangle("3", "4", "5"), "Right", "when 3, 4, 5");
        assert.equal(triangle("3", "5", "4"), "Right", "when 3, 5, 4");
        assert.equal(triangle("5", "3", "4"), "Right", "when 5, 3, 4");
        assert.equal(triangle("5", "12", "13"), "Right", "when 5, 12, 13");
        assert.equal(triangle("5", "13", "12"), "Right", "when 5, 13, 12");
        assert.equal(triangle("12", "5", "13"), "Right", "when 12, 5, 13");
        assert.equal(triangle("12", "13", "5"), "Right", "when 12, 13, 5");
        assert.equal(triangle("13", "5", "12"), "Right", "when 13, 5, 12");
        assert.equal(triangle("13", "12", "5"), "Right", "when 13, 12, 5");
      });

      // Tests 15 to 20: check scalene
      it("Should detect Scalene triangles", function() {
        assert.equal(triangle("12", "14", "15"), "Scalene", "when 12, 14, 15");
        assert.equal(triangle("12", "15", "14"), "Scalene", "when 12, 15, 14");
        assert.equal(triangle("14", "12", "15"), "Scalene", "when 14, 12, 15");
        assert.equal(triangle("14", "15", "12"), "Scalene", "when 14, 15, 12");
        assert.equal(triangle("15", "12", "14"), "Scalene", "when 15, 12, 14");
        assert.equal(triangle("15", "14", "12"), "Scalene", "when 15, 14, 12");
      });

      // Tests 21 to 25: check flat
      it("Should detect Flat triangles", function() {
        assert.equal(triangle("7", "9", "16"), "Flat", "when 7, 9, 16");
        assert.equal(triangle("7", "16", "9"), "Flat", "when 7, 16, 9");
        assert.equal(triangle("9", "16", "7"), "Flat", "when 9, 16, 7");
        assert.equal(triangle("16", "7", "9"), "Flat", "when 16, 7, 9");
        assert.equal(triangle("16", "9", "7"), "Flat", "when 16, 9, 7");
      });

      // Tests 26 to 31: check impossible
      it("Should detect Impossible triangles", function() {
        assert.equal(triangle("2", "3", "13"), "Impossible", "when 2, 3, 13");
        assert.equal(triangle("2", "13", "3"), "Impossible", "when 2, 13, 3");
        assert.equal(triangle("3", "2", "13"), "Impossible", "when 3, 2, 13");
        assert.equal(triangle("3", "13", "2"), "Impossible", "when 3, 13, 2");
        assert.equal(triangle("13", "2", "3"), "Impossible", "when 13, 2, 3");
        assert.equal(triangle("13", "3", "2"), "Impossible", "when 13, 3, 2");
      });

      // Tests 32 to 42: check illegal
      it("Should detect Illegal triangles", function() {
        assert.equal(triangle("0", "0", "0"), "Illegal", "when 0, 0, 0");
        assert.equal(triangle("0", "10", "12"), "Illegal", "when 0, 10, 12");
        assert.equal(triangle("10", "12", "0"), "Illegal", "when 10, 12, 0");
        assert.equal(triangle("-1", "-1", "-1"), "Illegal", "when -1, -1, -1");
        assert.equal(triangle("-1", "10", "12"), "Illegal", "when -1, 10, 12");
        assert.equal(triangle("10", "-1", "12"), "Illegal", "when 10, -1, 12");
        assert.equal(triangle("10", "12", "-1"), "Illegal", "when 10, 12, -1");
        assert.equal(triangle("x", "y", "z"), "Illegal", "when x, y, z");
        assert.equal(triangle("3", "4y", "5"), "Illegal", "when 3, 4y, 5");
        assert.equal(triangle("10", "12", "13.4"), "Illegal", "when 10, 12, 13.");
        assert.equal(triangle("03", "4", "5"), "Illegal", "when 03, 4, 5");
      });

      // Tests 43 to 47: check the upper limits on lengths
      it("should deal with the limits of integers in C", function () {
        assert.equal(
          triangle("2147483647", "2147483647", "2147483647"), "Equilateral"
        );
        assert.equal(triangle("2147483648", "2147483647", "2147483647"), "Illegal", "when 2147483648, 2147483647, 2147483647");
        assert.equal(triangle("2147483647", "2147483648", "2147483647"), "Illegal", "when 2147483647, 2147483648, 2147483647");
        assert.equal(triangle("2147483647", "2147483647", "2147483648"), "Illegal", "when 2147483647, 2147483647, 2147483648");
        assert.equal(triangle("2147483649", "2147483649", "2147483649"), "Illegal", "when 2147483649, 2147483649, 2147483649");
      });

      // Tests 48 to 50: check for correct handling of overflow
      it("should deal with situations where overflow would occur in C", function() {
        assert.equal(triangle("1100000000", "1705032704", "1805032704"), "Scalene", "when 1100000000, 1705032704, 1805032704");
        assert.equal(triangle("2000000001", "2000000002", "2000000003"), "Scalene", "when 2000000001, 2000000002, 2000000003");
        assert.equal(triangle("150000002", "666666671", "683333338"), "Right", "when 150000002, 666666671, 683333338");
      });
    });
  });
});
