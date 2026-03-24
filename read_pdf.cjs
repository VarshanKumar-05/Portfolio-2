const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('public/certificates/Varshan.pdf');

pdf(dataBuffer).then(function(data) {
    console.log(data.text.substring(0, 3000));
}).catch(function(error) {
    console.error(error);
});
