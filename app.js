// requires
var express = require('express');

var app = express();



// config
var port = 3001;

// capture all requests
app.use(function(req, res, next){
  console.log("GET - " + req.url);
  next();
});

app.route('/')
  .get(function(req, res){
    res.json(
      {
        "success": true,
        "msg": "You have requested ROOT on bamurdoch."
      }
    );
  });

app.get('/endpoint', function(req, res){
  res.json(
    {
      "success": true,
      "msg": "listing endpoints",
      "endpoints": [
        {"/gen_number": "Generates a random number between 1-10 (inc)"},
        {"/always_drop": "Drops your request"},
        {"/random_drop": "Occasionally drops the request"},
        {"/random_delay": "Takes time to do the request"},
        {"/random_delay_or_drop": "Takes time to do the request, occasionally drops the request"}
      ]
    }
  );
});

app.get('/endpoint/gen_number', function(req, res){
  var rand_num = Math.floor(Math.random() * 10) + 1;
  console.log("Random number generated: " + rand_num);

  res.json(
    {
      "success": true,
      "msg": "Generated a number",
      "num": rand_num
    }
  );
});

app.get('/endpoint/always_drop', function(req, res){
  console.log("Request dropped");
});

console.log("Bamurdoch online on port " + port);
app.listen(port);