exports.handler = function(event, context, callback) {
  const sha256 = require("crypto-js/sha256");

  const { CLOUDINARY_API_SECRET} = process.env
  const timestamp = Date.now();
  const signature = `cloud_name=drzfqrj57&timestamp=${timestamp}&username=website@freeagent.com${CLOUDINARY_API_SECRET}`

  callback(null, {
    headers: {
      "Access-Control-Allow-Origin" :"open-media-library-manually--cms-cloudinary-demo.netlify.app",
      "Access-Control-Allow-Methods":"GET"
    },
    statusCode: 200,
    body: JSON.stringify({
      signature: sha256(signature).toString(),
      timestamp: timestamp
    })
  });
};