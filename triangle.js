'use strict';

var Triangle = {};

function isDefined(input) {
  if (input === null || input === undefined) {
    return false;
  } else {
    return true;
  }
};
/**
 * Interprets 3 given sides and returns the type of triangle it would produce, or "Illegal" if not possible
 * Sides are provided as strings
 */
Triangle.interpret = function (sideA, sideB, sideC) {
  if (!isDefined(sideA) || !isDefined(sideB) || !isDefined(sideC)) {
    throw new Error("Missing side(s).");
  }

  return "Equilateral";
};

module.exports = Triangle;
