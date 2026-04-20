import fs from 'fs';
import pdf from 'pdf-parse';

let dataBuffer = fs.readFileSync('C:\\Users\\korja\\Downloads\\Screenshot_20260417_121442_0000.pdf');

pdf(dataBuffer).then(function(data) {
    console.log('--- TEXT ---');
    console.log(data.text);
}).catch(function(err) {
    console.error("Error reading PDF:", err);
});
