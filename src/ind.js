var unirest = require("unirest");

var req = unirest("GET", "https://emotional-poem.p.rapidapi.com/app/api/getPoem");

req.query({
	"sorrow": "0.1",
	"type": "max",
	"pleasure": "0.01",
	"anger": "1",
	"delight": "0.0",
	"method": "cosaa"
});

req.headers({
	"x-rapidapi-host": "emotional-poem.p.rapidapi.com",
	"x-rapidapi-key": "SIGN-UP-FOR-KEY",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});