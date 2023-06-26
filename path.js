const path = require('path');

const myFilePath = '/home/username/Documents/Files/Node.js/path.js';

// basename()

const base1 = path.basename(myFilePath);
const base2 = path.basename(myFilePath, '.js');

console.log(base1);
console.log(base2);

// extname()

const ext = path.extname(myFilePath);
console.log(ext);

// dirname()

const dir = path.dirname(myFilePath);
console.log(dir);

// join()
const myPath = path.join(
  'home',
  'username',
  'Documents',
  'Files',
  'Node.js',
  'path.js'
);
console.log(myPath);

// resolve() - absolut path

const absPath = path.resolve(
  'home',
  'username',
  'Documents',
  'Files',
  'Node.js',
  'path.js'
);
console.log(absPath);

// __dirname - environment variable - absolute path
console.log(__dirname);
// __filename - environment variable
console.log(__filename);
