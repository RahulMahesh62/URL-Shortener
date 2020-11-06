const express = require('express');
var shorturl = require('shorturl');
var TinyURL = require('tinyurl');
var ejs = require("ejs");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", function(req, res) {
    res.render("index");
});


app.post("/", function(req, res) {
	var url = req.body.url;
	url = url.toString();
	var resurl = "";
	TinyURL.shorten(url, function(result, err) {
  	if (err)
    	console.log(err)
	else
		resurl = result.toString();
		res.render("result", { opresult: resurl });
	});
});

app.listen(PORT, () => {
	console.log("Server Started");
});
