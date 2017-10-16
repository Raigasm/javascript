"use strict"; 
/*eslint-env node*/
const Triangle = require("./triangle.js");

if (process.argv.length > 2) {
  if (process.argv.length !== 5) {
    throw new Error("Invalid number of arguments. Please provide 3 side lengths.");
  } else {
    // eslint-disable-next-line no-console
    console.log(
      Triangle.interpret(process.argv[2], process.argv[3], process.argv[4])
    );
  }
} else {
  // eslint-disable-next-line no-console
  console.log("Please provide 3 side lengths");
}
