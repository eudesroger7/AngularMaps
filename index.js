const express = require('express');

const app = express();


app.set('port', 80);


app.use(express.static(__dirname + '/dist'));


app.get('*',function (req, res) {

  res.sendFile(__dirname + '/dist/index.html');

});


app.listen(app.get('port'), function() {

  console.log('Running on port ', app.get('port'));

});