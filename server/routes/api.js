const express = require('express');
const router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	  // we're connected!

	 // grab the model
	var Inventario = require('../../src/app/models/Inventario');
	

	/* GET api listing. */
	router.get('/', (req, res) => {
	  res.send('api works');
	});

	/* GET inventario*/
	router.get('/inventario', (req, res) => {
		  Inventario.find({}, function(err, stock) {
	  res.send(stock);
	  });
	});
  
  
});

module.exports = router;
