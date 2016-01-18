var express = require('express');
var port = process.env.EXPRESS_PORT || 8080;
var compress = require('compression');

var app = express();
app.use(compress());
var oneDay = 86400000;

app.use(express.static(__dirname + '/app', { maxAge: oneDay }));

app.get('/textAdventure', function (req, res) {
    
    res.redirect('/games/TextAdventure/TextAdventure.html');
})

app.listen(port, function() {
	console.log('Listening on port ' + port);
});