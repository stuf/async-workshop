/**
 * EXERCISE
 * Input validation
 */
const textField = document.getElementById('input');

const input = Kefir.fromEvents(textField, 'change');

// EXERCISE
// --------

/**
 * Implement a function that will return an error message
 * if the input length is less than eight characters.
 *
 * If you want, you can also implement some other validation in this function.
 *
 * Remember to make sure you return an error value.
 */
const validation = text => {
  undefined;
};

/**
 * Modify the definition below so that the element with the ID `error`
 * is populated with whatever it emits on `error`
 */
const validationResult =
  input.flatMapLatest(validation);

