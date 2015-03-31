var Express = require('express');
var port = process.env.EXPRESS_PORT || 8080;


var app = Express();
app.use(Express.static(__dirname + '/app'));

app.listen(port, function() {
	console.log('Listening on port ' + port);
});