/**
 * Created by aloka on 5/6/2015.
 */
var url = require("url");
module.exports = function(app,mongodb) {
    app.get('/',  examlpeSample.bind(null, mongodb));
};

function examlpeSample(mongodb,req, res) {
    res.sendfile(__dirname+"/public/views/app.html");
}
