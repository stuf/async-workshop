/**
 * The following libraries are exposed globally and exist here for clarity's sakes.
 * Libraries like Ramda are not mandatory, but provided as extra utility.
 */
const { Kefir, R } = window;

console.group('Information');
console.info('The following libraries are available in the global scope, as well as in the browser console.');
console.table({ Kefir: { library: Kefir }, ramda: { library: R } });
console.groupEnd();

const body = document.querySelector('section.segments');
const bodyH = body.offsetWidth;
const bodyW = body.offsetHeight;

const allSegs = body.querySelector('section.segments > div');
const segments = [
  body.querySelector('.top.left'),
  body.querySelector('.top.right'),
  body.querySelector('.bottom.right'),
  body.querySelector('.bottom.left')
];

const [tl, tr, br, bl] = segments;

const mouseMove = Kefir.fromEvents(document.body, 'mousemove');
const mouseX = mouseMove.map(x => x.pageX);
const mouseY = mouseMove.map(x => x.pageY);

console.log({ bodyH, bodyW });

// Bonus: define
const halfOf = R.curry((n, x) => x < (n / 2));
const otherHalfOf = R.complement(halfOf);

// const topHalf = mouseY.filter(x => x < (bodyH / 2));
// const bottomHalf = mouseY.filter(x => x >= (bodyH / 2));
const topHalf = mouseY.filter(halfOf(bodyH));
const bottomHalf = mouseY.filter(otherHalfOf(bodyH));
const leftHalf = mouseX.filter(x => x < (bodyW / 2));
const rightHalf = mouseX.filter(x => x >= (bodyW / 2));

topHalf.log('top half');
bottomHalf.log('bottom half');
leftHalf.log('left half');
rightHalf.log('right half');

const topLeft = Kefir.combine([topHalf, leftHalf])
                     .observe(() => {

                     })
