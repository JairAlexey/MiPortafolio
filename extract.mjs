import fs from 'fs';
import pdf from 'pdf-parse/lib/pdf-parse.js';

let dataBuffer = fs.readFileSync('Curriculum Harvard Jair Rueda.pdf');

pdf(dataBuffer).then(function(data) {
    console.log(data.text);
});
