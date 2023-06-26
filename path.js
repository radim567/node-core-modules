const path = require('path');

const myFilePath = '/home/username/Documents/Files/Node.js/path.js';

// basename()

const base1 = path.basename(myFilePath);
const base2 = path.basename(myFilePath, '.js');

console.log(base1);
console.log(base2);
