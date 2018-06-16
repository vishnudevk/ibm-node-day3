var express = require("express");
var app = express();

// Middlewares
app.use( express.static(__dirname) );
// app.use( "/assets", express.static(__dirname) );
// custom middleware
app.use("/", function(req,res,next){
	console.log(req.url);
	next();
});


app.get("/", function(request, response){
	response.send("<html><head></head><body><h1>hello there</h1> <img src='images/001.jpg'/> </body></html>");
	// response.send("<html><head></head><body><h1>hello there</h1> <img src='assets/images/001.jpg'/> </body></html>");
});

app.listen(6060, function(){
	console.log("server is now running on port 6060");
});