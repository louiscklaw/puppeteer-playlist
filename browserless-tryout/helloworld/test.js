const express = require('express');
const puppeteer = require('puppeteer-core');
const fs = require('fs');

var route_debug = require('./routes/debug.js');
var route_jobsdb = require('./routes/jobsdb.js');
var route_carousell = require('./routes/carousell.js');

const BROWSER_WEBSOCKET_URL = 'ws://127.0.0.1:3000/?hello=world&--window-size=1200,900';

const app = express();

app.use(express.static('public'));

app.use('/debug', route_debug);
app.use('/jobsdb', route_jobsdb);
app.use('/carousell', route_carousell);

app.listen(8080);
