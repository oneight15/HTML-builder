const fs = require('fs');
const path = require('path');
const text = fs.createReadStream(path.join(__dirname, 'text.txt'));

text.on('data', function (text) {
  console.log(text.toString());
});
