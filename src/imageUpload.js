require('dotenv').config()
const s3 = require('s3')
const AWS = require('aws-sdk');

async function uploadImage (imageFiles) {

  let s3bucket = new AWS.S3({
    accessKeyId: process.env.AWS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    Bucket: process.env.AWS_BUCKET_NAME,
  })

    s3bucket.createBucket(function () {
      var ResponseData = [];
  
      imageFiles.map((file) => {
        var params = {
          Bucket: process.env.AWS_BUCKET_NAME,
          Key: file.originalname,
          Body: file.buffer,
          ACL: 'public-read'
        };
        s3bucket.upload(params, function (err, data) {
          if (err) {
            console.log("Error uploading data: ", err);
          }
          else{
              ResponseData.push(data);
              if(ResponseData.length == imageFiles.length){
                //console.log(ResponseData)
                console.log("-----upload successful-----")
                return ResponseData
              }
            }
        });
      });
    });
  
  const imgUrls = imageFiles.map((image) => {
    return getImageUrl(image, image.originalname)
  })
  return imgUrls
}

const getImageUrl = (imageFile, key) => {
  const url = s3.getPublicUrlHttp(process.env.AWS_BUCKET_NAME, key)
  return url
}

module.exports = uploadImage