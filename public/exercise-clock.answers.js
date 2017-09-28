/**
 * EXERCISE
 * Simple clock
 */

const getCurrentTime = () => new Date().toLocaleTimeString();

// BEGIN EXERCISE
// --------------

/**
 * Create a simple clock that uses Kefir's `.fromPoll` function.
 * Set the resulting time into the DOM element with the id `poll`.
 *
 * HINT: You can use the `setIntoElement` function defined above
 * for easymode.
 */
const pollClock =
  Kefir.fromPoll(1000, getCurrentTime)
       .observe(x => setIntoElement('poll', x));

/**
 * Create a simple clock that uses Kefir's `.interval` function.
 * Set the resulting time into the DOM element with the id `interval`.
 *
 * HINT: You can use the `setIntoElement` function defined above
 * for easymode.
 */
const intervalClock =
  Kefir.interval(1000, [])
       .map(getCurrentTime)
       .observe(x => setIntoElement('interval', x));

