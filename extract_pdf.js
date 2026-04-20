const fs = require('fs');
const pdf = require('pdf-parse');

console.log('pdf export:', pdf);
if (typeof pdf === 'function') {
  let dataBuffer = fs.readFileSync('C:\\Users\\korja\\Downloads\\Screenshot_20260417_121442_0000.pdf');
  pdf(dataBuffer).then(function(data) {
      console.log('--- TEXT ---');
      console.log(data.text);
  }).catch(function(err) {
      console.error("Error reading PDF:", err);
  });
}
