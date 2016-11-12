import express from 'express';
import path from 'path';
import open from 'open';

import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

// Wee can assume that here should be production API

const port = 3000;
const app = express();
const compile = webpack(config);

app.use(require('webpack-dev-middleware')(compile, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.get('/users', function (req, res) {
	res.json([
		{ "id": 1, "firstName": "Mark", "lastName": "Smith", "emain": "em1@mail.com" },
		{ "id": 2, "firstName": "Adam", "lastName": "Olivier", "emain": "em2@mail.com" },
		{ "id": 3, "firstName": "Cory", "lastName": "Tylor", "emain": "em3@mail.com" }
	])
});

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function (err) {
	if(err) {
		console.log('error', err);
	} else {
		open('http://localhost:' + port);
	}
});
