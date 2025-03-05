const fs = require('fs').promises;

async function writefile(filename, contents) {
    await fs.writeFile(filename, contents, 'utf-8');
    console.log("File written successfully");
}

writefile('a.txt', "added to file").catch(console.error);