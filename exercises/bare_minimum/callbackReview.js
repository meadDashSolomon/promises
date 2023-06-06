/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('needle');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  // read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      callback(err, null);
    } else {
      const lines = content.toString().split('\n');
      callback(null, lines[0]);
    }
  })
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  request.get(url, (err, res) => {
    if (err) {
      callback (err, null);
    } else {
      callback(null, res.statusCode)
    }
  })
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
