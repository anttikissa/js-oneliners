// Get an element. $('body > header')
let $ = (selector) => document.querySelector(selector);

// Get a NodeList of elements. for (p in $$('p')) { p.textContent = 'hello' }
let $$ = (selector) => document.querySelectorAll(selector);

// Create element, initializing it with attributes
// let myDiv = el('div')
// let myParagraph = el('p', { class: 'green', textContent: 'hello' })
let el = (name, attrs) => Object.assign(document.createElement(name), attrs);

// Calculate a checksum of a string as a floating point number between -1 and 1; empty string maps to 0
let checksum = (string) => string.split('').map(x => x.charCodeAt(0)).reduce((x, y) => Math.sin(x + y), 0);

// Quit node.js process when any of the required modules changes.
// To restart process automatically, run your server in a loop like:
//   while node main.js; do :; done
Object.keys(require.cache).forEach(key => require('fs').watch(key, () => process.exit(0)));
