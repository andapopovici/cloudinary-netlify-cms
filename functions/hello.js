import sha256 from 'crypto-js/sha256';

exports.handler = function(event, context, callback) {
  const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET} = process.env

  const timestamp = Date.now();
  const signature = `cloud_name=${CLOUDINARY_CLOUD_NAME}}&timestamp=${timestamp}&username=website@freeagent.com${CLOUDINARY_API_SECRET}`

  callback(null, {
    headers: {
      "Access-Control-Allow-Origin" :"open-media-library-manually--cms-cloudinary-demo.netlify.app",
      "Access-Control-Allow-Methods":"GET"
    },
    statusCode: 200,
    body: sha256(signature)
  });
  };