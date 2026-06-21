import fs from 'node:fs';

let chunkCount = 0;
let totalBytes = 0;

const readableStream = fs.createReadStream('text.txt', {
  encoding: 'utf8',
  highWaterMark: 1024,
});

readableStream.on('data', chunk => {
  chunkCount++;
  const chunkSize = Buffer.byteLength(chunk, 'utf8');
  totalBytes += chunkSize;
  console.log(`Chunk #${chunkCount}: ${chunkSize} bytes`);
});

readableStream.on('end', () => {
  console.log(`\nTotal size: ${totalBytes} bytes`);
  console.log(`Total chunks: ${chunkCount}`);
});

readableStream.on('error', error => {
  console.error('Помилка при читанні файлу:', error.message);
});

console.log(`Початок читання файлу: text.txt`);
