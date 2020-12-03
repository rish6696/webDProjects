var request = require('request');

var headers = {
    'Content-Type': 'application/json'
};

var dataString = `{
  "analyzer": "standard",
  "text": "the white space analyser"
}`


var options = {
    url: 'http://localhost:9200/_analyze',
    method: 'POST',
    headers: headers,
    body: dataString
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);
