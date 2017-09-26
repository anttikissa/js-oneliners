// Get an element. $('body > header')
const $ = (selector) => document.querySelector(selector);

// Get a NodeList of elements. for (p in $$('p')) { p.textContent = 'hello' }
const $$ = (selector) => document.querySelectorAll(selector);

// Create element, initializing it with attributes
// let myDiv = el('div')
// let myParagraph = el('p', { class: 'green', textContent: 'hello' })
const el = (name, attrs) => Object.assign(document.createElement(name), attrs);

// Calculate a (probably a bad) checksum of a string as a floating point number between -1 and 1; empty string maps to 0
const checksum = (string) => string.split('').map(x => x.charCodeAt(0)).reduce((x, y) => Math.sin(x + y + x * y), 0);

// Quit node.js process when any of the required modules changes.
// To restart process automatically, run your server in a loop like:
//   while node main.js; do :; done
const autoexit = () => Object.keys(require.cache).forEach(key => require('fs').watch(key, () => process.exit(0)));

// Like 'npm run' but 300 milliseconds faster.
// Put in executable script 'nrun' and prepend with '#!/usr/bin/env node'
// Redirecting stderr is left as an exercise for the reader.
const npmRun = () => require('child_process').exec(require('./package.json').scripts[process.argv[2]]).stdout.pipe(process.stdout);

// Generate a UUID v4 too cleverly
// Source: https://gist.github.com/jed/982883
const uuid = (a) => a ? (a ^ Math.random() * 16 >> a / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid);

// Calculate entropy of a message (such as a password)
// Source:
// https://gist.github.com/ppseprus/afab8500dec6394c401734cb6922d220
// Adapted to return the entropy of the whole message.
const entropy = (s) => [...new Set(s)].map(c => s.match(RegExp(c, 'g')).length).reduce((e, freq) => e + freq * Math.log2(s.length / freq), 0);

// The infamous pad2
// Source: https://medium.com/@p_arithmetic/a-collection-of-my-6-favorite-javascript-one-liners-7c80a4b731f8
const pad2 = (s) => ('0' + s).substr(-2);

// Format 1 => '1st', 2 => '2nd' etc.
// Source:
// https://medium.com/@p_arithmetic/a-collection-of-my-6-favorite-javascript-one-liners-7c80a4b731f8
// Shaved some characters by using .exec() instead of .match()
const nth = (o) => o + (['st', 'nd', 'rd'][/1?\d\b/.exec(o) - 1] || 'th');

// HTTP server that redirects all queries to HTTPS
const redirect = () => require('http').createServer((req, res) => (res.writeHead(301, { location: `https://${req.headers.host}${req.url}` }), res.end())).listen(80);

module.exports = {
	checksum,
	entropy,
	nth,
	pad2,
	redirect
};
