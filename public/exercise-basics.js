/**
 * EXERCISE
 * Basics about streams
 */

// BEGIN EXERCISE
// --------------

/**
 * Create a single-value Observable (constant) that contains a number value
 */
const constant10 = undefined;

/**
 * Create an Observable containing an error constant that contains
 * a string to work as an error message
 */
const valueNot10Error = undefined;

/**
 * Create an Observable that has already ended
 */
const willNeverWork = undefined;

/**
 * Create an Observable that emits a number after two seconds
 */
const valueForLater = undefined;


/**
 * After you have implemented the above, uncomment the lines below
 * and check your browser's console output.
 *
 * What do you think it will output?
 * Did the output match what you expected? Why, or why not?
 * Also try shuffling the logging lines around and see if the output changes radically.
 */
// constant10.log('constant10');
// valueNot10Error.log('valueNot10Error');
// willNeverWork.log('willNeverWork');
// valueForLater.log('valueForLater');

/**
 * Finally, attach observers to your streams and set the text to an element
 * that has the same ID as the variable's name, e.g. `valueForLater` has an element
 * with the ID `valueForLater`.
 *
 * HINT: You can use `setIntoElement(id, text)`
 *
 * - Are all the values set properly? If not, why?
 * - If values are missing, check the Kefir documentation for `observe`
 *   to see if there exists a way that you can use to react to something happening in that Observable.
 */
// constant10.observe();
// valueNot10Error.observe();
// willNeverWork.observe();
// valueForLater.observe();
