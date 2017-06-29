var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var port = 5000;
app.use(bodyParser.urlencoded({extended: true}));
var random = require('./random_module/random.js');


app.get('/*', function(req,res){
  var file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname,'/public/', file));
});

app.listen(port, function(){
  console.log('Server runing on port', port);
});