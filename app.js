'use strict';

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/wfh', function(req, res) {
    request('http://wfh.ninja/quote', function(err, ninjaRes, body) {
        res.send('I\m working from home this morning because ' + _.sample(JSON.parse(body)).text);
    });
});

var port = process.env.PORT || 3000;
app.listen(port);