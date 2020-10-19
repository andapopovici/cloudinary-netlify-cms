exports.handler = function(event, context, callback) {
  const { API_TOKEN } = process.env

  callback(null, {
    headers: {
      "Access-Control-Allow-Origin" : "open-media-library-manually--cms-cloudinary-demo.netlify.app",
      "Access-Control-Allow-Methods": "GET"
    },
    statusCode: 200,
    body: "Hello, World " + API_TOKEN
  });
  };