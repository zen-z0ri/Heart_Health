// Set up
let express  = require('express');
let app      = express();                               // create our app w/ express
let mongoose = require('mongoose');                     // mongoose for mongodb
let morgan = require('morgan');             // log requests to the console (express4)
let bodyParser = require('body-parser');    // pull information from HTML POST (express4)
let cors = require('cors');

// Configuration
mongoose.connect('mongodb://localhost/heart', function () {
  console.log('mongodb connected');
});

app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(cors());

// app.use(function(req, res, next) {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
// 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// 	next();
// });

// Models
let InfoSchema = mongoose.Schema({
	user: {
		name: String,
		email: String,
		password: String
	},
  medicineList: [{
    medName: String,
    barcode: Number,
    medInfo: String,
  }],
	doctor:{
		docName: String,
		phoneNumber: Number
	},
  heart_rate:     [Number],
  bmi:            [Number],
  blood_pressure: [{
	  high_pressure: Number,
    low_pressure: Number
  }],
  Emotion:        [Number]
});
let MedicineSchema = mongoose.Schema({
    medName: String,
    barcode: Number,
    medInfo: String,
  });

const Information = mongoose.model('information', InfoSchema, 'information');
const Medicine = mongoose.model('medicine', MedicineSchema, 'medicine');

// Routes
app.get('/api/login', function(req, res) {
	console.log("login");
  Information.find({ "user.name": req.query.name,
                    $and: [ { "user.password": req.query.password } ]
                    },{
                      "user.password": 0,
                      "user.email": 0
                      },
    function(err, information) {
    console.log(req.query.name);
    if (err) res.send(err);
		console.log(information.toString());
		res.json(information);
	});
});

app.get('/api/medicine', function(req, res) {
  console.log("search");
  Medicine.find({ "barcode": req.query.barcode},function(err, medicine) {
    console.log(req.query.barcode);
    if (err) res.send(err);
    console.log(medicine.toString());
    res.json(medicine);
  });
});

//
// // create review and send back all reviews after creation
// app.post('/update', function(req, res) {
// 	console.log("creating review");
// 	// create a review, information comes from request from Ionic
//   Information.update({
// 		title : req.body.title,
// 		description : req.body.description,
// 		rating: req.body.rating,
// 		done : false
// 	}, function(err, review) {
// 		if (err) res.send(err);
// 		// get and return all the reviews after you create another
// 		Review.find(function(err, reviews) {
// 			if (err) res.send(err);
// 			res.json(reviews);
// 		});
// 	});
// });
//
// app.post('/update', function(req, res) {
//   console.log("creating review");
//   // create a review, information comes from request from Ionic
//   Information.update({
//     title : req.body.title,
//     description : req.body.description,
//     rating: req.body.rating,
//     done : false
//   }, function(err, review) {
//     if (err)
//       res.send(err);
//
//     // get and return all the reviews after you create another
//     Review.find(function(err, reviews) {
//       if (err)
//         res.send(err);
//       res.json(reviews);
//     });
//   });
// });


// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");
