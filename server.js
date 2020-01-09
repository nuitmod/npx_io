var express = require("express");
var app = require('express.io')();
//app.http().io();
var port=7076;
//var path = require('path');
//var app=express()

app.get('/', function(req, res){
  console.log("request was made from ", req.url);
  //res.sendFile(__dirname + '/index.html');
  res.send("io void deep web");
})

app.get('/io', function(req, res) {
    req.io.route('some-cool-realtime-route');
});


console.log("io server vaiting on port", port);
app.listen(port)




/*
var io = require('socket.io')(80);
var cfg = require('./config.json');
var tw = require('node-tweet-stream')(cfg);
tw.track('socket.io');
tw.track('javascript');
tw.on('tweet', function(tweet){
  io.emit('tweet', tweet);
});
*/
