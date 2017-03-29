var express = require('express');
var app = express();
var monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var date;
var natural;
var unix;
app.get('/', function(req, res) {
	res.send('Hello Newman');
});
app.get('/:dateParam', function(req, res) {
	var dateInt = parseInt(req.params.dateParam);
	if (isNaN(dateInt)) {
		date = new Date(req.params.dateParam);
	} else {
		date = new Date(dateInt * 1000);
	}
	if (date == "Invalid Date") {
		unix = null;
		natural = null;
	} else {
		unix = date.getTime() / 1000;
		natural = monthList[date.getMonth()] + ', ' + date.getDate() + ' ' + date.getFullYear();
	}
	var dateObj = {"unix": unix, "natural": natural};
	res.send(dateObj);
});

app.listen(8080, function() {
	console.log('Server listening on 8080');
});
