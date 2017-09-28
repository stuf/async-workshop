/**
 * EXERCISE
 * Creating event streams, computing dependent data and combining streams
 */

// DO NOT TOUCH THIS SECTION
// -------------------------

const body = document.querySelector('section.segments');
const bodyHeight = body.offsetWidth;
const bodyWidth = body.offsetHeight;

const allSegments = body.querySelector('section.segments > div');
const topLeftSegment = body.querySelector('.top.left');
const topRightSegment = body.querySelector('.top.right');
const bottomRightSegment = body.querySelector('.bottom.right');
const bottomLeftSegment = body.querySelector('.bottom.left');

// BEGIC EXERCISE
// --------------

/**
 * Create a stream from the `mouseMove` event
 */
const mouseMove = undefined;

/**
 * Implement two streams below that use the `mouseMove` stream to get the
 * mouse `x` and `y` coordinates.
 */
const mouseX = undefined;
const mouseY = undefined;

/**
 * Implement the streams below in such a way that, for example `topHalf` will give a value
 * only when the mouse `y` position is less than half of the view height.
 *
 * Hint: You can calculate this by using the above defined `bodyW` and `bodyH` constants.
 *       They are normal JS values so no additional magic required for now.
 */
const topHalf = undefined;
const bottomHalf = undefined;
const leftHalf = undefined;
const rightHalf = undefined;

/**
 * Implement the streams below by using _only_ using the top/bottom/left/right half streams
 * you implemented above so that, for example `topLeft` will only emit a value when the mouse is positioned
 * in the top-left portion of the screen.
 */
const topLeft = undefined;
const topRight = undefined;
const bottomRight = undefined;
const bottomLeft = undefined;
