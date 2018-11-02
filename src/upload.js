require('dotenv').config()
var cloudinary = require('cloudinary')
var _ = require('lodash')
var fs = require('fs-extra')

cloudinary.config({
  cloud_name: `${process.env.CLOUD_NAME}`,
  api_key: `${process.env.CLOUDINARY_API_KEY}`,
  api_secret: `${process.env.CLOUDINARY_API_SECRET}`
});

var writeImageDataToFile = function (image) {
  fs.readFile('output/imageData.json', function(err, data) {
    if (err) throw err;

    var data = JSON.parse(data);
    data.push({
      title: image.original_filename,
      url: image.url
    });
    fs.writeFile('output/imageData.json', JSON.stringify(data, null, 4), function(err) {if (err) throw err});
  });
};

var uploadImage = function(file) {
  cloudinary.v2.uploader.upload(
    file,
    function(error, result) {
      if (error) console.log(error)

      console.log(`UPLOADED ${result.original_filename}`)
      writeImageDataToFile(result);
    }
  )
};

fs.readdir('output', function(err, files) {
  var transcriptFolder = _.find(files, function(file) { return !file.includes('.')})
  var filePath = `output/${transcriptFolder}/images`

  fs.readdir(filePath, function(err, files) {
    fs.writeFile('output/imageData.json', '[]', function(err) {if (err) throw err});
    files.forEach(function(file) {
      uploadImage(`${filePath}/${file}`);
    });
  })
});

