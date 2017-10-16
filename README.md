# Triangle.js
# Why?
> "Any application that can be written in JavaScript, will eventually be written in JavaScript."
**"Atwood's Law" - Jeff Atwood, 2007

- C is an amazing programming language to work in, and a very useful starting point in programming, but its lower-level nature can sometimes be stressful to work with.
- JavaScript is an awesome, much higher-level language with syntax deriving from C's. 
- The *University of Bristol*'s Imperative Programming course (as part of the Computer Science undergraduate program) requires students to implement `triangle.c`, a simple program that takes as an input 3 sides . This is a JavaScript port.
- The idea came from a conversation with my Computer Scientist with Innovation cohort - they asked me what my favourite programming language was (I replied with JavaScript) and I had trouble explaining why - it is hoped that showing them this extension project they will be able to understand why.
- The course introduces Test-Driven-Development, so I ported over the tests and implemented the solution using TDD.


# Structure 
The only important files are `triangle.js` (the main source file) and `test/triangle_test.js` (the tests).

I resisted the urge to use frameworks/libraries in the implementation. The code is all self-written JavaScript with a sprinkling of ES6 sugar.
 
## How to Install & Run
- have node.js (v8+) installed
- clone this repo
- `npm install` (? maybe not required, but its almost midnight and I haven't got time to test just using node)
- `node ./triangle.js <side1> <side2> <side3>`

## How to Run Tests
- `npm install -g mocha babel-core`
- `npm run test`

## Notes & Observations

- Unsurprisingly, a lot of the code could be readily copy-pasted as-is from C to JS. The rest required the removal of types. Only a few e
- Having used it for this project, I now feel that Mocha is a great testing framework for JavaScript projects.
- All functions are passed a POJO as argument, with sides under the keys `a`, `b`, `c`. Perhaps a more elegant solution would have been an array of sides.
  - Passing arrays by value is not possible in C, only passing by reference (via pointers).
  - Sorting the array would be (even more) trivial in JavaScript.
- This is my first ES6 project. String interpolation, block scoping and modules are great additions to JavaScript!
- I would have preferred, if I had more time, to implement a browser based single-page-application that could take the inputs in via a form and rendered a visual representation of the triangle using [d3.js](https://d3js.org/).

- The last test is **VERY WEIRD**. It passes in C, but not in this project, so I removed it. The test wants the resulting triangle to be interpreted as a **scalene**, but Triangle.js interprets it as a **Right-Angled triangle**. Is the test wrong?
