// Write to file
// Callback version
/*
const fs = require('fs');
fs.writeFile('message.txt', 'Hello Node.js', (err) => {
    if (err) throw err;
    console.log('File has been written');
}); */

// Write to file
// Promise version
/* const fs = require('fs/promises');

fs.writeFile('message2.txt', 'Hello Node.js Ver promises')
.then(() => console.log('File has been written'))
.catch((err) => console.log(err)); */

// Write to file
// Sync version
// const fs = require('fs');

// fs.writeFileSync('message3.txt', 'Hello Node.js Sync version');
// console.log('File created sync version');

// Write to file
// Async/Await version
const fs = require('fs/promises');
async function createFile(filename, content) {
  try {
    await fs.writeFile(filename, content);
    console.log('File 4 has been written');
  } catch (err) {
    console.log(err);
  }
}

createFile('message4.txt', 'Hello 4 - Node.js Async/Await version');

// Read from a File
async function readFile(filename) {
  try {
    const data = await fs.readFile(filename, 'utf8');
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

readFile('message.txt');
readFile('message2.txt');
readFile('message3.txt');
readFile('message4.txt');
