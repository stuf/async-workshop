const { Kefir, R } = window;

console.group('Information');
console.info('The following libraries are available in the global scope, as well as in the browser console.');
console.table({ Kefir: { library: Kefir }, ramda: { library: R } });

//

const setIntoElement = R.curry((id, text) =>
  document.getElementById(id).innerText = text);

console.info('Additionally, there are some basic utility functions that you can use:')
console.info({ setIntoElement });

const tick = Kefir.fromPoll(1000, () => new Date());

const tickError = Kefir.fromPoll(1000, () => new Date())
                       .flatMap(Kefir.constantError);

Object.assign(window, { setIntoElement, tick, tickError });

console.groupEnd();
