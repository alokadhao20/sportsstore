// created a class binarySearch
var MongoClient = require('mongodb').MongoClient
, format = require('util').format;


function mongoDB() {
    
    
}


mongoDB.prototype.createConnection = function(getAllProductsCallback) {
    var self = this;
    MongoClient.connect('mongodb://127.0.0.1:27017/sortsstore', function(err, db) {
        if(err){
            console.log("I am retruning err");
            getAllProductsCallback(err,null);
        }else {
            self.products = db.collection('products');
            getAllProductsCallback(null,'done');
            
        }
    });
    
};


mongoDB.prototype.getAllProducts = function(getAllProductsCallback) {
    var self = this;
    
    self.products.find({}).toArray(function(err, docs) {
        if(err){
            getAllProductsCallback(err,null)
        }else {
            console.log("Found the following records");
            console.dir(docs);
            getAllProductsCallback(null,docs);
        }
  });
    
};


module.exports = mongoDB;