var https = require('https');

https.createServer(function (req, res) {
  res.write("i'm alive");
  res.end()
}).listen(8080);
|
