var express = require("express");
var app = express();

/*
app.listen(3000);
console.log("server is now running on port 3000");
*/

var listen = app.listen(3000);
console.log("webserver is now running on localhost:"+listen.address().port);

/*
or 

app.listen(function(){
	console.log(this.address().port+" is the port number ")
});
 */