//  File Handling in Node.js (Callbacks & Promises)

const fs = require('fs');
const fsPromises = require('fs').promises;

// Using Callback
fs.readFile('sample.txt', 'utf8', (err, data) => {
  if (err) return console.error("Callback Error:", err);
  console.log("Callback Read:", data);
});

// Using Promises
async function handleFile() {
  try {
    const data = await fsPromises.readFile('sample.txt', 'utf8');
    console.log("Promise Read:", data);

    await fsPromises.writeFile('output.txt', 'This is written using Promises!');
    console.log("File written using Promises.");
  } catch (err) {
    console.error("Promise Error:", err);
  }
}

handleFile();
