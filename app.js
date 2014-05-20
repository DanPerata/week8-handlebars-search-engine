var express = require('express');
var bodyParser = require('body-parser');

var homeController = require('./controllers/homeController');
var searchController = require('./controllers/searchController');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', homeController.home);
app.get('/search', searchController.search);

var server = app.listen(6867, function() {
	console.log('Express server listening on port ' + server.address().port);
});
