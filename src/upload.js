const express = require('express');
const imageUpload = require('./imageUpload')
const s3 = require('s3')
const multer = require('multer');
// This is how to call imageUpload
// imageUpload('../output/advanced-react-component-patterns/images/logo.png')
//             .then(r => console.log('url: ', r))

const app = express();

app.use(express.static('public'));

// Main, error and success views
app.get('/', function (request, response) {
  response.sendFile(__dirname + '/public/index.html');
});

var storage = multer.memoryStorage({
  destination: function(req, file, callback) {
      callback(null, '');
  }
});

let uploads = multer({ storage: storage }).array('upload')
app.post('/', uploads, function (request, response, next) {
 imageUpload(request.files)
  .then(r => r.map((url) => {
    console.log(url)
  }))
  response.redirect("/success")
});

app.get("/success", function (request, response) {
  response.sendFile(__dirname + '/public/success.html');
});

app.get("/error", function (request, response) {
  response.sendFile(__dirname + '/public/error.html');
});

app.listen(3001, function () {
  console.log('Server listening on port 3001.');
});
