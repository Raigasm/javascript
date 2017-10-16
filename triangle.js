/*eslint-env node*/
"use strict";

var Triangle = {};

function isDefined(input) {
  if (input === null || input === undefined) {
    return false;
  } else {
    return true;
  }
}
/**
 * returns 1 if three given dimensions are equal
 */
function triangleHasAllSidesEqual(triangle) {
  return triangle.a == triangle.b && triangle.a == triangle.c;
}

/**
 * returns 1 if two sides are equal, 0 if all sides are equal or no sides are equal
 */
function triangleHasOnlyTwoSidesEqual(triangle) {
  return (
    (triangle.a == triangle.b && triangle.a != triangle.c) ||
    (triangle.a == triangle.c && triangle.a != triangle.b) ||
    (triangle.b == triangle.c && triangle.b != triangle.a)
  );
}

// returns 1 if all sides are of different size
function triangleHasNoEqualSides(triangle) {
  return (
    triangle.a != triangle.b &&
    triangle.b != triangle.c &&
    triangle.a != triangle.c
  );
}

/**
 * checks if three sides satisfy pythagoras' theorem
 * NB: lazily expects arguments sorted by size order, ascending
 * @return  1 if pythagorean, 0 if not
 */
function checkPythagorean(x, y, z) {
  console.log(`Checking pythagorean: ${x * x} + ${y * y} = ${x*x + y*y} == ${z * z}`);
  return (
    (x * x) + (y * y) === (z * z)
  );
}

/**
 * determines if 3 given dimensions represent a right-angled triangle
 * NB: uses checkPythagorean above
 * @return  1 if right angle, 0 if not
 */
function triangleHasRightAngle(triangle) {
  let toSort = [triangle.a, triangle.b, triangle.c];
  let temp;

  // sort array by size, largest member last (using bubble sort because idk if we've learned other sort algorithms yet in the course)
  for (let i = 0; i < 2; i++) {
    let a = toSort[i];
    let b = toSort[i + 1];

    if (a > b) {
      temp = toSort[i];
      toSort[i] = toSort[i + 1];
      toSort[i + 1] = temp;
    }
  }
  return checkPythagorean(toSort[0], toSort[1], toSort[2]);
}

/**
 * checks if a triangle matches a 'flat' triangle (the sum of two sides' lengths equals the third side's length)
 * @return 1 if a triangle has area, 0 if a triangle doesn't
 */
function triangleHasArea(triangle) {
  return !(
    triangle.a + triangle.b == triangle.c ||
    triangle.a + triangle.c == triangle.b ||
    triangle.b + triangle.c == triangle.a
  );
}

/**
 * checks if a triangle is impossible because one of the sides is longer than the other two sides combined
 */
function triangleIsPossible(triangle) {
  return (
    triangle.a < triangle.b + triangle.c &&
    triangle.b < triangle.a + triangle.c &&
    triangle.c < triangle.a + triangle.b
  );
}
/**
 * Returns true if the input string contains only numeric characters
 * @param {*string} input 
 */
function onlyNumeric(input) {
  var result = true;
  for (var i = 0; i < input.length; i++) {
    var element = input[i];
    if (Number.isNaN(parseInt(element))) {
      result = false;
    }
  }
  return result;
}

/**
 * Interprets 3 given sides and returns the type of triangle it would produce, or "Illegal" if not possible
 * Sides are provided as strings
 */
Triangle.interpret = function(a, b, c) {
  if (!isDefined(a) || !isDefined(b) || !isDefined(c)) {
    throw new Error("Missing side(s).");
  }
  // create POJO with sides stored as integers
  var triangle = {
    a: parseInt(a),
    b: parseInt(b),
    c: parseInt(c)
  };

  // enforce only numeric inputs
  if (!onlyNumeric(a) || !onlyNumeric(b) || !onlyNumeric(c)) {
    return "Illegal";
  }

  // disqualify inputs with leading 0
  if (a.startsWith("0") || b.startsWith("0") || c.startsWith("0")) {
    return "Illegal";
  }

  if (triangle.a <= 0 || triangle.b <= 0 || triangle.c <= 0) {
    return "Illegal";
  }

  if (Number.isNaN(triangle.a) || Number.isNaN(triangle.b) || Number.isNaN(triangle.c)) {
    return "Illegal";
  }

  if (triangle.a > 2147483647 || triangle.b > 2147483647 || triangle.c > 2147483647) {
    return "Illegal";
  }

  if (triangleHasAllSidesEqual(triangle)) {
    return "Equilateral";
  } else if (triangleHasOnlyTwoSidesEqual(triangle)) {
    return "Isosceles";
  } else if (triangleHasNoEqualSides(triangle)) {
    if (triangleHasRightAngle(triangle)) {
      return "Right";
    } else if (triangleHasArea(triangle)) {
      if (triangleIsPossible(triangle)) {
        return "Scalene";
      } else {
        return "Impossible";
      }
    } else {
      return "Flat";
    }
  } else {
    return "Illegal";
  }
};

module.exports = Triangle;
