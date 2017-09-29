/**
 * EXERCISE
 * Chaining observables
 */

const initial = Kefir.sequentially(1000, [1, 2, 3, 4, 5]);

// BEGIN EXERCISE
// --------------

/**
 * With the `initial` observable, use `flatMap` to turn the values
 * into error values
 *
 * HINT: Remember how you created error constants earlier?
 */
const errors = undefined;

/**
 * Combine multiple delayed observables into one long chain,
 * so that the first takes 1s to emit a value, the next 2s, and so on.
 *
 * Food for thought:
 * Do you think it will change its behavior if you try to emit errors in between?
 */
const laterChain = undefined;
