const { Kefir, R } = window;

console.group('Information');
console.info('The following libraries are available in the global scope, as well as in the browser console.');
console.table({ Kefir: { library: Kefir }, ramda: { library: R } });

//

const setIntoElement = (id, text) =>
  document.getElementById(id).innerText = text;

console.info('Additionally, there are some basic utility functions that you can use:')
console.info({ setIntoElement });

console.groupEnd();
