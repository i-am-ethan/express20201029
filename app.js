var express = require('express');
app = express();

app.get('/', function(req,res){
  res.send('hello world');
});
app.get('/about', function(req,res){
  res.send('about now');
});

app.listen(3000);
console.log("server running");
