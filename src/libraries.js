/**
 * The following libraries are exposed globally and exist here for clarity's sakes.
 * Libraries like Ramda are not mandatory, but provided as extra utility.
 */
const { Kefir, R } = window;

console.group('Information');
console.info('The following libraries are available in the global scope, as well as in the browser console.');
console.table({ Kefir: { library: Kefir }, ramda: { library: R } });
console.groupEnd();
