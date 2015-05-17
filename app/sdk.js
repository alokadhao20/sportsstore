function Sdk() {
    
    
}
Sdk.prototype.getAllProducts = function(mongodb,req, res) {
    var self = this;
    mongodb.getAllProducts(function(err, result){
        console.log("In sdk getAllProducts err is "+err+" result is "+result);
        res.send(result);
        res.end();
    })
    
};

module.exports = Sdk;

