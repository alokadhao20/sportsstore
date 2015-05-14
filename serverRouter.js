/**
 * Created by aloka on 5/6/2015.
 */
var url = require("url");
module.exports = function(app) {
    app.get('/',  examlpeSample);
};

function examlpeSample(req, res) {
    res.sendfile(__dirname+"/public/partials/01_exampleSample.html");
}
