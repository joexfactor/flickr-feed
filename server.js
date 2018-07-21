const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('./dist/flickr-feed-angular'));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});
app.listen(process.env.PORT || 8080);
