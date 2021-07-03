// IMPORT MODULES under test here:
// import { add } from '../calculator.js';
import { getImage } from '../get-images.js';

const test = QUnit.test;

// name your test by what it is testing
test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true; // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('test getImage function', (expect) => {
    const expected = './assets/penguin.svg';
    const actual = getImage(12, 'empathy');
    expect.equal(actual, expected);
});
