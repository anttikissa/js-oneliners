// Get an element. $('body > header')
const $ = (selector) => document.querySelector(selector);

// Get a NodeList of elements. for (p in $$('p')) { p.textContent = 'hello' }
const $$ = (selector) => document.querySelectorAll(selector);

// Create element, initializing it with attributes
// let myDiv = el('div')
// let myParagraph = el('p', { class: 'green', textContent: 'hello' })
const el = (name, attrs) => Object.assign(document.createElement(name), attrs);

// Calculate a checksum of a string as a floating point number between -1 and 1; empty string maps to 0
const checksum = (string) => string.split('').map(x => x.charCodeAt(0)).reduce((x, y) => Math.sin(x + y), 0);

// Quit node.js process when any of the required modules changes.
// To restart process automatically, run your server in a loop like:
//   while node main.js; do :; done
const autoexit = () => Object.keys(require.cache).forEach(key => require('fs').watch(key, () => process.exit(0)));

// Like 'npm run' but 300 milliseconds faster.
// Put in executable script 'nrun' and prepend with '#!/usr/bin/env node'
// Redirecting stderr is left as an exercise for the reader.
const npmRun = () => require('child_process').exec(require('./package.json').scripts[process.argv[2]]).stdout.pipe(process.stdout);

// Generate a UUID v4 too cleverly (source: https://gist.github.com/jed/982883)
const uuid = (a) => a ? (a ^ Math.random() * 16 >> a / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid);

// Calculate entropy of a message (such as a password)
const entropy = (s) => [...new Set(s)].map(c => s.split('').filter(d => d == c).length).reduce((e, freq) => e + freq * Math.log2(s.length / freq), 0);

module.exports = {
	entropy
};
