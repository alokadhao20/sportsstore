/**
 * Created by aloka on 5/6/2015.
 */
var Sdk = require('./app/sdk.js');
var sdk = new Sdk();

var url = require("url");
module.exports = function(app,mongodb) {
    app.get('/',  examlpeSample.bind(null, mongodb));
    app.get('/products',getAllProducts.bind(null, mongodb));
};

function examlpeSample(mongodb,req, res) {
    res.sendfile(__dirname+"/public/views/app.html");
}

function getAllProducts(mongodb,req, res) {
    sdk.getAllProducts(mongodb,req, res);
}
