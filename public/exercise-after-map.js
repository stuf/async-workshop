/**
 * EXERCISE
 * Life outside of map
 */

// DO NOT TOUCH
// ------------

const numbers = Kefir.sequentially(100, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

// BEGIN EXERCISE
// --------------

/**
 * Use the `filter` method to filter out odd numbers
 */
const evenNumbers = undefined;

/**
 * Use `debounce` to create a debounced version of the `numbers` stream and
 * then call `log` on the resulting observable.
 *
 * Food for thought:
 * How do you think it will behave? If not, why.
 */
const debounced = undefined;

/**
 * Delay the `numbers` observable by 1000ms
 * How does this behave compared to `debounced`
 */
const delayed = undefined;

/**
 * Create a delayed Observable based on `evenNumber` created earlier.
 * Make every number be delayed by 500ms
 *
 * How does this compare to the earlier two observables?
 */
const delayedEven = undefined;
