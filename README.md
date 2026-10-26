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

The specs use the bundled Jasmine 3.1.0 browser runner. To run them:

1. Open `jasmine-tests/SpecRunner.html` in a web browser.
2. Wait for Jasmine to finish. The runner automatically executes every spec
   file registered in the page.
3. Check the summary at the top of the page for the number of passed and failed
   specs. Select a failed spec to see its error details.
4. To focus on one group, enter its suite name in Jasmine's **Spec Filter**:

| Test group | Spec folder | Filter text |
| --- | --- | --- |
| Dictionary | `jasmine-tests/dictionary/` | `dictionary project` |
| Interview practice | `jasmine-tests/Tests-interview-practice/` | `countStatuses`, `discount calculations`, `getServiceStats`, `twoSum`, `prices`, `firstDuplicate`, or `unique service names` |
| Other exercises | `jasmine-tests/others-tests/` | `name project`, `language project`, or `daysUntilChristmas project` |
| Math | `jasmine-tests/Math/` | Use the suite name for the spec, such as `randomNumber project` or `cubic root project` |
| Math utilities | `jasmine-tests/utilities/` | `math-utilities` |

The filter matches spec descriptions; it does not execute a folder as a
separate test command. The `jasmine-tests/switch-tests/` specs are not currently
registered in `SpecRunner.html`, so they will not run with the steps above.
To include a new spec in the browser run, add its script tag to
`jasmine-tests/SpecRunner.html` after the script it tests, then reload the page.

The `npm test` script is not configured to run the Jasmine suite.
