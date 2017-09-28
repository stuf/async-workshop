/**
 * EXERCISE
 * Creating event streams, computing dependent data and combining streams
 */

// DO NOT TOUCH THIS SECTION
// -------------------------

const body = document.querySelector('section.segments');
const bodyHeight = body.offsetWidth;
const bodyWidth = body.offsetHeight;

const allSegments = body.querySelectorAll('section.segments > div');
const topLeftSegment = body.querySelector('.top.left');
const topRightSegment = body.querySelector('.top.right');
const bottomRightSegment = body.querySelector('.bottom.right');
const bottomLeftSegment = body.querySelector('.bottom.left');

const activeStyle = {
  border: 'solid 1px #f00',
  backgroundColor: 'rgba(0, 0, 0, 0.3)'
};

const changeOnly = R.curry((el, props) => {
  const allSegs = [].slice.call(allSegments);
  allSegs.forEach(seg => seg !== el && (seg.style = {}));
  Object.assign(el.style, activeStyle);
});

// BEGIC EXERCISE
// --------------

/**
 * Create a stream from the `mouseMove` event
 */
// const mouseMove = undefined;
const mouseMove =
  Kefir.fromEvents(body, 'mousemove');

/**
 * Implement two streams below that use the `mouseMove` stream to get the
 * mouse `x` and `y` coordinates.
 */
// const mouseX = undefined;
// const mouseY = undefined;
const mouseX = mouseMove.map(R.prop('clientX'));
const mouseY = mouseMove.map(R.prop('clientY'));

/**
 * Implement the streams below in such a way that, for example `topHalf` will give a value
 * only when the mouse `y` position is less than half of the view height.
 *
 * Hint: You can calculate this by using the above defined `bodyW` and `bodyH` constants.
 *       They are normal JS values so no additional magic required for now.
 */
// const topHalf = undefined;
// const bottomHalf = undefined;
// const leftHalf = undefined;
// const rightHalf = undefined;
const topHalf = mouseY.map(y => y < (bodyHeight / 2)).filter().log('top50') //.log('top50');
const bottomHalf = mouseY.filter(y => !(y < (bodyHeight / 2))) // .log('bottom50');
const leftHalf = mouseX.filter(x => x < (bodyWidth / 2)) //.log('left50');
const rightHalf = mouseX.filter(x => !(x < bodyWidth / 2)) //.log('right50');

/**
 * Implement the streams below by using _only_ using the top/bottom/left/right half streams
 * you implemented above so that, for example `topLeft` will only emit a value when the mouse is positioned
 * in the top-left portion of the screen.
 */
// const topLeft = undefined;
// const topRight = undefined;
// const bottomRight = undefined;
// const bottomLeft = undefined;
const topLeft =
  Kefir.combine({ top: topHalf, left: leftHalf }).log('topLeft')
