const { Kefir, R } = window;

console.group('Information');
console.info('The following libraries are available in the global scope, as well as in the browser console.');
console.table({ Kefir: { library: Kefir }, ramda: { library: R } });
console.groupEnd();
