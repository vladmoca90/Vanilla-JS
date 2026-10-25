# Vanilla-JS

A collection of small JavaScript practice exercises organized by topic. The
repository also includes Jasmine specs for selected exercises.

## Project layout

- `scripts/Arrays/` - array operations and algorithms
- `scripts/Strings/` - string manipulation exercises
- `scripts/Numbers/` and `scripts/Math/` - numeric calculations and math helpers
- `scripts/Objects/` and `scripts/Dictionary/` - objects, dictionaries, and maps
- `scripts/Switch/` - switch-statement exercises
- `scripts/Classes/` - class-based exercises
- `scripts/Others/` and `scripts/Lifecycle/` - additional JavaScript exercises
- `jasmine-tests/` - Jasmine specs and the browser test runner

## Math project

The Math exercises are in `scripts/Math/`. Their Jasmine specs are in
`jasmine-tests/Math/`, with one spec file for each Math script:

- `randomNumber.js` - generates an integer in an inclusive interval
- `power-square-hyp.js` - calculates powers, squares, and hypotenuses
- `numberSign.js` - returns the sign of a number
- `min-maxOfTwoDigits.js` - generates an integer between two two-digit bounds
- `logarithm.js` - calculates a natural logarithm
- `degreesToRadians.js` - converts between degrees and radians
- `cubicRoot.js` - calculates a cube root

## Running the Jasmine specs

Open `jasmine-tests/SpecRunner.html` in a browser. The page loads the bundled
Jasmine 3.1.0 runner, project scripts, and registered spec files, then displays
the test results in the browser.

The `npm test` script is not configured to run the Jasmine suite.
