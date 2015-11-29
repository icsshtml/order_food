var express  	= require('express'),
	server   	= express(),
	bodyParser 	= require('body-parser'),
	mongoose    = require('mongoose'),
	Schema		= mongoose.Schema;

var PORT = 		process.env.PORT || 3000,
	MONGOURI =	process.env.MONGOLAB_URI || 'mongodb://localhost:27017';

var orderSchema = new Schema({
	
	fname: { type: String, required: true},
	lname: { type: String, required: true},
	phone: { type: String, required: true},
	quantity: { type: Number, required: true},
	price: { type: Number, required: true}, 

	created: { type: Date, default: Date.now }
});

var Order = mongoose.model('Order', orderSchema);


server.use(express.static('./public'));
server.use(bodyParser.json());

server.get('/orders', function(request, response){
	Order.find({}, function(err, orders){
		response.json(orders);
	})
});

// Post to ORDERS
server.post('/orders', function(req, res){
	// first create a new ORDER, and pass it the req.body object. 
	Order.create(req.body, function(err, data){
		// then on the callback, look up all Orders, and in the response (res), send back the json version of the data (which is the orders). 
	    Order.find({}, function(err, orders){
	      res.json(orders);
	    });
	  });
	});

mongoose.connect(MONGOURI + "/food");
var db = mongoose.connection;

// db.once('open', function(){
// 	console.log("Database error!");
// });

db.on('error', function(){
console.log("Database error!");
});

db.once('open', function(){
	console.log("Database UP and RUNNING!");
	server.listen(PORT, function(){
		console.log("Listening now...");
	});
});


// mongoose.connect('mongodb://localhost:27017/food');
// server.listen(3000, function(){
//   console.log("Server is listening");
// });

// Does this help / make sense?