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

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

// Models
let InfoSchema = mongoose.Schema({
	user: {
		name: { type: String, default: ""},
		email: { type: String, default: ""},
		password: { type: String, default: ""}
	},
  medicineList: [{
    medName: { type: String, default: ""},
    barcode: Number,
    medInfo: { type: String, default: ""},
    conflictList:  { type: [Number], default: []}
  }],
	doctor:{
		docName: { type: String, default: ""},
		phoneNumber: { type: Number, default: 0}
	},
  heart_rate:{ type: [Number],
              default: [0, 0, 0, 0, 0, 0, 0]},
  bmi:       { type: [Number],
            default: [0, 0, 0, 0, 0, 0, 0]},
  BP: { type: [{
        high_pressure: Number,
        low_pressure: Number
      }],
        default: [{ high_pressure:0,low_pressure:0},
          { high_pressure:0,low_pressure:0},
          { high_pressure:0,low_pressure:0},
          { high_pressure:0,low_pressure:0},
          { high_pressure:0,low_pressure:0},
          { high_pressure:0,low_pressure:0},
          { high_pressure:0,low_pressure:0}]},
  Emotion: { type: [Number],
                  default: [0, 0, 0, 0, 0, 0, 0]},
  token: { type: String, default: ""}
}, {
  versionKey: false // You should be aware of the outcome after set to false
});
let MedicineSchema = mongoose.Schema({
    medName: String,
    barcode: Number,
    medInfo: String,
    conflictList: [Number]
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
// search medicine
app.get('/api/medicine', function(req, res) {
  console.log("search");
  Medicine.find({ "barcode": req.query.barcode},function(err, medicine) {
    console.log(req.query.barcode);
    if (err) res.send(err);
    console.log(medicine.toString());
    res.json(medicine);
  });
});
// token
app.get("/api/token", function(req, res){
  //generate random token
  let token = Math.random().toString(36).substr(2);
  Information.update({ "user.name": req.query.name
    },{ $set : { "token" : token } },
    function(err, information) {
      console.log(req.query.name);
      if (err) res.send(err);
      console.log(token.toString());
      res.json(token);
    });
});
// doctor get
app.get("/api/patient", function(req, res){
  //generate random token
  Information.find({ "token": req.query.token
    },{"_id": 0, "user.password": 0, "doctor": 0, "token": 0},
    function(err, information) {
      console.log(information);
      if (err) res.send(err);
      res.json(information);
    });
});

// create new account
app.post('/api/create', function(req, res) {
	console.log("creating new account");
  newAcc = new Information();
  console.log(req.body);
  newAcc.user = req.body;
  newAcc.save(function (err) {
    if (err) return console.error(err);
  });
});
//save
app.post('/api/save', function(req, res) {
  console.log("save");
  // create a review, information comes from request from Ionic
  Information.findById(req.body._id, function (err, info) {
    if (err) console.log(err);
    console.log(info);
    info.set(req.body);
    info.save(function (err, updatedTank) {
      if (err) console.log(err);
      res.send(updatedTank);
    });
  });
});

// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");
