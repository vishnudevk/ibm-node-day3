var express = require("express");
// npm i ejs --save-dev
// ejs is a dev requirement
var app = express();
    app.set("view engine", "ejs"); // if you dont want to use the extension of templage engine when you refer it
	
var data = ["batman", "ironman", "superman", "spiderman"];

app.get("/", function(request, response){
	response.render("home",{
		compName : "IBM",
		prodList : data
	});
});

var server = app.listen(6060, function(){
	console.log("server is now running on port 6060");
});
