var express = require("express");
var app = express();

app.get("/", function(request, response){
	response.render("home.ejs",{
		compName : "IBM"
	});
});

var server = app.listen(6060, function(){
	console.log("server is now running on port 6060");
});
