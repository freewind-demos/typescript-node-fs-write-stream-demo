import fs from 'fs';

const filePath = './somefile.txt';

const stream = fs.createWriteStream(filePath);

stream.write('Hello\n');
stream.write('World\n');
stream.end();

console.log(`Done to the file: ${filePath}`);
