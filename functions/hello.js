exports.handler = function(event, context, callback) {
  callback(null, {
    headers: {
      "Access-Control-Allow-Origin" : "*",
      "Access-Control-Allow-Methods": "GET"
    },
    statusCode: 200,
    body: "Hello, World"
  });
  };