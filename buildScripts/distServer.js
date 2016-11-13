import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

// Wee can assume that here should be production API

const port = 3000;
const app = express();

app.use(compression()); // creates gzip compression
app.use(express.static('dist'));

// Now it's on heroku server
// app.get('/users', function (req, res) {
// 	res.json([
// 		{ "id": 1, "firstName": "Mark", "lastName": "Smith", "email": "em1@mail.com" },
// 		{ "id": 2, "firstName": "Adam", "lastName": "Olivier", "email": "em2@mail.com" },
// 		{ "id": 3, "firstName": "Cory", "lastName": "Tylor", "email": "em3@mail.com" }
// 	])
// });

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function (err) {
	if(err) {
		console.log('error', err);
	} else {
		open('http://localhost:' + port);
	}
});
