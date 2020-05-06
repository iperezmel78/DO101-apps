var express = require('express');
app = express();

app.get('/', function (req, res) {

  resp = 'This is version 1 of the application';

  res.send(resp);

});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

