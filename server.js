const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(__dirname + '/public'));
app.get('/[^\.]+$', function (req, res) {
  res.set('Content-Type', 'text/html')
    .sendFile(path.join(__dirname, '/public/index.html'))
});

app.listen(process.env.PORT || 8080);
