const {readFileSync, writeFileSync} = require('fs');
// alternative way to access methods

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first);
console.log(second);

writeFileSync('./content/result-sync.txt', 
`Here is the result: ${first}, ${second}`, {flag: "a"});