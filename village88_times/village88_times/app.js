var express = require('express.io');
var path = require('path');
var app = express().http().io();
var mysql = require('mysql');

var db = mysql.createConnection({
	user: "root",
	password: "",
	database: "village88_times"
});

app.configure(function(){
  app.use(express.cookieParser());  
  app.use(express.bodyParser());
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.session({secret: 'monkey'}));
  app.set('view engine', 'ejs');
});


var route = require('./routes/index.js')(app, mysql, db);
console.log("Server running on port 3000");
app.listen(3000);