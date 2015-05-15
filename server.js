var express = require('express')
var http = require('http')
var path = require('path');
var async = require('async');
var config = require('./config.js');
var serverRouter = require('./router.js');
var mongoDB = require('./app/dbConnection.js');

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

var mongodb = new mongoDB();

async.waterfall([
    function(callback) {
        mongodb.createConnection(function(err,result){
            if(err){
                callback(err, null, null);
            }
            else {
                if(result==='done'){
                    callback(null);
                }else {
                    callback('createConnection result is not done');
                }
            }
        });
    },
    function(callback) {
        http.createServer(app).listen(app.get('port'), function(){
            console.log('Express server listening on port ' + app.get('port'));
            callback(null);
        }).on( 'error', function (e) {
            callback(e);
        });
    },
    function( callback) {
        serverRouter(app,mongodb);
        callback(null, 'done');
    }
], function (err, result) {
    if(err){
        console.log("Error while starting server - ",err);
    }
    console.log("server started normally");   
});
