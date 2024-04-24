// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var url = require('url');
var querystring = require('querystring');
var comments = require('./comments');
var commentsPath = path.join(__dirname, 'comments.json');

// Read comments from file
var comments = require('./comments');
var commentsPath = path.join(__dirname, 'comments.json');

// Parse POST request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Set up server
app.use(express.static(path.join(__dirname, 'public')));

// Get comments from file
app.get('/comments', function(req, res) {
  fs.readFile(commentsPath, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    var comments = JSON.parse(data);
    res.json(comments);
  });
});

// Add comment to file
app.post('/comments', function(req, res) {
  fs.readFile(commentsPath, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    var comments = JSON.parse(data);
    var newComment = {
      id: Date.now()