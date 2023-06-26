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

readFile('message4.txt');

// Delete a File

async function deleteFile(filename) {
  try {
    await fs.unlink(filename);
    console.log(`File ${filename} has been deleted`);
  } catch {
    (err) => console.log(err);
  }
}

// Rename  Fila

async function renameFile(oldName, newName) {
  try {
    await fs.rename(oldName, newName);
    console.log(`File ${oldName} has been renamed to ${newName}`);
  } catch {
    (err) => console.log(err);
  }
}

renameFile('message4.txt', 'message5.txt');
renameFile('message3.txt', 'message33.txt');

// Create Folder

async function createFolder(folderName) {
  try {
    await fs.mkdir(folderName);
    console.log(`Folder ${folderName} has been created`);
  } catch {
    (err) => console.log(err);
  }
}

createFolder('newFolder');
