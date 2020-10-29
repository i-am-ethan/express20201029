var express = require('express');
app = express();

app.get('/', function(req,res){
  res.send('hello world');
});
app.get('/about', function(req,res){
  res.send('about now');
});
app.get('/users/:name', function(req,res){
  res.send(req.params.name);
});
app.get('/users/:name?', function(req,res){
  if(req.params.name){
    res.send(req.params.name);
  }else{
    res.send("hello nobody");
  }
});

app.get('/items/:id([0-9]+)', function(req,res){
  res.send(req.params.id);
});

app.listen(3000);
console.log("server running");


