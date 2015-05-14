var express = require('express')
var http = require('http')
var path = require('path');
var config = require('./config.js');
var serverRouter = require('./router.js');
var app = express();
var url = require("url");
var router = express.Router();
app.set('port', process.env.PORT || config.portConfiguration.port);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + 'public'));

serverRouter(app);

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});

