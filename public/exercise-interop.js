/**
 * EXERCISE
 * Working with events and callbacks through Observables only
 */

// DO NOT TOUCH
// ------------

const responseElement = document.getElementById('json');

const showResponse = response =>
  responseElement.innerText = JSON.stringify(response, null, 2);

// BEGIN EXERCISE
// --------------

/**
 * Create an Observable that will emit click events
 * for the button with an ID of "click-me"
 */
const clickObs = undefined;

/**
 * Create an Observable that makes a request to get JSON
 * from an API.
 *
 * For simplicity, we'll use JSON Placeholder, but you can
 * choose any open API you want.
 */
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

const apiRequest = undefined;

/**
 * Derive a new observable from `clickObs`, that will then
 * perform the API request. After the request has been done,
 * call the `showResponse` function to display the response
 * on the page.
 *
 * EXERCISE BONUS:
 * Make it work so that it only performs the request on the first click.
 */
const getResponseOnClick = undefined;
